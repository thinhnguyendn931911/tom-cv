"use client";

import { m } from "motion/react";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  ArrowUpRight,
  Layers,
  Globe,
  Shield,
  BarChart3,
  Monitor,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "next-intl";

const projectIcons: Record<string, React.ElementType> = {
  aiPlanning: Sparkles,
  chain: Globe,
  diginex: BarChart3,
  supply: Shield,
  qnet: Layers,
  zmining: Monitor,
};

export function Projects() {
  const t = useTranslations("Projects");
  const projectKeys = [
    "aiPlanning",
    "chain",
    "diginex",
    "supply",
    "qnet",
    "zmining",
  ];

  const techStacks: Record<string, string[]> = {
    aiPlanning: [
      "Next.js",
      "AI-assisted planning",
      "Jira release analysis",
      "AI estimation",
      "Resource planning",
    ],
    chain: ["Next.js", "Nuxt.js", "PHP"],
    diginex: [
      "TypeScript",
      "Vue.js",
      "Vue 3",
      "Webpack",
      "Vite",
      "Micro-services",
    ],
    supply: ["TypeScript", "Vue.js", "Webpack"],
    qnet: ["TypeScript", "React.js", "jQuery", "ASP.NET"],
    zmining: ["Electron", "TypeScript", "Webpack", "Vite", "Micro-services"],
  };

  return (
    <section id="projects" className="relative px-6 py-16">
      <div className="grid-pattern absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-6xl">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-primary mb-2 text-sm font-semibold tracking-widest uppercase">
            {t("title")}
          </h2>
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("heading_1")}{" "}
            <span className="gradient-text">{t("heading_2")}</span>
          </h3>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl">
            {t("description")}
          </p>
        </m.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectKeys.map((key, i) => {
            const Icon = projectIcons[key] || Layers;
            const highlights: string[] = t.raw(`items.${key}.highlights`);

            return (
              <m.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group border-border bg-card/50 hover:bg-card hover:border-primary/20 hover:shadow-primary/5 relative rounded-xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Icon & title */}
                <div className="flex items-start justify-between">
                  <div className="bg-primary/10 text-primary rounded-lg p-2.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="text-muted-foreground h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>

                <h4 className="text-foreground mt-4 text-lg font-semibold">
                  {t(`items.${key}.title`)}
                </h4>
                {t.has(`items.${key}.company`) && (
                  <p className="text-primary mt-0.5 text-sm font-medium">
                    {t(`items.${key}.company`)}
                  </p>
                )}

                {/* Highlights */}
                <ul className="mt-3 space-y-1.5">
                  {highlights.map((h, hi) => (
                    <li
                      key={hi}
                      className="text-muted-foreground text-sm leading-relaxed"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Meta row */}
                <div className="text-muted-foreground mt-4 flex flex-wrap items-center gap-2 text-xs">
                  <Badge
                    variant="secondary"
                    className="h-auto text-left text-xs font-normal whitespace-normal"
                  >
                    {t(`items.${key}.role`)}
                  </Badge>
                  {t.has(`items.${key}.teamSize`) && (
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" /> {t(`items.${key}.teamSize`)}
                    </span>
                  )}
                </div>

                {/* Tech chips */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {techStacks[key].map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-muted-foreground h-auto text-xs font-normal whitespace-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
