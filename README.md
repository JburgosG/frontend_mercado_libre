## Test práctico Frontend - Mercado libre

En este proyecto se da solución al componente Frontend del test práctico para aspirantes al área de front-end de Mercado Libre.

## Tecnologías requeridas

    Frontend:
        * HTML
        * JS (Deseable utilizar React o Backbone)
        * CSS (Deseable utilizar Sass)

## Tecnologías implementadas

* React versión 17.0.2
* Bootstrap 5
* Styled components (Css)
* React Helmet (Optimización del SEO)
* Webpack (Despliegue modo Dev)
* Babel (Transformación del código a JS)
* Standard Lint (Buenas prácticas de desarrollo)

Adicionalmente pensando en la escalabilidad y performance del proyecto, este se estructuro de tal forma que pueda crecer sin perjudicar la complejidad del código y a su vez haciendo uso de React.Lazy damos prioridad a la carga de contenido bajo demanda por parte del usuario.

### Nota

Para el correcto funcionamiento del proyecto es necesario clonar y desplegar correctamente en nuestro equipo local la capa Backend https://github.com/JburgosG/app_mercado_libre.git

Ejecución:

```bash
# Instalamos las dependencias del proyecto
npm install

# Corremos el proyecto en modo desarrollo
npm run start
