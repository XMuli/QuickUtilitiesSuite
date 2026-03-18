# Datenschutz & Datensicherheit

**Letzte Aktualisierung:** März 2026
**Entwickler:** Wengeng Zhang (xmulitech@gmail.com)

## Überblick

QuickUtilitiesSuite wurde mit Blick auf den Datenschutz entwickelt. Die meisten Funktionen arbeiten vollständig offline auf Ihrem lokalen Gerät. Diese Richtlinie erläutert, welche Daten bei der Nutzung der Anwendung möglicherweise erfasst oder übertragen werden.

## Datenerfassung

### Rein lokale Funktionen (keine Datenübertragung)

Die folgenden Funktionen verarbeiten alle Daten lokal und senden keine Informationen über das Netzwerk:

- **Color Picker (Farbwähler)** — erfasst Bildschirmpixel lokal
- **Window Inspector (Spy++) (Fensterinspektor)** — liest Fenstereigenschaften über lokale Windows-APIs aus
- **Always-on-Top (Immer im Vordergrund)** — ändert die Fensterebene lokal
- **Brightness Sync (Helligkeitssynchronisation)** — liest Hardwaresensordaten lokal aus
- **Bulk File Copy / Delete (Massenkopieren / -löschen von Dateien)** — arbeitet ausschließlich mit dem lokalen Dateisystem
- **Defender Toggle (Defender-Umschalter)** — ändert lokale Windows Defender-Einstellungen

### Funktionen mit Netzwerkzugriff

- **Snap Translate (Screenshot-Übersetzung, OCR & Bildübersetzung):** Bei Nutzung der Online-OCR oder Bildübersetzung wird Ihr Screenshot an einen Drittanbieter-API-Dienst (Baidu Cloud, Tencent Cloud oder Youdao) zur Verarbeitung gesendet. Die Bilddaten werden sicher über HTTPS übertragen. Wir speichern Ihre Screenshots nicht auf von uns kontrollierten Servern.
- **Offline-OCR:** Bei Verwendung des PaddleOCR-Offlinemodus erfolgt die gesamte Texterkennung lokal. Es werden keine Daten übertragen.
- **Update-Prüfung:** Die Anwendung prüft regelmäßig auf GitHub nach neuen Versionen. Es wird nur Ihre aktuelle App-Version gesendet; persönliche Daten sind nicht enthalten.
- **Lizenzverifizierung:** Die Lizenzaktivierung kontaktiert unseren Server zur Überprüfung Ihres Lizenzschlüssels. Übertragen werden nur der Lizenzschlüssel, die Gerätekennung und die App-Version.

## Drittanbieter-API-Dienste

Bei Nutzung der Online-OCR- oder Übersetzungsfunktionen werden Ihre Daten gemäß den Datenschutzrichtlinien des jeweiligen Anbieters verarbeitet:

- **Baidu Cloud API:** https://ai.baidu.com/ai-doc/REFERENCE/kk3dwjg7d
- **Tencent Cloud API:** https://cloud.tencent.com/document/product/301/11470
- **Youdao API:** https://fanyi.youdao.com/openapi

Sie sind für die Konfiguration Ihrer eigenen API-Schlüssel für diese Dienste verantwortlich.

## Datenspeicherung

- **Konfiguration:** App-Einstellungen werden lokal in einer JSON-Datei im Anwendungsverzeichnis gespeichert (bei Store-Editionen im Benutzerprofil).
- **Lizenzinformationen:** Der Lizenzstatus wird in der Windows-Registrierung unter Ihrem Benutzerprofil gespeichert.
- **Absturzprotokolle:** Bei einem Absturz der Anwendung wird eine Protokolldatei lokal gespeichert. Absturzprotokolle werden niemals automatisch hochgeladen.

## Daten, die wir NICHT erfassen

- Wir erfassen keine persönlichen Informationen (Name, E-Mail, Adresse) über die Anwendung
- Wir verwenden keine Analysewerkzeuge, Telemetrie oder Tracking
- Wir verwenden keine Cookies
- Wir geben keine Benutzerdaten weiter und verkaufen sie nicht

## Ihre Rechte

Sie haben das Recht:
- Die Anwendung ohne Angabe persönlicher Daten zu nutzen (Offline-Funktionen)
- Alle lokalen Konfigurations- und Protokolldateien jederzeit zu löschen
- Netzwerkabhängige Funktionen nicht zu nutzen

## Datenschutz für Kinder

Diese Anwendung erfasst wissentlich keine Daten von Kindern unter 13 Jahren.

## Änderungen dieser Richtlinie

Wir können diese Richtlinie von Zeit zu Zeit aktualisieren. Änderungen werden in den Versionshinweisen der Anwendung vermerkt.

## Kontakt

Bei Fragen oder Bedenken zum Datenschutz:
**E-Mail:** xmulitech@gmail.com
**GitHub:** https://github.com/XMuli/QuickUtilitiesSuite
