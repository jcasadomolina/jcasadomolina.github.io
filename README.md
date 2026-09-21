# jcasadomolina.github.io

Portafolio personal construido con Vue 3 y Vite, usando [`data.json`](data.json) como fuente de contenido.

## Dónde editar el contenido

Todos los textos visibles y enlaces principales se editan en [`data.json`](data.json):

- `name`, `skill`, `location` y `about`: identidad, rol, ubicación y presentación.
- `media.email`, `media.github`, `media.likedin` y `media.cv`: contacto y redes.
- `technologies`: lenguajes, frameworks y herramientas mostrados con sus iconos.
- `projects`: títulos, descripciones, tecnologías y enlaces de cada proyecto.
- `experience`, `training` y `extras`: trayectoria y contenido adicional disponible para futuras secciones.

La estructura visual y los textos fijos de la página están en [`src/App.vue`](src/App.vue); los colores, espacios, tipografías y animaciones están en [`src/style.css`](src/style.css).

Los logos de tecnologías se cargan desde Devicon y los iconos de GitHub, LinkedIn y PDF desde Font Awesome mediante CDN en [`index.html`](index.html).

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm run preview
```