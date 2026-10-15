/// <reference types="node" />
import { describe, it, expect } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

// Vite no valida los archivos de public/: si se borra uno que se pide por URL fija, el build
// pasa igual y el sitio da 404 (así se perdió logo.png en a3f5d93 y el navbar mostraba la "V").
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const publicDir = path.join(root, "public");

// favicon, apple-touch-icon, og:image, twitter:image
const html = readFileSync(path.join(root, "index.html"), "utf8");
const desdeIndexHtml = [
  ...html.matchAll(/(?:href|content)="(?:https:\/\/void-ia\.com)?\/([^"?#]+\.(?:png|jpe?g|ico|svg|webp))"/g),
].map((m) => m[1]);

// Pedidos fuera de index.html: Logo.tsx, y el CRM como header de plantillas de WhatsApp
// (CRM/deploy/tenants/imperia/imperia_crm.yaml, CRM/config/pagos.local.env).
const otros = ["logo.png", "logo-imperia.png", "logo-plantilla.jpeg"];

describe("archivos de public/", () => {
  it("index.html referencia imágenes de public/", () => {
    expect(desdeIndexHtml.length).toBeGreaterThan(0);
  });

  it.each([...new Set([...desdeIndexHtml, ...otros])])("existe public/%s", (archivo) => {
    expect(existsSync(path.join(publicDir, archivo))).toBe(true);
  });
});
