import { useState } from "react";

type LogoSize = "sm" | "md";

const sizeClasses: Record<LogoSize, string> = {
  sm: "h-7 w-7",
  md: "h-8 w-8",
};

/**
 * Logo de la marca. Usa `public/logo.png`. Si falla la carga, se muestra el fallback con la "V" y el gradiente.
 */
const Logo = ({ size = "md" }: { size?: LogoSize }) => {
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
  return (
    <img
      src={`${base}logo.png`}
      alt="Logo void software"
      className={`${sizeClass} rounded-lg object-cover shrink-0`}
      onError={() => setUseFallback(true)}
    />
  );
};

export default Logo;
