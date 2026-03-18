# Privacy e protezione dei dati

**Ultimo aggiornamento:** marzo 2026
**Sviluppatore:** Wengeng Zhang (xmulitech@gmail.com)

## Panoramica

QuickUtilitiesSuite è stato progettato con attenzione alla privacy. La maggior parte delle funzionalità opera interamente offline sul dispositivo locale. Questa informativa spiega quali dati possono essere raccolti o trasmessi durante l'utilizzo dell'applicazione.

## Raccolta dei dati

### Funzionalità solo locali (nessun dato trasmesso)

Le seguenti funzionalità elaborano tutti i dati localmente e non inviano alcuna informazione tramite la rete:

- **Color Picker (Selettore colore)** — acquisisce i pixel dello schermo localmente
- **Window Inspector (Spy++) (Ispettore finestre)** — legge le proprietà delle finestre tramite le API Windows locali
- **Always-on-Top (Sempre in primo piano)** — modifica la stratificazione delle finestre localmente
- **Brightness Sync (Sincronizzazione luminosità)** — legge i dati dei sensori hardware localmente
- **Bulk File Copy / Delete (Copia / Eliminazione file in blocco)** — opera esclusivamente sul file system locale
- **Defender Toggle (Interruttore Defender)** — modifica le impostazioni locali di Windows Defender

### Funzionalità che utilizzano l'accesso alla rete

- **Snap Translate (Traduzione screenshot, OCR e traduzione immagini):** Quando si utilizza l'OCR online o la traduzione di immagini, lo screenshot viene inviato a un fornitore di API di terze parti (Baidu Cloud, Tencent Cloud o Youdao) per l'elaborazione. I dati dell'immagine vengono trasmessi in modo sicuro tramite HTTPS. Non archiviamo né conserviamo i vostri screenshot su alcun server da noi controllato.
- **OCR offline:** Quando si utilizza la modalità offline di PaddleOCR, tutto il riconoscimento del testo viene eseguito localmente. Nessun dato viene trasmesso.
- **Controllo aggiornamenti:** L'applicazione verifica periodicamente la disponibilità di nuove versioni su GitHub. Viene inviata solo la versione corrente dell'app; nessun dato personale è incluso.
- **Verifica della licenza:** L'attivazione della licenza contatta il nostro server per convalidare la chiave di licenza. Vengono trasmessi solo la chiave di licenza, l'identificativo del dispositivo e la versione dell'app.

## Fornitori di API di terze parti

Quando si utilizzano le funzionalità OCR o di traduzione online, i dati vengono elaborati secondo l'informativa sulla privacy del rispettivo fornitore:

- **Baidu Cloud API:** https://ai.baidu.com/ai-doc/REFERENCE/kk3dwjg7d
- **Tencent Cloud API:** https://cloud.tencent.com/document/product/301/11470
- **Youdao API:** https://fanyi.youdao.com/openapi

L'utente è responsabile della configurazione delle proprie chiavi API per questi servizi.

## Archiviazione dei dati

- **Configurazione:** Le impostazioni dell'app sono archiviate localmente in un file JSON nella directory dell'applicazione (o nel profilo utente per le edizioni Store).
- **Informazioni sulla licenza:** Lo stato della licenza è archiviato nel Registro di Windows nel profilo utente.
- **Log degli arresti anomali:** In caso di arresto anomalo dell'applicazione, un file di log viene salvato localmente. I log degli arresti anomali non vengono mai caricati automaticamente.

## Dati che NON raccogliamo

- Non raccogliamo informazioni personali (nome, e-mail, indirizzo) tramite l'applicazione
- Non utilizziamo strumenti di analisi, telemetria o tracciamento
- Non utilizziamo cookie
- Non condividiamo né vendiamo dati degli utenti

## I vostri diritti

Avete il diritto di:
- Utilizzare l'applicazione senza fornire dati personali (funzionalità offline)
- Eliminare tutti i file di configurazione e log locali in qualsiasi momento
- Scegliere di non utilizzare le funzionalità che richiedono la rete

## Privacy dei minori

Questa applicazione non raccoglie consapevolmente dati da minori di 13 anni.

## Modifiche a questa informativa

Potremmo aggiornare questa informativa di tanto in tanto. Le modifiche saranno indicate nelle note di rilascio dell'applicazione.

## Contatti

Per domande o dubbi sulla privacy:
**E-mail:** xmulitech@gmail.com
**GitHub:** https://github.com/XMuli/QuickUtilitiesSuite
