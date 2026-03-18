# Privacidad y protección de datos

**Última actualización:** marzo de 2026
**Desarrollador:** Wengeng Zhang (xmulitech@gmail.com)

## Descripción general

QuickUtilitiesSuite ha sido diseñado teniendo en cuenta la privacidad. La mayoría de las funciones operan completamente sin conexión en su dispositivo local. Esta política explica qué datos pueden recopilarse o transmitirse cuando utiliza la aplicación.

## Recopilación de datos

### Funciones solo locales (sin transmisión de datos)

Las siguientes funciones procesan todos los datos localmente y no envían ninguna información a través de la red:

- **Color Picker (Selector de color)** — captura píxeles de pantalla localmente
- **Window Inspector (Spy++) (Inspector de ventanas)** — lee las propiedades de las ventanas mediante las API locales de Windows
- **Always-on-Top (Siempre visible)** — modifica la capa de ventanas localmente
- **Brightness Sync (Sincronización de brillo)** — lee datos de sensores de hardware localmente
- **Bulk File Copy / Delete (Copia / Eliminación masiva de archivos)** — opera únicamente en el sistema de archivos local
- **Defender Toggle (Interruptor de Defender)** — modifica la configuración local de Windows Defender

### Funciones que utilizan acceso a la red

- **Snap Translate (Traducción de capturas de pantalla, OCR y traducción de imágenes):** Al utilizar OCR en línea o traducción de imágenes, su captura de pantalla se envía a un proveedor de API de terceros (Baidu Cloud, Tencent Cloud o Youdao) para su procesamiento. Los datos de imagen se transmiten de forma segura a través de HTTPS. No almacenamos ni conservamos sus capturas de pantalla en ningún servidor bajo nuestro control.
- **OCR sin conexión:** Al usar el modo sin conexión de PaddleOCR, todo el reconocimiento de texto se realiza localmente. No se transmite ningún dato.
- **Verificación de actualizaciones:** La aplicación comprueba periódicamente en GitHub si hay nuevas versiones. Solo se envía la versión actual de su aplicación; no se incluyen datos personales.
- **Verificación de licencia:** La activación de la licencia contacta con nuestro servidor para validar su clave de licencia. Solo se transmiten la clave de licencia, el identificador del dispositivo y la versión de la aplicación.

## Proveedores de API de terceros

Al utilizar las funciones de OCR o traducción en línea, sus datos se procesan de acuerdo con la política de privacidad del proveedor correspondiente:

- **Baidu Cloud API:** https://ai.baidu.com/ai-doc/REFERENCE/kk3dwjg7d
- **Tencent Cloud API:** https://cloud.tencent.com/document/product/301/11470
- **Youdao API:** https://fanyi.youdao.com/openapi

Usted es responsable de configurar sus propias claves de API para estos servicios.

## Almacenamiento de datos

- **Configuración:** Los ajustes de la aplicación se almacenan localmente en un archivo JSON dentro del directorio de la aplicación (o en el perfil de usuario para las ediciones de la Store).
- **Información de licencia:** El estado de la licencia se almacena en el Registro de Windows bajo su perfil de usuario.
- **Registros de fallos:** Si la aplicación se bloquea, se guarda un archivo de registro localmente. Los registros de fallos nunca se cargan automáticamente.

## Datos que NO recopilamos

- No recopilamos información personal (nombre, correo electrónico, dirección) a través de la aplicación
- No utilizamos herramientas de análisis, telemetría ni seguimiento
- No utilizamos cookies
- No compartimos ni vendemos datos de los usuarios

## Sus derechos

Usted tiene derecho a:
- Utilizar la aplicación sin proporcionar datos personales (funciones sin conexión)
- Eliminar todos los archivos de configuración y registros locales en cualquier momento
- Optar por no utilizar las funciones que dependen de la red

## Privacidad de los menores

Esta aplicación no recopila intencionadamente datos de menores de 13 años.

## Cambios en esta política

Podemos actualizar esta política periódicamente. Los cambios se indicarán en las notas de la versión de la aplicación.

## Contacto

Para preguntas o inquietudes sobre privacidad:
**Correo electrónico:** xmulitech@gmail.com
**GitHub:** https://github.com/XMuli/QuickUtilitiesSuite
