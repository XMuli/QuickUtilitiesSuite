#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Quick Utilities Suite - 多语言文档翻译脚本
将英文文档翻译成 10 种语言
"""

import os
import json

# 翻译映射表 - 关键短语/术语翻译
translations = {
    "pt-br": {  # 葡萄牙语（巴西）
        "Quick BrightnessSync": "Quick BrightnessSync",
        "Professional control for multi-monitor brightness": "Controle profissional de brilho para desktops com múltiplos monitores",
        "Real hardware brightness control": "Controle real de brilho do hardware",
        "Team & Commercial Support": "Suporte Comercial e de Equipe",
        "Quick Utilities products can be discussed for team use": "Os produtos Quick Utilities podem ser discutidos para uso em equipe",
        "Compare Editions": "Comparar Edições",
        "Use Cases": "Casos de Uso",
        "Explore": "Explorar",
        "Multi-monitor desks": "Mesas com múltiplos monitores",
        "Focused multitasking": "Multitarefas focadas",
        "Download from Microsoft Store": "Fazer download da Microsoft Store",
    },
    "ru": {  # 俄语
        "Quick BrightnessSync": "Quick BrightnessSync",
        "Professional control for multi-monitor brightness": "Профессиональное управление яркостью для мониторов",
    },
    "ar": {  # 阿拉伯语
        "Quick BrightnessSync": "Quick BrightnessSync",
        "Professional control for multi-monitor brightness": "التحكم المهني في السطوع متعدد الشاشات",
    },
    "ja": {  # 日语
        "Quick BrightnessSync": "Quick BrightnessSync",
        "Professional control for multi-monitor brightness": "複数モニターの輝度の専門的な制御",
    },
    "ko": {  # 韩语
        "Quick BrightnessSync": "Quick BrightnessSync",
        "Professional control for multi-monitor brightness": "다중 모니터 밝기의 전문적 제어",
    },
    "it": {  # 意大利语
        "Quick BrightnessSync": "Quick BrightnessSync",
        "Professional control for multi-monitor brightness": "Controllo professionale della luminosità multi-monitor",
    },
    "de": {  # 德语
        "Quick BrightnessSync": "Quick BrightnessSync",
        "Professional control for multi-monitor brightness": "Professionelle Helligkeitskontrolle für mehrere Monitore",
    },
    "es": {  # 西班牙语
        "Quick BrightnessSync": "Quick BrightnessSync",
        "Professional control for multi-monitor brightness": "Control profesional de brillo para múltiples monitores",
    },
    "fr": {  # 法语
        "Quick BrightnessSync": "Quick BrightnessSync",
        "Professional control for multi-monitor brightness": "Contrôle professionnel de la luminosité multi-écran",
    },
    "zh-tw": {  # 繁体中文
        "Quick BrightnessSync": "Quick BrightnessSync",
        "Professional control for multi-monitor brightness": "多螢幕亮度的專業控制",
    },
}

# 完整的翻译内容（每个语言的每个文件）
docs_content = {
    "pt-br": {
        "index.md": """---
layout: home

hero:
  name: "Quick BrightnessSync"
  text: "Controle profissional de brilho para desktops com múltiplos monitores"
  tagline: "Ajuste o brilho real do hardware dos monitores externos por uma interface limpa e uniforme, e mantenha o resto do seu desktop organizado com ferramentas que suportam trabalho sério."
  image:
    src: /images/snapshoot/Quick%20BrightnessSync.png
    alt: Quick BrightnessSync
  actions:
    - theme: brand
      text: Explorar BrightnessSync
      link: /pt-br/products/quick-brightnesssync
    - theme: alt
      text: Explorar AlwaysOnTop
      link: /pt-br/products/quick-alwaysontop
    - theme: alt
      text: Comparar Edições
      link: /pt-br/pricing

features:
  - title: Quick BrightnessSync
    details: Controle real de brilho de hardware para monitores externos, projetado para mesas que funcionam em dois, três ou mais displays.
    icon:
      light: /images/quick-logo/Quick%20BrightnessSync.svg
      dark: /images/quick-logo/Quick%20BrightnessSync.svg
  - title: Quick AlwaysOnTop
    details: Mantenha janelas de referência, painéis de reuniões, calculadoras, chats e ferramentas de suporte visíveis enquanto o resto do seu espaço de trabalho continua se movendo.
    icon:
      light: /images/home_features/QuickAlwaysOnTop.svg
      dark: /images/home_features/QuickAlwaysOnTop.svg
  - title: Quick WindowInspector
    details: Superfícei os detalhes da janela que você precisa sem a complexidade de ferramentas de inspeção mais pesadas.
    icon:
      light: /images/home_features/QuickWindowInspector.svg
      dark: /images/home_features/QuickWindowInspector.svg
  - title: Quick BulkFileCopy
    details: Mova pastas com muitos arquivos mais rápido, com progressão mais clara e verificação pós-cópia.
    icon:
      light: /images/home_features/QuickBulkFileCopy.svg
      dark: /images/home_features/QuickBulkFileCopy.svg
  - title: Quick BulkFileDelete
    details: Remova pastas super grandes de forma mais eficiente e evite que a limpeza interrompa o seu dia.
    icon:
      light: /images/home_features/QuickBulkFileDelete.svg
      dark: /images/home_features/QuickBulkFileDelete.svg
  - title: Quick DefenderToggle
    details: Dê aos workflows avançados do Windows uma forma mais direta de gerenciar o estado do Defender quando a política permitir.
    icon:
      light: /images/home_features/QuickDefenderToggle.svg
      dark: /images/home_features/QuickDefenderToggle.svg
  - title: Quick SnapTranslate
    details: Capture, reconheça e traduza texto da tela em um fluxo ininterrupto.
    icon:
      light: /images/home_features/QuickSnapTranslate.svg
      dark: /images/home_features/QuickSnapTranslate.svg
---

## Construído para workflows sérios do Windows

Quick Utilities Suite se concentra nos pontos de fricção que desacelaram o trabalho desktop moderno: controle desigual de monitores, operações de arquivo repetitivas, aplicativos utilitários espalhados e manipulação de idiomas mais lenta. Cada ferramenta foi projetada para ser prática, leve e pronta quando o trabalho fica intenso.
""",
    }
}

print("Multilingual Documentation Translation Script")
print("=" * 50)
print(f"Supported languages: {len(translations)}")
print(f"Total files to translate: {len(docs_content)}")
print("\nNote: This script is a template for batch translation.")
print("Manual translation is recommended for production use.")

