"use client";

import { m, useScroll, useTransform } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown, FileDown, Mail, Sparkles } from "lucide-react";
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
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Parallax background layer */}
      <m.div style={{ y }} className="absolute inset-0">
        {/* Mesh gradient */}
        <div className="hero-gradient absolute inset-0" />

        {/* Animated glowing orbs */}
        <m.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[15%] h-[500px] w-[500px] rounded-full bg-[oklch(0.45_0.18_265/12%)] blur-[100px]"
        />
        <m.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute right-[10%] bottom-[-5%] h-[450px] w-[450px] rounded-full bg-[oklch(0.55_0.22_300/10%)] blur-[100px]"
        />
        <m.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.45, 0.25] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-[40%] right-[25%] h-[300px] w-[300px] rounded-full bg-[oklch(0.70_0.14_180/8%)] blur-[80px]"
        />

        {/* Grid pattern */}
        <div className="grid-pattern absolute inset-0 opacity-60" />
      </m.div>

      {/* Floating tech tags — desktop only */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
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
              className="border-border bg-card/60 text-muted-foreground inline-flex items-center rounded-full border px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur-sm"
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
          <span className="border-border bg-card/50 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            {t("openToOpportunities")}
          </span>
        </m.div>

        {/* Name — word-by-word reveal (Pure CSS for optimal LCP) */}
        <h1 className="mt-6 text-6xl leading-[1.2] font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
          <span className="flex flex-wrap justify-center gap-x-4">
            {nameWords.map((word, i) => (
              <span
                key={word}
                className="gradient-text hero-text-reveal block pb-2"
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
          <div className="to-border h-px w-12 bg-gradient-to-r from-transparent" />
          <p className="text-muted-foreground text-lg text-[0.85em] font-medium tracking-wide uppercase sm:text-xl">
            {t("role")}
            <span className="text-primary mx-2">·</span>
            {t("specialist")}
          </p>
          <div className="to-border h-px w-12 bg-gradient-to-l from-transparent" />
        </m.div>

        {/* Value prop */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="text-muted-foreground mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
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
          className="divide-border border-border bg-card/40 mx-auto mt-10 grid max-w-lg grid-cols-4 divide-x overflow-hidden rounded-2xl border backdrop-blur-sm"
        >
          {[
            { value: t("yearsExp"), label: t("yearsExpLabel") },
            { value: t("productsShipped"), label: t("productsShippedLabel") },
            { value: t("lighthouseScore"), label: t("lighthouseScoreLabel") },
            { value: t("teamSize"), label: t("teamSizeLabel") },
          ].map((stat) => (
            <div key={stat.label} className="py-4 text-center">
              <div className="gradient-text text-2xl font-bold">
                {stat.value}
              </div>
              <div className="text-muted-foreground mt-0.5 text-xs">
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
          <div className="group relative">
            <div className="gradient-border absolute -inset-0.5 rounded-xl opacity-60 blur transition-all duration-300 group-hover:opacity-100" />
            <a
              href="mailto:thinhnguyendn931911@gmail.com"
              className={cn(
                buttonVariants({ size: "lg" }),
                "gradient-border relative cursor-pointer gap-2 border-0 text-white",
              )}
            >
              <Mail className="h-4 w-4" />
              {t("contactMe")}
            </a>
          </div>

          <a
            href="/assets/Thinh_Dinh_Nguyen.pdf"
            download
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "cursor-pointer gap-2 backdrop-blur-sm",
            )}
          >
            <FileDown className="h-4 w-4" />
            {t("downloadCV")}
          </a>

          <a
            href="#experience"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "cursor-pointer gap-2 backdrop-blur-sm",
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
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-muted-foreground/50 text-xs tracking-widest uppercase">
          {t("scroll")}
        </span>
        <m.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="text-muted-foreground/40 h-4 w-4" />
        </m.div>
      </m.div>
    </section>
  );
}
