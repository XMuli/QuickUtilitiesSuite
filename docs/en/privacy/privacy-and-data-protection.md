# Privacy & Data Protection

**Last updated:** March 2026
**Developer:** Wengeng Zhang (xmulitech@gmail.com)

## Overview

QuickUtilitiesSuite is designed with privacy in mind. Most features operate entirely offline on your local device. This policy explains what data may be collected or transmitted when you use the application.

## Data Collection

### Local-Only Features (No Data Transmitted)

The following features process all data locally and do not send any information over the network:

- **Color Picker** — captures screen pixels locally
- **Window Inspector (Spy++)** — reads window properties via local Windows APIs
- **Always-on-Top** — modifies window layering locally
- **Brightness Sync** — reads hardware sensor data locally
- **Bulk File Copy / Delete** — operates on local filesystem only
- **Defender Toggle** — modifies local Windows Defender settings

### Features That Use Network Access

- **Snap Translate (OCR & Image Translation):** When you use online OCR or image translation, your screenshot is sent to a third-party API provider (Baidu Cloud, Tencent Cloud, or Youdao) for processing. The image data is transmitted securely over HTTPS. We do not store or retain your screenshots on any server we control.
- **Offline OCR:** When using PaddleOCR offline mode, all text recognition is performed locally. No data is transmitted.
- **Update Checker:** The application periodically checks GitHub for new versions. Only your current app version is sent; no personal data is included.
- **License Verification:** License activation contacts our server to validate your license key. Only the license key, device identifier, and app version are transmitted.

## Third-Party API Providers

When using online OCR or translation features, your data is processed according to the respective provider's privacy policy:

- **Baidu Cloud API:** https://ai.baidu.com/ai-doc/REFERENCE/kk3dwjg7d
- **Tencent Cloud API:** https://cloud.tencent.com/document/product/301/11470
- **Youdao API:** https://fanyi.youdao.com/openapi

You are responsible for configuring your own API keys for these services.

## Data Storage

- **Configuration:** App settings are stored locally in a JSON file within the application directory (or user profile for Store editions).
- **License Information:** License status is stored in the Windows Registry under your user profile.
- **Crash Logs:** If the application crashes, a log file is saved locally. Crash logs are never automatically uploaded.

## Data We Do NOT Collect

- We do not collect personal information (name, email, address) through the application
- We do not use analytics, telemetry, or tracking
- We do not use cookies
- We do not share or sell any user data

## Your Rights

You have the right to:
- Use the application without providing any personal data (offline features)
- Delete all local configuration and log files at any time
- Choose not to use network-dependent features

## Children's Privacy

This application does not knowingly collect data from children under 13.

## Changes to This Policy

We may update this policy from time to time. Changes will be noted in the application's release notes.

## Contact

For privacy questions or concerns:
**Email:** xmulitech@gmail.com
**GitHub:** https://github.com/XMuli/QuickUtilitiesSuite
