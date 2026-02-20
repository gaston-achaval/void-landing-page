# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

---

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
2. En **Source** elige **GitHub Actions** (no “Deploy from a branch”).
3. Cada vez que hagas **push a la rama `main`**, GitHub Actions construirá el sitio y lo publicará.

La URL quedará: `https://<tu-usuario>.github.io/void-automation-hub-15/`

Para probar el build estático en local antes de subir:
```bash
BASE_PATH=/void-automation-hub-15/ npm run build
npm run preview
```
Luego abre la URL que muestre `preview` (por ejemplo http://localhost:4173).

---

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
