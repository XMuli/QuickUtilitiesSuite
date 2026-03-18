# Confidentialité et protection des données

**Dernière mise à jour :** mars 2026
**Développeur :** Wengeng Zhang (xmulitech@gmail.com)

## Présentation

QuickUtilitiesSuite a été conçu dans le respect de la vie privée. La plupart des fonctionnalités fonctionnent entièrement hors ligne sur votre appareil local. Cette politique explique quelles données peuvent être collectées ou transmises lors de l'utilisation de l'application.

## Collecte de données

### Fonctionnalités locales uniquement (aucune donnée transmise)

Les fonctionnalités suivantes traitent toutes les données localement et n'envoient aucune information via le réseau :

- **Color Picker (Pipette de couleur)** — capture les pixels de l'écran localement
- **Window Inspector (Spy++) (Inspecteur de fenêtre)** — lit les propriétés des fenêtres via les API Windows locales
- **Always-on-Top (Toujours au premier plan)** — modifie l'ordre des couches de fenêtres localement
- **Brightness Sync (Synchronisation de la luminosité)** — lit les données des capteurs matériels localement
- **Bulk File Copy / Delete (Copie / Suppression de fichiers en masse)** — opère uniquement sur le système de fichiers local
- **Defender Toggle (Basculement de Defender)** — modifie les paramètres locaux de Windows Defender

### Fonctionnalités utilisant l'accès réseau

- **Snap Translate (Traduction de capture d'écran, OCR et traduction d'images) :** Lorsque vous utilisez l'OCR en ligne ou la traduction d'images, votre capture d'écran est envoyée à un fournisseur d'API tiers (Baidu Cloud, Tencent Cloud ou Youdao) pour traitement. Les données d'image sont transmises de manière sécurisée via HTTPS. Nous ne stockons ni ne conservons vos captures d'écran sur aucun serveur que nous contrôlons.
- **OCR hors ligne :** Lors de l'utilisation du mode hors ligne PaddleOCR, toute la reconnaissance de texte est effectuée localement. Aucune donnée n'est transmise.
- **Vérification des mises à jour :** L'application vérifie périodiquement les nouvelles versions sur GitHub. Seule votre version actuelle de l'application est envoyée ; aucune donnée personnelle n'est incluse.
- **Vérification de licence :** L'activation de la licence contacte notre serveur pour valider votre clé de licence. Seuls la clé de licence, l'identifiant de l'appareil et la version de l'application sont transmis.

## Fournisseurs d'API tiers

Lors de l'utilisation des fonctionnalités d'OCR ou de traduction en ligne, vos données sont traitées conformément à la politique de confidentialité du fournisseur concerné :

- **Baidu Cloud API :** https://ai.baidu.com/ai-doc/REFERENCE/kk3dwjg7d
- **Tencent Cloud API :** https://cloud.tencent.com/document/product/301/11470
- **Youdao API :** https://fanyi.youdao.com/openapi

Vous êtes responsable de la configuration de vos propres clés API pour ces services.

## Stockage des données

- **Configuration :** Les paramètres de l'application sont stockés localement dans un fichier JSON dans le répertoire de l'application (ou dans le profil utilisateur pour les éditions Store).
- **Informations de licence :** L'état de la licence est stocké dans le registre Windows sous votre profil utilisateur.
- **Journaux de plantage :** En cas de plantage de l'application, un fichier journal est enregistré localement. Les journaux de plantage ne sont jamais téléchargés automatiquement.

## Données que nous ne collectons PAS

- Nous ne collectons pas d'informations personnelles (nom, e-mail, adresse) via l'application
- Nous n'utilisons pas d'outils d'analyse, de télémétrie ou de suivi
- Nous n'utilisons pas de cookies
- Nous ne partageons ni ne vendons aucune donnée utilisateur

## Vos droits

Vous avez le droit de :
- Utiliser l'application sans fournir de données personnelles (fonctionnalités hors ligne)
- Supprimer tous les fichiers de configuration et journaux locaux à tout moment
- Choisir de ne pas utiliser les fonctionnalités dépendantes du réseau

## Protection de la vie privée des enfants

Cette application ne collecte pas sciemment de données auprès d'enfants de moins de 13 ans.

## Modifications de cette politique

Nous pouvons mettre à jour cette politique de temps en temps. Les modifications seront mentionnées dans les notes de version de l'application.

## Contact

Pour toute question ou préoccupation relative à la confidentialité :
**E-mail :** xmulitech@gmail.com
**GitHub :** https://github.com/XMuli/QuickUtilitiesSuite
