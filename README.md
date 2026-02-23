# void software

## Ver cambios en vivo (desarrollo local con Cursor)

Sí, puedes ver en el navegador cada cambio que hagas, con recarga automática (hot reload).

1. **Instala dependencias** (solo la primera vez):
   ```bash
   npm i
   ```

2. **Arranca el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. Abre en el navegador: **http://localhost:8080**  
   Al guardar cambios en cualquier archivo, la página se actualiza sola.

Para dejar de ver en vivo, detén el servidor con `Ctrl+C` en la terminal.

---

## Publicar en GitHub Pages (sitio estático)

El proyecto está preparado para publicarse como **sitio estático** en GitHub Pages.

1. En el repo de GitHub: **Settings → Pages**.
2. En **Source** elige **GitHub Actions** (no "Deploy from a branch").
3. Cada vez que hagas **push a la rama `main`**, GitHub Actions construirá el sitio y lo publicará.

La URL quedará: `https://<tu-usuario>.github.io/void-automation-hub-15/`

Para probar el build estático en local antes de subir:
```bash
BASE_PATH=/void-automation-hub-15/ npm run build
npm run preview
```
Luego abre la URL que muestre `preview` (por ejemplo http://localhost:4173).

---

## Cómo editar el código

Puedes trabajar con tu IDE preferido (Cursor, VS Code, etc.):

1. Clona el repositorio y entra en la carpeta del proyecto.
2. Instala dependencias: `npm i`
3. Arranca el servidor de desarrollo: `npm run dev`

Requisitos: Node.js y npm ([instalar con nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

También puedes editar archivos directamente en GitHub (botón "Edit" en cada archivo) o usar GitHub Codespaces.

## Tecnologías del proyecto

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Despliegue

Para publicar en GitHub Pages, configura **Settings → Pages → Source: GitHub Actions** y haz push a `main`. El workflow publicará el sitio automáticamente.
