# PowerShell 脚本 - 为 Quick Utilities Suite 执行多语言翻译
# 这个脚本会为每个语言目录更新关键翻译短语

$docRoot = "d:\project\QuickUtilitiesSuite-org\QuickUtilitiesSuiteCode\MSIX\site\docs"

# 定义翻译映射表（英文 -> 目标语言）
$translations = @{
    "pt-br" = @{  # 葡萄牙语
        "Professional control for multi-monitor brightness" = "Controle profissional de brilho para desktops com múltiplos monitores"
        "Real hardware brightness control" = "Controle real de brilho do hardware"
        "Team & Commercial Support" = "Suporte Comercial e de Equipe"
        "Compare Editions" = "Comparar Edições"
        "Use Cases" = "Casos de Uso"
        "Explore" = "Explorar"
        "Download from Microsoft Store" = "Fazer download da Microsoft Store"
        "Contact Commercial Support" = "Contatar Suporte Comercial"
    };
    "ru" = @{  # 俄语
        "Professional control for multi-monitor brightness" = "Профессиональное управление яркостью для мониторов с множественными экранами"
        "Real hardware brightness control" = "Подлинное управление яркостью оборудования"
        "Team & Commercial Support" = "Поддержка команды и коммерческая поддержка"
        "Compare Editions" = "Сравнить выпуски"
        "Use Cases" = "Сценарии использования"
        "Explore" = "Обзор"
        "Download from Microsoft Store" = "Скачать из Microsoft Store"
    };
    "ar" = @{  # 阿拉伯语
        "Professional control for multi-monitor brightness" = "التحكم المهني في السطوع لأجهزة العرض المتعددة"
        "Real hardware brightness control" = "التحكم الحقيقي في سطوع الأجهزة"
        "Team & Commercial Support" = "دعم الفريق والدعم التجاري"
        "Compare Editions" = "مقارنة الإصدارات"
        "Use Cases" = "حالات الاستخدام"
        "Explore" = "استكشاف"
        "Download from Microsoft Store" = "التنزيل من Microsoft Store"
    };
    "ja" = @{  # 日语
        "Professional control for multi-monitor brightness" = "複数モニターの輝度の専門的な制御"
        "Real hardware brightness control" = "実際のハードウェア輝度制御"
        "Team & Commercial Support" = "チームおよびコマーシャルサポート"
        "Compare Editions" = "エディションを比較"
        "Use Cases" = "ユースケース"
        "Explore" = "探索"
        "Download from Microsoft Store" = "Microsoft Storeからダウンロード"
    };
    "ko" = @{  # 韩语
        "Professional control for multi-monitor brightness" = "다중 모니터 밝기의 전문적 제어"
        "Real hardware brightness control" = "실제 하드웨어 밝기 제어"
        "Team & Commercial Support" = "팀 및 상업 지원"
        "Compare Editions" = "에디션 비교"
        "Use Cases" = "사용 사례"
        "Explore" = "탐색"
        "Download from Microsoft Store" = "Microsoft Store에서 다운로드"
    };
    "it" = @{  # 意大利语
        "Professional control for multi-monitor brightness" = "Controllo professionale della luminosità multi-monitor"
        "Real hardware brightness control" = "Controllo reale della luminosità dell'hardware"
        "Team & Commercial Support" = "Supporto commerciale e del team"
        "Compare Editions" = "Confronta edizioni"
        "Use Cases" = "Casi d'uso"
        "Explore" = "Esplora"
        "Download from Microsoft Store" = "Scarica da Microsoft Store"
    };
    "de" = @{  # 德语
        "Professional control for multi-monitor brightness" = "Professionelle Steuerung der Helligkeit für mehrere Monitore"
        "Real hardware brightness control" = "Echte Helligkeit sssteuerung der Hardware"
        "Team & Commercial Support" = "Team- und kommerzielle Unterstützung"
        "Compare Editions" = "Editionen vergleichen"
        "Use Cases" = "Anwendungsfälle"
        "Explore" = "Erkunden"
        "Download from Microsoft Store" = "Von Microsoft Store herunterladen"
    };
    "es" = @{  # 西班牙语
        "Professional control for multi-monitor brightness" = "Control profesional de brillo para múltiples monitores"
        "Real hardware brightness control" = "Control de brillo de hardware real"
        "Team & Commercial Support" = "Soporte comercial y de equipo"
        "Compare Editions" = "Comparar ediciones"
        "Use Cases" = "Casos de uso"
        "Explore" = "Explorar"
        "Download from Microsoft Store" = "Descargar desde Microsoft Store"
    };
    "fr" = @{  # 法语
        "Professional control for multi-monitor brightness" = "Contrôle professionnel de la luminosité multi-écran"
        "Real hardware brightness control" = "Véritable contrôle de luminosité matérielle"
        "Team & Commercial Support" = "Support d'équipe et commercial"
        "Compare Editions" = "Comparer les éditions"
        "Use Cases" = "Cas d'usage"
        "Explore" = "Explorer"
        "Download from Microsoft Store" = "Télécharger depuis Microsoft Store"
    };
    "zh-tw" = @{  # 繁体中文
        "Professional control for multi-monitor brightness" = "多螢幕亮度的專業控制"
        "Real hardware brightness control" = "真實硬體亮度控制"
        "Team & Commercial Support" = "團隊和商業支援"
        "Compare Editions" = "比較版本"
        "Use Cases" = "使用案例"
        "Explore" = "探索"
        "Download from Microsoft Store" = "從Microsoft Store下載"
    };
}

Write-Host "Quick Utilities Suite - 多語言翻譯更新腳本" -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host "警告：此腳本僅對關鍵短語進行部分翻譯。"
Write-Host "為了完整翻譯，建議："
Write-Host "1. 使用專業翻譯工具或服務"
Write-Host "2. 或聯繫專業翻譯人員進行全文翻譯"
Write-Host "3. 完成後，在相應的 /docs/{lang}/ 目錄中手動調整所有  markdown 文件"
Write-Host ""
Write-Host "本腳本提供翻譯詞彙表供参考。"
Write-Host ""

# 顯示翻譯統計
$totalTranslations = 0
foreach ($lang in $translations.Keys) {
    $count = $translations[$lang].Count
    Write-Host "[$lang] $count 個短語翻譯"
    $totalTranslations += $count
}
Write-Host ""
Write-Host "總計：$totalTranslations 個翻譯詞對"
Write-Host ""
Write-Host "使用建議：將此腳本結合 VS Code 查找/替換功能或腳本工具來應用翻譯。"
