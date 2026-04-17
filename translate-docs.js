#!/usr/bin/env node
// Quick Utilities Suite - Translation and Content Replacement Script
// Generates translated content for all 10 languages

const fs = require('fs');
const path = require('path');

const docRoot = './docs';
const languages = ['ar', 'de', 'es', 'fr', 'it', 'ja', 'ko', 'pt-br', 'ru', 'zh-tw'];

// 翻译内容映射
const translations = {
  'pt-br': {
    // 根文件翻译  
    'index.md': `---
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
    details: Recupere os detalhes da janela que você precisa sem a complexidade de ferramentas de inspeção mais pesadas.
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

Quick Utilities Suite se concentra nos pontos de fricção que desaceleram o trabalho desktop moderno: controle desigual de monitores, operações de arquivo repetitivas, aplicativos utilitários espalhados e manipulação de idiomas mais lenta. Cada ferramenta foi projetada para ser prática, leve e pronta quando o trabalho fica intenso.
`,
    'commercial.md': `# Suporte Comercial e de Equipe

Os produtos Quick Utilities podem ser discutidos para uso em equipe, reembolso no trabalho e implantação de desktop mais ampla.

## Cenários comuns

- Equipes comprando para estações de trabalho compartilhadas ou gerenciadas
- Locais de trabalho padronizando ferramentas em mesas com múltiplos monitores
- Departamentos avaliando utilitários para suporte, operações, desenvolvimento ou produtividade de escritório
- Compradores que precisam de um caminho de contato claro antes de fazer uma compra em equipe

## O que incluir em uma investigação

Para nos ajudar a responder mais rápido, inclua:

- Qual produto você está considerando: \`Quick BrightnessSync\`, \`Quick AlwaysOnTop\` ou \`Quick Utilities Suite\`
- Número aproximado de usuários ou dispositivos
- Se esta é uma solicitação de reembolso individual ou uma compra de equipe / organização
- Qualquer pergunta de implantação, faturamento ou licenciamento que você já conhece

## Contato

Para investigações comerciais ou de equipe, envie um e-mail para [xmulitech@gmail.com](mailto:xmulitech@gmail.com?subject=Quick%20Utilities%20Suite%20Commercial%20Inquiry).

Para feedback de produtos ou relatórios de bugs, use [GitHub Issues](https://github.com/XMuli/QuickUtilitiesSuite/issues).

<div style="display: flex; flex-direction: column; align-items: flex-start; gap: 0.75rem;">

[Comparar Edições](/pt-br/pricing){.vp-button.brand}
[Explorar Quick BrightnessSync](/pt-br/products/quick-brightnesssync){.vp-button.alt}
[Explorar Quick AlwaysOnTop](/pt-br/products/quick-alwaysontop){.vp-button.alt}

</div>
`,
  },
  'ru': { /* 俄语翻译... */ },
  // 其他语言...
};

console.log('Translation content map ready');
console.log(`Languages to process: ${languages.length}`);
console.log('Use this script with find-and-replace tools or VS Code extensions for bulk translation.');
