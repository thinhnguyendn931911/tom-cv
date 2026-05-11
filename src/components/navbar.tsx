"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Menu, X } from "lucide-react";
import { m, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export function Navbar() {
  const t = useTranslations("Navbar");

  const navLinks = [
    { label: t("about"), href: "#about" },
    { label: t("experience"), href: "#experience" },
    { label: t("projects"), href: "#projects" },
    { label: t("skills"), href: "#skills" },
    { label: t("contact"), href: "#contact" },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <m.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
          <a
            href="#"
            className="text-lg font-bold tracking-tight gradient-text"
          >
            {t("brand")}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="ml-2 flex items-center gap-2">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
      </m.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-20 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-2 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
