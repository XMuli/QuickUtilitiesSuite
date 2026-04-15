---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Quick Utilities Suite"
  text: "Quick Utilities Suite"
  tagline: Professional system enhancement suite for multi-display and bulk-processing
  image:
    src: /home_page/home_page.png
    alt: Quick Utilities Suite logo
  actions:
    - theme: brand
      text: Microsoft Store ↓
      link: https://apps.microsoft.com/detail/9PGNXC5HJMCV
    - theme: alt
      text: Contact & Feedback
      link: https://github.com/XMuli/QuickUtilitiesSuite/issues
    - theme: alt
      text: GitHub Releases
      link: https://github.com/XMuli/QuickUtilitiesSuite/releases

features:
  - title: Quick BrightnessSync 🔥
    details: One-click true hardware brightness sync for multiple monitors (DDC/CI). Say goodbye to adjusting displays one by one.
    icon:
      light: /images/home_features/QuickBrightnessSync.svg
      dark: /images/home_features/QuickBrightnessSync.svg
  - title: Quick AlwaysOnTop
    details: Pin any important window to the front with one click—multitask with ease.
    icon:
      light: /images/home_features/QuickAlwaysOnTop.svg
      dark: /images/home_features/QuickAlwaysOnTop.svg
  - title: Quick WindowInspector
    details: Inspect any window's details instantly—debug and develop more efficiently.
    icon: 
      light: /images/home_features/QuickWindowInspector.svg
      dark:  /images/home_features/QuickWindowInspector.svg
  - title: Quick BulkFileCopy
    details: High-speed copy of large numbers of small files—several times faster than the OS. Perfect for massive projects.
    icon:
      light: /images/home_features/QuickBulkFileCopy.svg
      dark: /images/home_features/QuickBulkFileCopy.svg
  - title: Quick BulkFileDelete
    details: Blazing-fast deletion of huge folders—save precious time and eliminate system freezes.
    icon:
      light: /images/home_features/QuickBulkFileDelete.svg
      dark: /images/home_features/QuickBulkFileDelete.svg
  - title: Quick DefenderToggle
    details: Quickly toggle system protection on or off—advanced operations made simple.
    icon:
      light: /images/home_features/QuickDefenderToggle.svg
      dark: /images/home_features/QuickDefenderToggle.svg
  - title: Quick SnapTranslate
    details: One-click screenshot, OCR, and translation—work across languages effortlessly.
    icon: 
      light: /images/home_features/QuickSnapTranslate.svg
      dark:  /images/home_features/QuickSnapTranslate.svg
  - title: Quick SnapOCR
    details: One-click screenshot OCR—instantly extract and copy text from images, webpages, or documents.
    icon: 
      light: /images/home_features/QuickSnapOCR.svg
      dark:  /images/home_features/QuickSnapOCR.svg
  - title: Quick ColorPicker
    details: Precisely pick any on-screen color with multiple format output.
    icon: 
      light: /images/home_features/QuickColorPicker.svg
      dark:  /images/home_features/QuickColorPicker.svg
---

## Why Choose Quick Utilities Suite?

<div class="comparison-section">
  <div class="comparison-card">
    <h3>The Old Way ❌</h3>
    <p>Manually pressing physical buttons to adjust the brightness on 3 different monitors.</p>
    <p>Waiting forever for Windows to copy 100,000 small project files.</p>
  </div>
  <div class="comparison-card success">
    <h3>The Quick Utilities Way ✅</h3>
    <p><strong>One-click perfectly synced hardware brightness</strong> across all your screens.</p>
    <p><strong>Blazing-fast bulk copying</strong> utilizing maximum I/O bandwidth.</p>
  </div>
</div>

> **Note on BrightnessSync:** This feature relies on the DDC/CI protocol to directly control monitor hardware. Compatibility may vary depending on your specific monitors and certain budget USB-C hubs/docks. 

<style>
.comparison-section {
  display: flex;
  gap: 20px;
  margin: 40px 0;
  flex-wrap: wrap;
}
.comparison-card {
  flex: 1;
  min-width: 300px;
  padding: 24px;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
}
.comparison-card.success {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-brand-dimm);
}
.comparison-card h3 {
  margin-top: 0;
  font-weight: bold;
}
</style> 
