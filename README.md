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

---

## Dominio personalizado (URL más corta y bonita)

La URL por defecto de GitHub Pages es larga: `https://<usuario>.github.io/void-automation-hub-15/`. Puedes usar un **dominio propio** (ej. `voidsoftware.com` o `void.so`) de forma gratuita:

1. **Compra el dominio** en un registrador (Namecheap, Google Domains, Cloudflare, etc.).
2. **En el repo**: crea el archivo `public/CNAME` (o `CNAME` en la raíz del repo, según la doc de GitHub) con una sola línea: tu dominio, ej. `www.voidsoftware.com`.
3. **En GitHub**: **Settings → Pages → Custom domain** → escribe tu dominio y guarda. GitHub te mostrará los registros DNS que debes configurar.
4. **En el registrador del dominio**: añade los registros que indica GitHub (normalmente un registro **A** apuntando a las IPs de GitHub Pages, o un **CNAME** de `www` a `tu-usuario.github.io`).
5. **Cuando tengas el dominio**: en `index.html` sustituye `https://TU-URL-BASE/` por tu URL real (ej. `https://www.voidsoftware.com/`) en las meta `og:url` y `og:image`, y añade una imagen `public/og-image.png` (recomendado 1200×630 px) para las vistas previas en redes.

Si usas el sitio **solo en la raíz** de tu usuario (`username.github.io`), el `BASE_PATH` puede ser `"/"` y no necesitas carpeta en la URL.

---

## Validación con Meta (Facebook / Business)

Para que Meta reconozca bien tu sitio y puedas usar dominios en el Business Manager o en enlaces de WhatsApp:

1. **Meta tags** (ya están en `index.html`): cuando tengas la URL definitiva, reemplaza `https://TU-URL-BASE/` por tu dominio real en `og:url` y `og:image`.
2. **Imagen de vista previa**: pon una imagen en `public/og-image.png` (1200×630 px) para que los enlaces se vean bien al compartir.
3. **Verificación de dominio**: si Meta te pide verificar el dominio, te dará un archivo tipo `facebook-domain-verification-xxxxx.html`. Colócalo en `public/` (junto a `robots.txt`). Tras el siguiente deploy estará en `https://tu-dominio/facebook-domain-verification-xxxxx.html` y Meta podrá comprobar que el dominio es tuyo.

El `robots.txt` ya permite al crawler de Meta (`facebookexternalhit`), así que no hace falta cambiarlo.
