import { defineConfig } from 'vitepress'

const localeMeta = {
  root: { label: 'English', lang: 'en-US', description: 'Windows productivity tools for multi-monitor desks, focused multitasking, and professional desktop workflows.' },
  'zh-cn': { label: '简体中文', lang: 'zh-CN', description: '适用于多屏办公、专注多任务处理与专业桌面工作流的 Windows 效率工具。' },
  'zh-tw': { label: '繁體中文', lang: 'zh-TW', description: 'Windows productivity tools for multi-monitor desks, focused multitasking, and professional desktop workflows.' },
  ja: { label: '日本語', lang: 'ja-JP', description: 'Windows productivity tools for multi-monitor desks, focused multitasking, and professional desktop workflows.' },
  ko: { label: '한국어', lang: 'ko-KR', description: 'Windows productivity tools for multi-monitor desks, focused multitasking, and professional desktop workflows.' },
  de: { label: 'Deutsch', lang: 'de-DE', description: 'Windows productivity tools for multi-monitor desks, focused multitasking, and professional desktop workflows.' },
  fr: { label: 'Français', lang: 'fr-FR', description: 'Windows productivity tools for multi-monitor desks, focused multitasking, and professional desktop workflows.' },
  es: { label: 'Español', lang: 'es-ES', description: 'Windows productivity tools for multi-monitor desks, focused multitasking, and professional desktop workflows.' },
  'pt-br': { label: 'Português (Brasil)', lang: 'pt-BR', description: 'Windows productivity tools for multi-monitor desks, focused multitasking, and professional desktop workflows.' },
  ru: { label: 'Русский', lang: 'ru-RU', description: 'Windows productivity tools for multi-monitor desks, focused multitasking, and professional desktop workflows.' },
  it: { label: 'Italiano', lang: 'it-IT', description: 'Windows productivity tools for multi-monitor desks, focused multitasking, and professional desktop workflows.' },
  ar: { label: 'العربية', lang: 'ar-SA', dir: 'rtl', description: 'Windows productivity tools for multi-monitor desks, focused multitasking, and professional desktop workflows.' }
} as const

function base(locale: string) {
  return locale === 'root' ? '' : '/' + locale
}
function lnk(locale: string, p: string) {
  return base(locale) + p
}
function toolGroups(locale: string) {
  return [
    { text: '⭐ Core Products', items: [
      { text: 'Quick BrightnessSync', link: lnk(locale, '/products/quick-brightnesssync') },
      { text: 'Quick AlwaysOnTop', link: lnk(locale, '/products/quick-alwaysontop') },
      { text: 'Quick WindowInspector', link: lnk(locale, '/products/quick-windowinspector') }
    ]},
    { text: '📈 Workflow Tools', items: [
      { text: 'Quick BulkFileCopy', link: lnk(locale, '/products/quick-bulkfilecopy') },
      { text: 'Quick BulkFileDelete', link: lnk(locale, '/products/quick-bulkfiledelete') },
      { text: 'Quick SnapTranslate', link: lnk(locale, '/products/quick-snaptranslate') },
      { text: 'Quick ColorPicker', link: lnk(locale, '/products/quick-colorpicker') }
    ]},
    { text: '📦 Editions & Support', items: [
      { text: 'Quick Utilities Suite', link: lnk(locale, '/products/quick-utilities-suite') },
      { text: 'Compare Editions', link: lnk(locale, '/pricing') },
      { text: 'Team & Commercial Support', link: lnk(locale, '/commercial') }
    ]}
  ]
}
function nav(locale: string) {
  const items = [
    { text: 'Home', link: lnk(locale, '/') },
    { text: 'BrightnessSync', link: lnk(locale, '/products/quick-brightnesssync') },
    { text: 'AlwaysOnTop', link: lnk(locale, '/products/quick-alwaysontop') }
  ]

  items.push(
    { text: 'Pricing', link: lnk(locale, '/pricing') },
    { text: 'Use Cases', link: lnk(locale, '/use-cases') },
    { text: 'All Tools', items: toolGroups(locale) },
    { text: 'Commercial', link: lnk(locale, '/commercial') },
    { text: 'Privacy', link: lnk(locale, '/privacy/privacy-and-data-protection') }
  )

  return items
}
function sidebar(locale: string) {
  return [
    {
      text: 'Overview',
      items: [
        { text: 'Quick BrightnessSync', link: lnk(locale, '/products/quick-brightnesssync') },
        { text: 'Quick AlwaysOnTop', link: lnk(locale, '/products/quick-alwaysontop') },
        { text: 'Compare Editions', link: lnk(locale, '/pricing') },
        { text: 'Use Cases', link: lnk(locale, '/use-cases') },
        { text: 'Team Support', link: lnk(locale, '/commercial') },
        { text: 'Quick Utilities Suite', link: lnk(locale, '/products/quick-utilities-suite') }
      ]
    },
    {
      text: 'All Tools',
      items: toolGroups(locale)
    },
    {
      text: 'Privacy',
      items: [
        { text: 'Privacy & Data Protection', link: lnk(locale, '/privacy/privacy-and-data-protection') },
        { text: 'Software License', link: lnk(locale, '/privacy/license') },
        { text: 'Open Source License', link: lnk(locale, '/privacy/open-source-license') },
        { text: 'Feature Overview', link: lnk(locale, '/privacy/functions') }
      ]
    }
  ]
}

export default defineConfig({
  title: 'Quick Utilities Suite',
  description: 'Windows productivity tools for multi-monitor desks, focused multitasking, and professional desktop workflows.',
  head: [
    ['link', { rel: 'icon', href: '/home_page/favicon.ico' }],
    ['script', { defer: '', src: 'https://umami.xmuli.tech/script.js', 'data-website-id': '718d56f4-8cca-4c8b-b4ee-45cb3e103d63' }]
  ],
  locales: {
    root: { label: localeMeta.root.label, lang: localeMeta.root.lang, title: 'Quick Utilities Suite', description: localeMeta.root.description, themeConfig: { nav: nav('root'), sidebar: sidebar('root') } },
    'zh-cn': { label: localeMeta['zh-cn'].label, lang: localeMeta['zh-cn'].lang, link: '/zh-cn/', title: 'Quick Utilities Suite', description: localeMeta['zh-cn'].description, themeConfig: { nav: nav('zh-cn'), sidebar: sidebar('zh-cn') } },
    'zh-tw': { label: localeMeta['zh-tw'].label, lang: localeMeta['zh-tw'].lang, link: '/zh-tw/', title: 'Quick Utilities Suite', description: localeMeta['zh-tw'].description, themeConfig: { nav: nav('zh-tw'), sidebar: sidebar('zh-tw') } },
    ja: { label: localeMeta.ja.label, lang: localeMeta.ja.lang, link: '/ja/', title: 'Quick Utilities Suite', description: localeMeta.ja.description, themeConfig: { nav: nav('ja'), sidebar: sidebar('ja') } },
    ko: { label: localeMeta.ko.label, lang: localeMeta.ko.lang, link: '/ko/', title: 'Quick Utilities Suite', description: localeMeta.ko.description, themeConfig: { nav: nav('ko'), sidebar: sidebar('ko') } },
    de: { label: localeMeta.de.label, lang: localeMeta.de.lang, link: '/de/', title: 'Quick Utilities Suite', description: localeMeta.de.description, themeConfig: { nav: nav('de'), sidebar: sidebar('de') } },
    fr: { label: localeMeta.fr.label, lang: localeMeta.fr.lang, link: '/fr/', title: 'Quick Utilities Suite', description: localeMeta.fr.description, themeConfig: { nav: nav('fr'), sidebar: sidebar('fr') } },
    es: { label: localeMeta.es.label, lang: localeMeta.es.lang, link: '/es/', title: 'Quick Utilities Suite', description: localeMeta.es.description, themeConfig: { nav: nav('es'), sidebar: sidebar('es') } },
    'pt-br': { label: localeMeta['pt-br'].label, lang: localeMeta['pt-br'].lang, link: '/pt-br/', title: 'Quick Utilities Suite', description: localeMeta['pt-br'].description, themeConfig: { nav: nav('pt-br'), sidebar: sidebar('pt-br') } },
    ru: { label: localeMeta.ru.label, lang: localeMeta.ru.lang, link: '/ru/', title: 'Quick Utilities Suite', description: localeMeta.ru.description, themeConfig: { nav: nav('ru'), sidebar: sidebar('ru') } },
    it: { label: localeMeta.it.label, lang: localeMeta.it.lang, link: '/it/', title: 'Quick Utilities Suite', description: localeMeta.it.description, themeConfig: { nav: nav('it'), sidebar: sidebar('it') } },
    ar: { label: localeMeta.ar.label, lang: localeMeta.ar.lang, dir: 'rtl', link: '/ar/', title: 'Quick Utilities Suite', description: localeMeta.ar.description, themeConfig: { nav: nav('ar'), sidebar: sidebar('ar') } }
  },
  themeConfig: {
    logo: '/home_page/logo.svg',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/XMuli/QuickUtilitiesSuite' },
      { icon: 'gmail', link: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=xmulitech@gmail.com&su=%5BQuick%20Utilities%20Suite%5D%20Suggestions%20and%20Feedback' }
    ]
  }
})
