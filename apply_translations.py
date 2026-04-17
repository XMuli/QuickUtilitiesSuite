#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Quick Utilities Suite - Apply Translations to All Languages
将翻译内容应用到所有 10 个语言目录
"""

import os
import re
from pathlib import Path

DOC_ROOT = Path("./docs")

# 完整的翻译映射表 - 根据每个语言的关键短语
TRANSLATIONS = {
    "pt-br": {  # 葡萄牙语(巴西)
        "Professional control for multi-monitor brightness": "Controle profissional de brilho para desktops com múltiplos monitores",
        "Adjust the real hardware brightness": "Ajuste o brilho real do hardware",
        "Team & Commercial Support": "Suporte Comercial e de Equipe",
        "Quick Utilities products can be discussed": "Os produtos Quick Utilities podem ser discutidos",
        "Compare Editions": " Comparar Edições",
        "Which one should you choose": "Qual você deve escolher",
        "Use Cases": "Casos de Uso",
        "Explore": "Explorar",
        "Download from Microsoft Store": "Fazer download da Microsoft Store",
        "Contact Commercial Support": "Contatar Suporte Comercial",
        "Real hardware brightness control": "Controle real de brilho do hardware",
    },
    "ru": {  # 俄语
        "Professional control for multi-monitor brightness": "Профессиональное управление яркостью для мониторов с множественными экранами",
        "Team & Commercial Support": "Поддержка команды и коммерческая поддержка",
        "Compare Editions": "Сравнить выпуски",
        "Use Cases": "Сценарии использования",
        "Explore": "Обзор",
        "Download from Microsoft Store": "Скачать из Microsoft Store",
    },
    "ar": {  # 阿拉伯语
        "Professional control for multi-monitor brightness": "التحكم المهني في السطوع لأجهزة العرض المتعددة",
        "Team & Commercial Support": "دعم الفريق والدعم التجاري",
        "Compare Editions": "مقارنة الإصدارات",
        "Use Cases": "حالات الاستخدام",
        "Explore": "استكشاف",
        "Download from Microsoft Store": "التنزيل من Microsoft Store",
    },
    "ja": {  # 日语
        "Professional control for multi-monitor brightness": "複数モニターの輝度の専門的な制御",
        "Team & Commercial Support": "チームおよびコマーシャルサポート",
        "Compare Editions": "エディションを比較",
        "Use Cases": "ユースケース",
        "Explore": "探索",
        "Download from Microsoft Store": "Microsoft Storeからダウンロード",
    },
    "ko": {  # 韩语
        "Professional control for multi-monitor brightness": "다중 모니터 밝기의 전문적 제어",
        "Team & Commercial Support": "팀 및 상업 지원",
        "Compare Editions": "에디션 비교",
        "Use Cases": "사용 사례",
        "Explore": "탐색",
        "Download from Microsoft Store": "Microsoft Store에서 다운로드",
    },
    "it": {  # 意大利语
        "Professional control for multi-monitor brightness": "Controllo professionale della luminosità multi-monitor",
        "Team & Commercial Support": "Supporto commerciale e del team",
        "Compare Editions": "Confronta edizioni",
        "Use Cases": "Casi d'uso",
        "Explore": "Esplora",
        "Download from Microsoft Store": "Scarica da Microsoft Store",
    },
    "de": {  # 德语
        "Professional control for multi-monitor brightness": "Professionelle Steuerung der Helligkeit für mehrere Monitore",
        "Team & Commercial Support": "Team- und kommerzielle Unterstützung",
        "Compare Editions": "Editionen vergleichen",
        "Use Cases": "Anwendungsfälle",
        "Explore": "Erkunden",
        "Download from Microsoft Store": "Von Microsoft Store herunterladen",
    },
    "es": {  # 西班牙语
        "Professional control for multi-monitor brightness": "Control profesional de brillo para múltiples monitores",
        "Team & Commercial Support": "Soporte comercial y de equipo",
        "Compare Editions": "Comparar ediciones",
        "Use Cases": "Casos de uso",
        "Explore": "Explorar",
        "Download from Microsoft Store": "Descargar desde Microsoft Store",
    },
    "fr": {  # 法语
        "Professional control for multi-monitor brightness": "Contrôle professionnel de la luminosité multi-écran",
        "Team & Commercial Support": "Support d'équipe et commercial",
        "Compare Editions": "Comparer les éditions",
        "Use Cases": "Cas d'usage",
        "Explore": "Explorer",
        "Download from Microsoft Store": "Télécharger depuis Microsoft Store",
    },
    "zh-tw": {  # 繁体中文
        "Professional control for multi-monitor brightness": "多螢幕亮度的專業控制",
        "Team & Commercial Support": "團隊和商業支援",
        "Compare Editions": "比較版本",
        "Use Cases": "使用案例",
        "Explore": "探索",
        "Download from Microsoft Store": "從Microsoft Store下載",
    },
}

def apply_translations():
    """Apply translations to all language directories"""
    print("🌐 Applying translations...")
    print("=" * 60)
    
    languages = ["ar", "de", "es", "fr", "it", "ja", "ko", "pt-br", "ru", "zh-tw"]
    
    for lang in languages:
        if lang not in TRANSLATIONS:
            print(f"⚠ {lang}: Translation map not found, skipping...")
            continue
        
        lang_dir = DOC_ROOT / lang
        translation_map = TRANSLATIONS[lang]
        
        print(f"\n→ Translating {lang}...")
        
        # Process all markdown files
        md_files = list(lang_dir.glob("**/*.md"))
        for md_file in md_files:
            content = md_file.read_text(encoding='utf-8')
            original_hash = hash(content)
            
            # Apply translations
            for en_text, trans_text in translation_map.items():
                content = content.replace(en_text, trans_text, 1)
            
            # Update route prefix if needed
            # Replace /products/, /pricing etc with /{lang}/products/, /{lang}/pricing
            if lang != "root":
                content = re.sub(r'link: /(?!images|home_page)', f'link: /{lang}/', content)
                content = re.sub(r'href="(?!/images|/home_page|https)', f'href="/{lang}/', content)
            
            # Write back if changed
            if hash(content) != original_hash:
                md_file.write_text(content, encoding='utf-8')
                print(f"  ✓ {md_file.relative_to(DOC_ROOT)}")
    
    print("\n" + "=" * 60)
    print("✓ Translation applied!")
    print("\nNote: This script applied partial translations for key phrases.")
    print("For complete translation, consider using professional translation service.")

if __name__ == "__main__":
    apply_translations()

