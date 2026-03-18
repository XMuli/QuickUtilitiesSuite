# Privacidade e Proteção de Dados

**Última atualização:** março de 2026
**Desenvolvedor:** Wengeng Zhang (xmulitech@gmail.com)

## Visão geral

O QuickUtilitiesSuite foi projetado com a privacidade em mente. A maioria das funcionalidades opera totalmente offline no seu dispositivo local. Esta política explica quais dados podem ser coletados ou transmitidos quando você usa o aplicativo.

## Coleta de dados

### Funcionalidades apenas locais (sem transmissão de dados)

As seguintes funcionalidades processam todos os dados localmente e não enviam nenhuma informação pela rede:

- **Color Picker (Seletor de cores)** — captura pixels da tela localmente
- **Window Inspector (Spy++) (Inspetor de janelas)** — lê propriedades de janelas por meio das APIs locais do Windows
- **Always-on-Top (Sempre no topo)** — modifica a camada de janelas localmente
- **Brightness Sync (Sincronização de brilho)** — lê dados de sensores de hardware localmente
- **Bulk File Copy / Delete (Cópia / Exclusão de arquivos em massa)** — opera apenas no sistema de arquivos local
- **Defender Toggle (Alternador do Defender)** — modifica as configurações locais do Windows Defender

### Funcionalidades que usam acesso à rede

- **Snap Translate (Tradução de captura de tela, OCR e tradução de imagens):** Ao usar OCR online ou tradução de imagens, sua captura de tela é enviada a um provedor de API de terceiros (Baidu Cloud, Tencent Cloud ou Youdao) para processamento. Os dados de imagem são transmitidos com segurança via HTTPS. Não armazenamos nem retemos suas capturas de tela em nenhum servidor sob nosso controle.
- **OCR offline:** Ao usar o modo offline do PaddleOCR, todo o reconhecimento de texto é realizado localmente. Nenhum dado é transmitido.
- **Verificação de atualizações:** O aplicativo verifica periodicamente novas versões no GitHub. Apenas a versão atual do aplicativo é enviada; nenhum dado pessoal é incluído.
- **Verificação de licença:** A ativação da licença entra em contato com nosso servidor para validar sua chave de licença. Apenas a chave de licença, o identificador do dispositivo e a versão do aplicativo são transmitidos.

## Provedores de API de terceiros

Ao usar as funcionalidades de OCR ou tradução online, seus dados são processados de acordo com a política de privacidade do respectivo provedor:

- **Baidu Cloud API:** https://ai.baidu.com/ai-doc/REFERENCE/kk3dwjg7d
- **Tencent Cloud API:** https://cloud.tencent.com/document/product/301/11470
- **Youdao API:** https://fanyi.youdao.com/openapi

Você é responsável por configurar suas próprias chaves de API para esses serviços.

## Armazenamento de dados

- **Configuração:** As configurações do aplicativo são armazenadas localmente em um arquivo JSON no diretório do aplicativo (ou no perfil do usuário para edições da Store).
- **Informações de licença:** O status da licença é armazenado no Registro do Windows sob seu perfil de usuário.
- **Logs de falhas:** Se o aplicativo falhar, um arquivo de log é salvo localmente. Os logs de falhas nunca são enviados automaticamente.

## Dados que NÃO coletamos

- Não coletamos informações pessoais (nome, e-mail, endereço) por meio do aplicativo
- Não usamos ferramentas de análise, telemetria ou rastreamento
- Não usamos cookies
- Não compartilhamos nem vendemos dados de usuários

## Seus direitos

Você tem o direito de:
- Usar o aplicativo sem fornecer dados pessoais (funcionalidades offline)
- Excluir todos os arquivos de configuração e logs locais a qualquer momento
- Optar por não usar funcionalidades que dependem da rede

## Privacidade infantil

Este aplicativo não coleta intencionalmente dados de crianças menores de 13 anos.

## Alterações nesta política

Podemos atualizar esta política periodicamente. As alterações serão registradas nas notas de versão do aplicativo.

## Contato

Para dúvidas ou preocupações sobre privacidade:
**E-mail:** xmulitech@gmail.com
**GitHub:** https://github.com/XMuli/QuickUtilitiesSuite
