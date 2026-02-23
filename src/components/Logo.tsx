import { useState } from "react";

type LogoSize = "sm" | "md";

const sizeClasses: Record<LogoSize, string> = {
  sm: "h-7 w-7",
  md: "h-8 w-8",
};

/**
 * Logo de la marca. Si existe `public/logo.svg` o `public/logo.png`, se usa esa imagen.
 * Si no, se muestra el fallback con la "V" y el gradiente.
 * Para usar tu logo: coloca tu imagen en public/logo.svg o public/logo.png.
 */
const Logo = ({ size = "md" }: { size?: LogoSize }) => {
  const [tryPng, setTryPng] = useState(false);
  const [useFallback, setUseFallback] = useState(false);
  const sizeClass = sizeClasses[size];

  if (useFallback) {
    return (
      <div
        className={`${sizeClass} rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 glow`}
        aria-hidden
      >
        <span className="font-display text-white font-bold" style={{ fontSize: size === "sm" ? "0.75rem" : "0.875rem" }}>
          V
        </span>
      </div>
    );
  }

  const base = import.meta.env.BASE_URL;
  const logoSrc = tryPng ? `${base}logo.png` : `${base}logo.svg`;
  return (
    <img
      src={logoSrc}
      alt="Logo"
      className={`${sizeClass} rounded-lg object-cover shrink-0`}
      onError={() => (tryPng ? setUseFallback(true) : setTryPng(true))}
    />
  );
};

export default Logo;
