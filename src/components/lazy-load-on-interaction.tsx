"use client";

import { useEffect, useState, ReactNode } from "react";

interface LazyLoadOnInteractionProps {
  children: ReactNode;
  delay?: number;
}

export function LazyLoadOnInteraction({
  children,
  delay = 8000,
}: LazyLoadOnInteractionProps) {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) return;

    const loadContent = () => {
      setLoad(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener("scroll", loadContent);
      window.removeEventListener("mousemove", loadContent);
      window.removeEventListener("touchstart", loadContent);
      window.removeEventListener("keydown", loadContent);
    };

    // Load after delay
    const timer = setTimeout(loadContent, delay);

    // Load on interaction
    window.addEventListener("scroll", loadContent, { passive: true });
    window.addEventListener("mousemove", loadContent, { passive: true });
    window.addEventListener("touchstart", loadContent, { passive: true });
    window.addEventListener("keydown", loadContent, { passive: true });

    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, [load, delay]);

  if (!load) return null;

  return <>{children}</>;
}
