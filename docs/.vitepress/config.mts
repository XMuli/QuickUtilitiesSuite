import { defineConfig } from 'vitepress'

// Per-locale product item lists
const productItems = {
  root: [
    { text: '快速·实用工具箱', link: '/products/quick-utilities-suite' },
    { text: '快速·屏幕取色器', link: '/products/quick-colorpicker' },
    { text: '快速·批量文件复制', link: '/products/quick-bulkfilecopy' },
    { text: '快速·批量文件删除', link: '/products/quick-bulkfiledelete' },
    { text: '快速·截图翻译', link: '/products/quick-snaptranslate' },
    { text: '快速·窗口名侦探', link: '/products/quick-windowinspector' },
    { text: '快速·窗口置顶', link: '/products/quick-alwaysontop' },
    { text: '快速·Defender 开关', link: '/products/quick-defendertoggle' }
  ],
  en: [
    { text: 'Quick Utilities Suite', link: '/products/quick-utilities-suite' },
    { text: 'Quick ColorPicker', link: '/products/quick-colorpicker' },
    { text: 'Quick BulkFileCopy', link: '/products/quick-bulkfilecopy' },
    { text: 'Quick BulkFileDelete', link: '/products/quick-bulkfiledelete' },
    { text: 'Quick SnapTranslate', link: '/products/quick-snaptranslate' },
    { text: 'Quick WindowInspector', link: '/products/quick-windowinspector' },
    { text: 'Quick AlwaysOnTop', link: '/products/quick-alwaysontop' },
    { text: 'Quick DefenderToggle', link: '/products/quick-defendertoggle' }
  ],
  'zh-tw': [
    { text: '快速·實用工具箱', link: '/products/quick-utilities-suite' },
    { text: '快速·螢幕取色器', link: '/products/quick-colorpicker' },
    { text: '快速·批量檔案複製', link: '/products/quick-bulkfilecopy' },
    { text: '快速·批量檔案刪除', link: '/products/quick-bulkfiledelete' },
    { text: '快速·截圖翻譯', link: '/products/quick-snaptranslate' },
    { text: '快速·視窗名偵探', link: '/products/quick-windowinspector' },
    { text: '快速·視窗置頂', link: '/products/quick-alwaysontop' },
    { text: '快速·Defender 開關', link: '/products/quick-defendertoggle' }
  ],
  ja: [
    { text: 'Quick Utilities Suite', link: '/products/quick-utilities-suite' },
    { text: 'Quick ColorPicker', link: '/products/quick-colorpicker' },
    { text: 'Quick BulkFileCopy', link: '/products/quick-bulkfilecopy' },
    { text: 'Quick BulkFileDelete', link: '/products/quick-bulkfiledelete' },
    { text: 'Quick SnapTranslate', link: '/products/quick-snaptranslate' },
    { text: 'Quick WindowInspector', link: '/products/quick-windowinspector' },
    { text: 'Quick AlwaysOnTop', link: '/products/quick-alwaysontop' },
    { text: 'Quick DefenderToggle', link: '/products/quick-defendertoggle' }
  ],
  ko: [
    { text: 'Quick Utilities Suite', link: '/products/quick-utilities-suite' },
    { text: 'Quick ColorPicker', link: '/products/quick-colorpicker' },
    { text: 'Quick BulkFileCopy', link: '/products/quick-bulkfilecopy' },
    { text: 'Quick BulkFileDelete', link: '/products/quick-bulkfiledelete' },
    { text: 'Quick SnapTranslate', link: '/products/quick-snaptranslate' },
    { text: 'Quick WindowInspector', link: '/products/quick-windowinspector' },
    { text: 'Quick AlwaysOnTop', link: '/products/quick-alwaysontop' },
    { text: 'Quick DefenderToggle', link: '/products/quick-defendertoggle' }
  ],
  de: [
    { text: 'Quick Utilities Suite', link: '/products/quick-utilities-suite' },
    { text: 'Quick ColorPicker', link: '/products/quick-colorpicker' },
    { text: 'Quick BulkFileCopy', link: '/products/quick-bulkfilecopy' },
    { text: 'Quick BulkFileDelete', link: '/products/quick-bulkfiledelete' },
    { text: 'Quick SnapTranslate', link: '/products/quick-snaptranslate' },
    { text: 'Quick WindowInspector', link: '/products/quick-windowinspector' },
    { text: 'Quick AlwaysOnTop', link: '/products/quick-alwaysontop' },
    { text: 'Quick DefenderToggle', link: '/products/quick-defendertoggle' }
  ],
  fr: [
    { text: 'Quick Utilities Suite', link: '/products/quick-utilities-suite' },
    { text: 'Quick ColorPicker', link: '/products/quick-colorpicker' },
    { text: 'Quick BulkFileCopy', link: '/products/quick-bulkfilecopy' },
    { text: 'Quick BulkFileDelete', link: '/products/quick-bulkfiledelete' },
    { text: 'Quick SnapTranslate', link: '/products/quick-snaptranslate' },
    { text: 'Quick WindowInspector', link: '/products/quick-windowinspector' },
    { text: 'Quick AlwaysOnTop', link: '/products/quick-alwaysontop' },
    { text: 'Quick DefenderToggle', link: '/products/quick-defendertoggle' }
  ],
  es: [
    { text: 'Quick Utilities Suite', link: '/products/quick-utilities-suite' },
    { text: 'Quick ColorPicker', link: '/products/quick-colorpicker' },
    { text: 'Quick BulkFileCopy', link: '/products/quick-bulkfilecopy' },
    { text: 'Quick BulkFileDelete', link: '/products/quick-bulkfiledelete' },
    { text: 'Quick SnapTranslate', link: '/products/quick-snaptranslate' },
    { text: 'Quick WindowInspector', link: '/products/quick-windowinspector' },
    { text: 'Quick AlwaysOnTop', link: '/products/quick-alwaysontop' },
    { text: 'Quick DefenderToggle', link: '/products/quick-defendertoggle' }
  ],
  'pt-br': [
    { text: 'Quick Utilities Suite', link: '/products/quick-utilities-suite' },
    { text: 'Quick ColorPicker', link: '/products/quick-colorpicker' },
    { text: 'Quick BulkFileCopy', link: '/products/quick-bulkfilecopy' },
    { text: 'Quick BulkFileDelete', link: '/products/quick-bulkfiledelete' },
    { text: 'Quick SnapTranslate', link: '/products/quick-snaptranslate' },
    { text: 'Quick WindowInspector', link: '/products/quick-windowinspector' },
    { text: 'Quick AlwaysOnTop', link: '/products/quick-alwaysontop' },
    { text: 'Quick DefenderToggle', link: '/products/quick-defendertoggle' }
  ],
  ru: [
    { text: 'Quick Utilities Suite', link: '/products/quick-utilities-suite' },
    { text: 'Quick ColorPicker', link: '/products/quick-colorpicker' },
    { text: 'Quick BulkFileCopy', link: '/products/quick-bulkfilecopy' },
    { text: 'Quick BulkFileDelete', link: '/products/quick-bulkfiledelete' },
    { text: 'Quick SnapTranslate', link: '/products/quick-snaptranslate' },
    { text: 'Quick WindowInspector', link: '/products/quick-windowinspector' },
    { text: 'Quick AlwaysOnTop', link: '/products/quick-alwaysontop' },
    { text: 'Quick DefenderToggle', link: '/products/quick-defendertoggle' }
  ],
  it: [
    { text: 'Quick Utilities Suite', link: '/products/quick-utilities-suite' },
    { text: 'Quick ColorPicker', link: '/products/quick-colorpicker' },
    { text: 'Quick BulkFileCopy', link: '/products/quick-bulkfilecopy' },
    { text: 'Quick BulkFileDelete', link: '/products/quick-bulkfiledelete' },
    { text: 'Quick SnapTranslate', link: '/products/quick-snaptranslate' },
    { text: 'Quick WindowInspector', link: '/products/quick-windowinspector' },
    { text: 'Quick AlwaysOnTop', link: '/products/quick-alwaysontop' },
    { text: 'Quick DefenderToggle', link: '/products/quick-defendertoggle' }
  ],
  ar: [
    { text: 'Quick Utilities Suite', link: '/products/quick-utilities-suite' },
    { text: 'Quick ColorPicker', link: '/products/quick-colorpicker' },
    { text: 'Quick BulkFileCopy', link: '/products/quick-bulkfilecopy' },
    { text: 'Quick BulkFileDelete', link: '/products/quick-bulkfiledelete' },
    { text: 'Quick SnapTranslate', link: '/products/quick-snaptranslate' },
    { text: 'Quick WindowInspector', link: '/products/quick-windowinspector' },
    { text: 'Quick AlwaysOnTop', link: '/products/quick-alwaysontop' },
    { text: 'Quick DefenderToggle', link: '/products/quick-defendertoggle' }
  ]
}

const nav = {
  root: [
    { text: 'Home', link: '/' },
    { text: 'Products', items: productItems.en },
    { text: 'Privacy', link: '/privacy/open-source-license' }
  ],
  'zh-cn': [
    { text: '首页', link: '/zh-cn/' },
    { text: '产品介绍', items: productItems.root },
    { text: '隐私协议', link: '/zh-cn/privacy/open-source-license' }
  ],
  'zh-tw': [
    { text: '首頁', link: '/zh-tw/' },
    { text: '產品介紹', items: productItems['zh-tw'] },
    { text: '隱私協議', link: '/zh-tw/privacy/open-source-license' }
  ],
  ja: [
    { text: 'ホーム', link: '/ja/' },
    { text: '製品紹介', items: productItems.ja },
    { text: 'プライバシー', link: '/ja/privacy/open-source-license' }
  ],
  ko: [
    { text: '홈', link: '/ko/' },
    { text: '제품 소개', items: productItems.ko },
    { text: '개인정보', link: '/ko/privacy/open-source-license' }
  ],
  de: [
    { text: 'Startseite', link: '/de/' },
    { text: 'Produkte', items: productItems.de },
    { text: 'Datenschutz', link: '/de/privacy/open-source-license' }
  ],
  fr: [
    { text: 'Accueil', link: '/fr/' },
    { text: 'Produits', items: productItems.fr },
    { text: 'Confidentialité', link: '/fr/privacy/open-source-license' }
  ],
  es: [
    { text: 'Inicio', link: '/es/' },
    { text: 'Productos', items: productItems.es },
    { text: 'Privacidad', link: '/es/privacy/open-source-license' }
  ],
  'pt-br': [
    { text: 'Início', link: '/pt-br/' },
    { text: 'Produtos', items: productItems['pt-br'] },
    { text: 'Privacidade', link: '/pt-br/privacy/open-source-license' }
  ],
  ru: [
    { text: 'Главная', link: '/ru/' },
    { text: 'Продукты', items: productItems.ru },
    { text: 'Конфиденциальность', link: '/ru/privacy/open-source-license' }
  ],
  it: [
    { text: 'Home', link: '/it/' },
    { text: 'Prodotti', items: productItems.it },
    { text: 'Privacy', link: '/it/privacy/open-source-license' }
  ],
  ar: [
    { text: 'الرئيسية', link: '/ar/' },
    { text: 'المنتجات', items: productItems.ar },
    { text: 'الخصوصية', link: '/ar/privacy/open-source-license' }
  ]
}

const sidebar = {
  root: [
    {
      text: 'Products',
      items: productItems.en
    },
    {
      text: 'Privacy',
      items: [
        { text: 'Open Source License', link: '/privacy/open-source-license' },
        { text: 'Software License', link: '/privacy/license' },
        { text: 'Privacy & Data Protection', link: '/privacy/privacy-and-data-protection' },
        { text: 'Feature Overview', link: '/privacy/functions' }
      ]
    }
  ],
  'zh-cn': [
    {
      text: '产品介绍',
      items: productItems.root
    },
    {
      text: '隐私协议',
      items: [
        { text: '开源许可协议', link: '/zh-cn/privacy/open-source-license' },
        { text: '软件许可协议', link: '/zh-cn/privacy/license' },
        { text: '隐私安全协议', link: '/zh-cn/privacy/privacy-and-data-protection' },
        { text: '功能介绍', link: '/zh-cn/privacy/functions' }
      ]
    }
  ],
  'zh-tw': [
    {
      text: '產品介紹',
      items: productItems['zh-tw']
    },
    {
      text: '隱私協議',
      items: [
        { text: '開源許可協議', link: '/zh-tw/privacy/open-source-license' },
        { text: '軟體許可協議', link: '/zh-tw/privacy/license' },
        { text: '隱私與資料保護', link: '/zh-tw/privacy/privacy-and-data-protection' },
        { text: '功能介紹', link: '/zh-tw/privacy/functions' }
      ]
    }
  ],
  ja: [
    {
      text: '製品紹介',
      items: productItems.ja
    },
    {
      text: 'プライバシー',
      items: [
        { text: 'オープンソースライセンス', link: '/ja/privacy/open-source-license' },
        { text: 'ソフトウェアライセンス', link: '/ja/privacy/license' },
        { text: 'プライバシーとデータ保護', link: '/ja/privacy/privacy-and-data-protection' },
        { text: '機能紹介', link: '/ja/privacy/functions' }
      ]
    }
  ],
  ko: [
    {
      text: '제품 소개',
      items: productItems.ko
    },
    {
      text: '개인정보',
      items: [
        { text: '오픈소스 라이선스', link: '/ko/privacy/open-source-license' },
        { text: '소프트웨어 라이선스', link: '/ko/privacy/license' },
        { text: '개인정보 보호', link: '/ko/privacy/privacy-and-data-protection' },
        { text: '기능 소개', link: '/ko/privacy/functions' }
      ]
    }
  ],
  de: [
    {
      text: 'Produkte',
      items: productItems.de
    },
    {
      text: 'Datenschutz',
      items: [
        { text: 'Open-Source-Lizenzen', link: '/de/privacy/open-source-license' },
        { text: 'Softwarelizenz', link: '/de/privacy/license' },
        { text: 'Datenschutz & Datensicherheit', link: '/de/privacy/privacy-and-data-protection' },
        { text: 'Funktionsübersicht', link: '/de/privacy/functions' }
      ]
    }
  ],
  fr: [
    {
      text: 'Produits',
      items: productItems.fr
    },
    {
      text: 'Confidentialité',
      items: [
        { text: 'Licences open source', link: '/fr/privacy/open-source-license' },
        { text: 'Licence logicielle', link: '/fr/privacy/license' },
        { text: 'Confidentialité et protection des données', link: '/fr/privacy/privacy-and-data-protection' },
        { text: 'Présentation des fonctionnalités', link: '/fr/privacy/functions' }
      ]
    }
  ],
  es: [
    {
      text: 'Productos',
      items: productItems.es
    },
    {
      text: 'Privacidad',
      items: [
        { text: 'Licencias de código abierto', link: '/es/privacy/open-source-license' },
        { text: 'Licencia de software', link: '/es/privacy/license' },
        { text: 'Privacidad y protección de datos', link: '/es/privacy/privacy-and-data-protection' },
        { text: 'Descripción de funciones', link: '/es/privacy/functions' }
      ]
    }
  ],
  'pt-br': [
    {
      text: 'Produtos',
      items: productItems['pt-br']
    },
    {
      text: 'Privacidade',
      items: [
        { text: 'Licenças de código aberto', link: '/pt-br/privacy/open-source-license' },
        { text: 'Licença de software', link: '/pt-br/privacy/license' },
        { text: 'Privacidade e proteção de dados', link: '/pt-br/privacy/privacy-and-data-protection' },
        { text: 'Visão geral das funções', link: '/pt-br/privacy/functions' }
      ]
    }
  ],
  ru: [
    {
      text: 'Продукты',
      items: productItems.ru
    },
    {
      text: 'Конфиденциальность',
      items: [
        { text: 'Лицензии открытого ПО', link: '/ru/privacy/open-source-license' },
        { text: 'Лицензия на ПО', link: '/ru/privacy/license' },
        { text: 'Конфиденциальность и защита данных', link: '/ru/privacy/privacy-and-data-protection' },
        { text: 'Обзор функций', link: '/ru/privacy/functions' }
      ]
    }
  ],
  it: [
    {
      text: 'Prodotti',
      items: productItems.it
    },
    {
      text: 'Privacy',
      items: [
        { text: 'Licenze open source', link: '/it/privacy/open-source-license' },
        { text: 'Licenza software', link: '/it/privacy/license' },
        { text: 'Privacy e protezione dei dati', link: '/it/privacy/privacy-and-data-protection' },
        { text: 'Panoramica delle funzioni', link: '/it/privacy/functions' }
      ]
    }
  ],
  ar: [
    {
      text: 'المنتجات',
      items: productItems.ar
    },
    {
      text: 'الخصوصية',
      items: [
        { text: 'تراخيص المصادر المفتوحة', link: '/ar/privacy/open-source-license' },
        { text: 'ترخيص البرنامج', link: '/ar/privacy/license' },
        { text: 'الخصوصية وحماية البيانات', link: '/ar/privacy/privacy-and-data-protection' },
        { text: 'نظرة عامة على الوظائف', link: '/ar/privacy/functions' }
      ]
    }
  ]
}

export default defineConfig({
  title: 'Quick Utilities Suite',
  description: 'Windows Productivity Tools: Always-on-Top, Spy++, Color Picker, and More.',
  head: [
    // 现有 favicon
    ['link', { rel: 'icon', href: '/home_page/favicon.ico' }],

    // ➤ Umami 统计代码
    [
      'script',
      {
        defer: '',
        src: 'https://umami.xmuli.tech/script.js',
        'data-website-id': '718d56f4-8cca-4c8b-b4ee-45cb3e103d63'
      }
    ]
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Quick Utilities Suite',
      description: 'Windows Productivity Tools: Always-on-Top, Spy++, Color Picker, and More.',
      themeConfig: {
        nav: nav.root,
        sidebar: sidebar.root
      }
    },
    'zh-cn': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh-cn/',
      title: 'Quick Utilities Suite',
      description: 'Windows Productivity Tools: Always-on-Top, Spy++, Color Picker, and More.',
      themeConfig: {
        nav: nav['zh-cn'],
        sidebar: sidebar['zh-cn']
      }
    },
    'zh-tw': {
      label: '繁體中文',
      lang: 'zh-TW',
      link: '/zh-tw/',
      title: 'Quick Utilities Suite',
      description: 'Windows Productivity Tools: Always-on-Top, Spy++, Color Picker, and More.',
      themeConfig: {
        nav: nav['zh-tw'],
        sidebar: sidebar['zh-tw']
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja-JP',
      link: '/ja/',
      title: 'Quick Utilities Suite',
      description: 'Windows 生産性ツール：常に最前面、Spy++、カラーピッカーなど。',
      themeConfig: {
        nav: nav.ja,
        sidebar: sidebar.ja
      }
    },
    ko: {
      label: '한국어',
      lang: 'ko-KR',
      link: '/ko/',
      title: 'Quick Utilities Suite',
      description: 'Windows 생산성 도구: 항상 위에, Spy++, 색상 선택기 등.',
      themeConfig: {
        nav: nav.ko,
        sidebar: sidebar.ko
      }
    },
    de: {
      label: 'Deutsch',
      lang: 'de-DE',
      link: '/de/',
      title: 'Quick Utilities Suite',
      description: 'Windows-Produktivitätswerkzeuge: Immer im Vordergrund, Spy++, Farbwähler und mehr.',
      themeConfig: {
        nav: nav.de,
        sidebar: sidebar.de
      }
    },
    fr: {
      label: 'Français',
      lang: 'fr-FR',
      link: '/fr/',
      title: 'Quick Utilities Suite',
      description: 'Outils de productivité Windows : toujours au premier plan, Spy++, pipette de couleurs et plus.',
      themeConfig: {
        nav: nav.fr,
        sidebar: sidebar.fr
      }
    },
    es: {
      label: 'Español',
      lang: 'es-ES',
      link: '/es/',
      title: 'Quick Utilities Suite',
      description: 'Herramientas de productividad para Windows: siempre en primer plano, Spy++, selector de colores y más.',
      themeConfig: {
        nav: nav.es,
        sidebar: sidebar.es
      }
    },
    'pt-br': {
      label: 'Português (Brasil)',
      lang: 'pt-BR',
      link: '/pt-br/',
      title: 'Quick Utilities Suite',
      description: 'Ferramentas de produtividade para Windows: sempre no topo, Spy++, seletor de cores e mais.',
      themeConfig: {
        nav: nav['pt-br'],
        sidebar: sidebar['pt-br']
      }
    },
    ru: {
      label: 'Русский',
      lang: 'ru-RU',
      link: '/ru/',
      title: 'Quick Utilities Suite',
      description: 'Инструменты продуктивности для Windows: поверх всех окон, Spy++, пипетка цвета и другое.',
      themeConfig: {
        nav: nav.ru,
        sidebar: sidebar.ru
      }
    },
    it: {
      label: 'Italiano',
      lang: 'it-IT',
      link: '/it/',
      title: 'Quick Utilities Suite',
      description: 'Strumenti di produttività per Windows: sempre in primo piano, Spy++, selettore colori e altro.',
      themeConfig: {
        nav: nav.it,
        sidebar: sidebar.it
      }
    },
    ar: {
      label: 'العربية',
      lang: 'ar-SA',
      dir: 'rtl',
      link: '/ar/',
      title: 'Quick Utilities Suite',
      description: 'أدوات إنتاجية لنظام Windows: النافذة دائمًا في المقدمة، Spy++، منتقي الألوان والمزيد.',
      themeConfig: {
        nav: nav.ar,
        sidebar: sidebar.ar
      }
    }
  },
  themeConfig: {
    logo: '/home_page/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/XMuli/QuickUtilitiesSuite' },
    { icon: 'gmail', link: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=xmulitech@gmail.com&su=%5BQuick%20Utilities%20Suite%5D%20Suggestions%20and%20Feedback' }]
  }
})
