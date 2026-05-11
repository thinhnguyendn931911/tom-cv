"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const floatingTags = [
  { label: "Next.js", x: "8%", y: "22%", delay: 0.8 },
  { label: "Vue.js", x: "82%", y: "18%", delay: 1.0 },
  { label: "TypeScript", x: "6%", y: "65%", delay: 1.1 },
  { label: "Lighthouse 90+", x: "78%", y: "62%", delay: 0.9 },
  { label: "PMP Certified", x: "14%", y: "82%", delay: 1.2 },
  { label: "React", x: "76%", y: "82%", delay: 1.3 },
];

export function Hero() {
  const t = useTranslations("Hero");
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const nameWords = t("name").split(" ");

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background layer */}
      <m.div style={{ y }} className="absolute inset-0">
        {/* Mesh gradient */}
        <div className="absolute inset-0 hero-gradient" />

        {/* Animated glowing orbs */}
        <m.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-[oklch(0.45_0.18_265/12%)] blur-[100px]"
        />
        <m.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[-5%] right-[10%] w-[450px] h-[450px] rounded-full bg-[oklch(0.55_0.22_300/10%)] blur-[100px]"
        />
        <m.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-[40%] right-[25%] w-[300px] h-[300px] rounded-full bg-[oklch(0.70_0.14_180/8%)] blur-[80px]"
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern opacity-60" />
      </m.div>

      {/* Floating tech tags — desktop only */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {floatingTags.map((tag) => (
          <m.div
            key={tag.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: tag.delay }}
            style={{ left: tag.x, top: tag.y }}
            className="absolute"
          >
            <m.span
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex items-center px-3 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm text-xs font-medium text-muted-foreground shadow-sm"
            >
              {tag.label}
            </m.span>
          </m.div>
        ))}
      </div>

      {/* Main content */}
      <m.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        {/* Status badge */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 backdrop-blur-sm px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            {t("openToOpportunities")}
          </span>
        </m.div>

        {/* Name — word-by-word reveal (Pure CSS for optimal LCP) */}
        <h1 className="mt-6 text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.2]">
          <span className="flex flex-wrap justify-center gap-x-4">
            {nameWords.map((word, i) => (
              <span
                key={word}
                className="gradient-text pb-2 block hero-text-reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {word}
              </span>
            ))}
          </span>
        </h1>

        {/* Role line */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-4 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
          <p className="text-lg sm:text-xl text-muted-foreground font-medium tracking-wide uppercase text-[0.85em]">
            {t("role")}
            <span className="mx-2 text-primary">·</span>
            {t("specialist")}
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
        </m.div>

        {/* Value prop */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          {t("description_1")}{" "}
          <span className="text-foreground font-semibold">
            {t("description_2")}
          </span>
          {t("description_3")}{" "}
          <span className="text-foreground font-semibold">
            {t("description_4")}
          </span>
          {t("description_5")}{" "}
          <span className="text-foreground font-semibold">
            {t("description_6")}
          </span>{" "}
          {t("description_7")}
        </m.p>

        {/* Stats row */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.85 }}
          className="mt-10 grid grid-cols-4 max-w-lg mx-auto divide-x divide-border border border-border rounded-2xl overflow-hidden bg-card/40 backdrop-blur-sm"
        >
          {[
            { value: t("yearsExp"), label: t("yearsExpLabel") },
            { value: t("productsShipped"), label: t("productsShippedLabel") },
            { value: t("lighthouseScore"), label: t("lighthouseScoreLabel") },
            { value: t("teamSize"), label: t("teamSizeLabel") },
          ].map((stat) => (
            <div key={stat.label} className="py-4 text-center">
              <div className="text-2xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </m.div>

        {/* CTAs */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.95 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary CTA with glow ring */}
          <div className="relative group">
            <div className="absolute -inset-0.5 gradient-border rounded-xl opacity-60 group-hover:opacity-100 blur transition-all duration-300" />
            <a
              href="mailto:thinhnguyendn931911@gmail.com"
              className={cn(
                buttonVariants({ size: "lg" }),
                "relative gap-2 gradient-border text-white border-0 cursor-pointer",
              )}
            >
              <Mail className="h-4 w-4" />
              {t("contactMe")}
            </a>
          </div>

          <a
            href="#experience"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 cursor-pointer backdrop-blur-sm",
            )}
          >
            <Sparkles className="h-4 w-4" />
            {t("viewWork")}
          </a>
        </m.div>
      </m.div>

      {/* Scroll indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground/50 tracking-widest uppercase">
          {t("scroll")}
        </span>
        <m.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-muted-foreground/40" />
        </m.div>
      </m.div>
    </section>
  );
}
