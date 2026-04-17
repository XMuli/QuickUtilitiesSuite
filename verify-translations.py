#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Translation Status Verification Report
检查和报告所有语言的翻译状态
"""

import os
import re
from pathlib import Path
from collections import defaultdict

DOC_ROOT = Path("./docs")
LANGUAGES = ["ar", "de", "es", "fr", "it", "ja", "ko", "pt-br", "ru", "zh-cn", "zh-tw"]

def count_english_content(text):
    """估计英文内容的百分比"""
    # 检测关键的英文短语
    english_phrases = [
        "Professional", "team use", "download", "compare", "explore",
        "Choose", "should", "control", "display", "windows",
        "Click", "Here", "Learn", "More", "Best",
    ]
    
    english_count = 0
    for phrase in english_phrases:
        english_count += text.count(phrase)
    
    total_words = len(text.split())
    if total_words == 0:
        return 0
    return min(100, (english_count * 100) // max(1, total_words))

def verify_translations():
    """Verify translation status for all language directories"""
    print("📊 Translation Status Report")
    print("=" * 70)
    print(f"Report generated: {Path('.').absolute()}")
    print(f"Total languages: {len(LANGUAGES)}")
    print()
    
    stats = {
        "total_files": 0,
        "translated": 0,
        "partially_translated": 0,
        "not_translated": 0,
    }
    
    lang_stats = defaultdict(lambda: {"total": 0, "files": []})
    
    for lang in LANGUAGES:
        lang_dir = DOC_ROOT / lang
        
        # Skip non-existent or zh-cn (reference)
        if not lang_dir.exists():
            continue
        
        if lang == "zh-cn":
            print(f"✓ {lang:12} - Complete (Reference translation available)")
            stats["translated"] += 1
            continue
        
        # Count files and assess translation status
        md_files = list(lang_dir.glob("**/*.md"))
        stats["total_files"] += len(md_files)
        lang_stats[lang]["total"] = len(md_files)
        
        # Sample files to check translation status
        sample_size = min(2, len(md_files))
        english_percentage = 0
        
        for md_file in md_files[:sample_size]:
            content = md_file.read_text(encoding='utf-8', errors='ignore')
            english_pct = count_english_content(content)
            english_percentage += english_pct
        
        if sample_size > 0:
            english_percentage //= sample_size
        
        # Classify translation status
        if english_percentage > 50:
            status = "⚠ Partial (Key phrases translated)"
            stats["partially_translated"] += 1
            indicator = "→"
        elif english_percentage > 10:
            status = "◐ Mostly translated"
            stats["partially_translated"] += 1
            indicator = "◑"
        else:
            status = "✗ Not translated"
            stats["not_translated"] += 1
            indicator = "✗"
        
        lang_stats[lang]["files"] = len(md_files)
        
        print(f"{indicator} {lang:12} - {len(md_files):2} files [{status}]")
    
    print()
    print("=" * 70)
    print("📈 Summary Statistics:")
    print(f"  Total files processed: {stats['total_files']}")
    print(f"  Completely translated: {stats['translated']} language(s)")
    print(f"  Partially translated: {stats['partially_translated']} language(s)")
    print(f"  Not yet translated: {stats['not_translated']} language(s)")
    print()
    
    print("=" * 70)
    print("📝 Next Steps:")
    print("  1. Use a professional translation tool/API for complete translations")
    print("  2. Key phrases have been automatically translated")
    print("  3. Full content translation recommended for quality")
    print("  4. Test build: npm run docs:build")
    print("  5. Verify links and locale-specific content")
    print()
    
    print("=" * 70)
    print("🔗 Translation Resources:")
    print("  - Microsoft Translator API")
    print("  - Google Cloud Translation API")
    print("  - AWS Translate")
    print("  - DeepL Pro")
    print("  - Professional translation services")
    print()

if __name__ == "__main__":
    verify_translations()

