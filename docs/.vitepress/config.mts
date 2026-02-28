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
  ]
}

const nav = {
  root: [
    { text: '首页', link: '/' },
    { text: '产品介绍', items: productItems.root },
    { text: '隐私协议', link: '/privacy/open-source-license' }
  ],
  en: [
    { text: 'Home', link: '/en/' },
    { text: 'Products', items: productItems.en },
    { text: 'Privacy', link: '/en/privacy/open-source-license' }
  ],
  'zh-tw': [
    { text: '首頁', link: '/zh-tw/' },
    { text: '產品介紹', items: productItems['zh-tw'] },
    { text: '隱私協議', link: '/zh-tw/privacy/open-source-license' }
  ]
}

const sidebar = {
  root: [
    {
      text: '产品介绍',
      items: productItems.root
    },
    {
      text: '隐私协议',
      items: [
        { text: '开源许可协议', link: '/privacy/open-source-license' },
        { text: '软件许可协议', link: '/privacy/license' },
        { text: '隐私安全协议', link: '/privacy/privacy-and-data-protection' },
        { text: '功能介绍', link: '/privacy/functions' }
      ]
    }
  ],
  en: [
    {
      text: 'Products',
      items: productItems.en
    },
    {
      text: 'Privacy',
      items: [
        { text: 'Open Source License', link: '/en/privacy/open-source-license' },
        { text: 'Software License', link: '/en/privacy/license' },
        { text: 'Privacy & Data Protection', link: '/en/privacy/privacy-and-data-protection' },
        { text: 'Feature Overview', link: '/en/privacy/functions' }
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
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Quick Utilities Suite',
      description: 'Windows Productivity Tools: Always-on-Top, Spy++, Color Picker, and More.',
      themeConfig: {
        nav: nav.root,
        sidebar: sidebar.root
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'Quick Utilities Suite',
      description: 'Windows Productivity Tools: Always-on-Top, Spy++, Color Picker, and More.',
      themeConfig: {
        nav: nav.en,
        sidebar: sidebar.en
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
    }
  },
  themeConfig: {
    logo: '/home_page/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/XMuli/QuickUtilitiesSuite' },
    { icon: 'gmail', link: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=xmulitech@gmail.com&su=%5BQuick%20Utilities%20Suite%5D%20Suggestions%20and%20Feedback' }]
  }
})
