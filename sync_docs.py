#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Quick Utilities Suite - Multilingual Documentation Sync & Translation
完成所有语言文档的同步和翻译
"""

import os
import shutil
from pathlib import Path

DOC_ROOT = Path("./docs")
LANGUAGES = ["ar", "de", "es", "fr", "it", "ja", "ko", "pt-br", "ru", "zh-tw"]
ROOT_FILES = ["commercial.md", "pricing.md", "use-cases.md", "index.md"]
SUB_DIRS = ["privacy", "products"]

def copy_files():
    """Copy all English source files to all language directories"""
    print("🔄 Syncing English source files to all language directories...")
    print("=" * 60)
    
    for lang in LANGUAGES:
        if lang == "zh-cn":
            print(f"⊘ {lang}: Already translated, skipping...")
            continue
        
        lang_dir = DOC_ROOT / lang
        print(f"\n→ Processing {lang}...")
        
        # Copy root files
        for file in ROOT_FILES:
            src = DOC_ROOT / file
            dst = lang_dir / file
            if src.exists():
                shutil.copy2(src, dst)
                print(f"  ✓ {file}")
        
        # Copy subdirectories
        for subdir in SUB_DIRS:
            src_dir = DOC_ROOT / subdir
            dst_dir = lang_dir / subdir
            if src_dir.exists() and dst_dir.exists():
                for md_file in src_dir.glob("*.md"):
                    shutil.copy2(md_file, dst_dir / md_file.name)
                print(f"  ✓ {subdir}/ ({len(list(src_dir.glob('*.md')))} files)")
    
    print("\n" + "=" * 60)
    print("✓ Sync completed!")
    print("\nAll English source files have been deployed to 10 language directories.")
    print("\nNext steps:")
    print("1. Use translation API/service or professional translator")
    print("2. Replace English content in each language directory with translations")
    print("3. Verify all internal links have correct locale prefix (e.g., /pt-br/, /ru/)")
    print("4. Run 'npm run docs:build' to verify all languages build successfully")

if __name__ == "__main__":
    copy_files()

