#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Translate the remaining English marketing pages using the same source phrase map.
Requires network access.
"""

from __future__ import annotations

import importlib.util
import json
import urllib.parse
import urllib.request
from pathlib import Path

MODULE_PATH = Path(__file__).with_name("translation-complete.py")
SPEC = importlib.util.spec_from_file_location("translation_complete_runtime", MODULE_PATH)
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC is not None and SPEC.loader is not None
SPEC.loader.exec_module(MODULE)

TARGET_FILES = MODULE.TARGET_FILES
TRANSLATIONS = MODULE.TRANSLATIONS
DOC_ROOT = MODULE.DOC_ROOT
apply_replacements = MODULE.apply_replacements

REMAINING = {
    "ar": "ar",
    "ja": "ja",
    "ko": "ko",
    "ru": "ru",
}

SOURCE_KEYS = list(TRANSLATIONS["fr"].keys())


def translate_text(text: str, target: str) -> str:
    params = urllib.parse.urlencode(
        {
            "client": "gtx",
            "sl": "en",
            "tl": target,
            "dt": "t",
            "q": text,
        }
    )
    url = f"https://translate.googleapis.com/translate_a/single?{params}"
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=30) as response:
        payload = json.loads(response.read().decode("utf-8"))
    return "".join(part[0] for part in payload[0] if part and part[0]).strip()


def build_mapping(target: str) -> dict[str, str]:
    mapping: dict[str, str] = {}
    for key in SOURCE_KEYS:
        mapping[key] = translate_text(key, target)
    return mapping


def needs_translation(language: str) -> bool:
    for relative in TARGET_FILES:
        path = DOC_ROOT / language / relative
        if not path.exists():
            continue
        content = path.read_text(encoding="utf-8", errors="ignore")
        if any(key in content for key in SOURCE_KEYS):
            return True
    return False


def main() -> None:
    for language, target in REMAINING.items():
        if not needs_translation(language):
            print(f"{language}: already localized, skipping")
            continue
        print(f"Building translation map for {language}...")
        mapping = build_mapping(target)
        updated = 0
        for relative in TARGET_FILES:
            path = DOC_ROOT / language / relative
            if not path.exists():
                continue
            original = path.read_text(encoding="utf-8")
            translated = apply_replacements(original, mapping)
            if translated != original:
                path.write_text(translated, encoding="utf-8")
                updated += 1
        print(f"{language}: updated {updated} files")


if __name__ == "__main__":
    main()
