---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "快速·实用工具箱"
  text: "Quick Utilities Suite"
  tagline: 专注于多屏协同与高并发处理的专业系统级增强套装
  image:
    src: /home_page/home_page.png
    alt: Quick Utilities Suite logo
  actions:
    - theme: brand
      text: 微软商店下载 ↓
      link: https://apps.microsoft.com/detail/9PGNXC5HJMCV
    - theme: alt
      text: 商业合作与反馈
      link: https://github.com/XMuli/QuickUtilitiesSuite/issues
    - theme: alt
      text: GitHub 下载
      link: https://github.com/XMuli/QuickUtilitiesSuite/releases

features:
  - title: 快速·多屏亮度同步 🔥
    details: 基于硬件 DDC/CI 协议，一键完美同步所有外接显示器的真实亮度，彻底告别逐一按键调光的繁琐。
    icon: 
      light: /images/home_features/QuickBrightnessSync.svg
      dark:  /images/home_features/QuickBrightnessSync.svg
  - title: 快速·窗口置顶
    details: 一键锁定置顶常用参考窗口，释放多任务处理潜力。
    icon: 
      light: /images/home_features/QuickAlwaysOnTop.svg
      dark:  /images/home_features/QuickAlwaysOnTop.svg
  - title: 快速·窗口名侦探
    details: 深度探测任意窗口的 UI 句柄及内部信息，助力开发者极速调试。
    icon: 
      light: /images/home_features/QuickWindowInspector.svg
      dark:  /images/home_features/QuickWindowInspector.svg
  - title: 快速·批量文件复制
    details: 高速复制海量零碎小文件，深度榨干 I/O 性能，远超原生 Windows 资源管理器。
    icon: 
      light: /images/home_features/QuickBulkFileCopy.svg
      dark:  /images/home_features/QuickBulkFileCopy.svg
  - title: 快速·批量文件删除
    details: 无需等待计算与检索，瞬间销毁包含巨量文件的庞大工程目录。
    icon: 
      light: /images/home_features/QuickBulkFileDelete.svg
      dark:  /images/home_features/QuickBulkFileDelete.svg
  - title: 快速·Defender 开关
    details: 绕过层层设置，一键掌握系统深层安全服务开关。
    icon: 
      light: /images/home_features/QuickDefenderToggle.svg
      dark:  /images/home_features/QuickDefenderToggle.svg
  - title: 快速·截图翻译
    details: 无缝衔接截图、识别与翻译流程，打破外文文档壁垒。
    icon: 
      light: /images/home_features/QuickSnapTranslate.svg
      dark:  /images/home_features/QuickSnapTranslate.svg
  - title: 快速·提取图片文本 (OCR)
    details: 一键精准识别并离线提取任意图片、受保护网页的内容。
    icon: 
      light: /images/home_features/QuickSnapOCR.svg
      dark:  /images/home_features/QuickSnapOCR.svg
  - title: 快速·屏幕取色器
    details: 像素级捕捉屏幕色彩，开发与设计的可靠辅助。
    icon: 
      light: /images/home_features/QuickColorPicker.svg
      dark:  /images/home_features/QuickColorPicker.svg
---

## 直击痛点，重构你的工作流

<div class="comparison-section">
  <div class="comparison-card">
    <h3>旧的方式 ❌</h3>
    <p>每天早晚，需要在此起彼伏地伸手，挨个去按 3 台独立显示器的实体按键调节亮度。</p>
    <p>复制一个包含数十万小碎文件的 Node_modules 或源码包，系统进度条卡死不动。</p>
  </div>
  <div class="comparison-card success">
    <h3>Quick Utilities 解决方案 ✅</h3>
    <p><strong>一键全局硬件亮度同步！</strong> 像控制笔记本一样，完美统一所有外接显示器的屏幕亮度。</p>
    <p><strong>极速文件读写引擎！</strong> 无视系统索引拖累，按最大 I/O 速率在后台闪电完成复制。</p>
  </div>
</div>

> **🔔 关于“多屏亮度同步”的兼容性声明：**<br> 本项核心功能重度依赖直接与硬件通讯的 DDC/CI 协议。对于使用极个别阉割协议的低端显示器，或部分阻断 DDC 通讯的劣质 USB-C 拓展坞，可能会出现调节失败的情况，敬请知悉并在可用机型上体验。如有需要请发邮件协助排查。

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
