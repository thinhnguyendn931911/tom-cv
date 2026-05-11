"use client";

import { m } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  ArrowUpRight,
  Layers,
  Globe,
  Shield,
  BarChart3,
  Monitor,
} from "lucide-react";
import { useTranslations } from "next-intl";

const projectIcons: Record<string, React.ElementType> = {
  chain: Globe,
  diginex: BarChart3,
  supply: Shield,
  qnet: Layers,
  zmining: Monitor,
};

export function Projects() {
  const t = useTranslations("Projects");
  const projectKeys = ["chain", "diginex", "supply", "qnet", "zmining"];

  // Since we need to match techStack with translations but the data was not moved to json fully (techStack was not in json),
  // we will reconstruct the techStack here for simplicity as it wasn't extracted to messages earlier.
  // Wait, I didn't add techStack to messages. Let's add them locally.
  const techStacks: Record<string, string[]> = {
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
    <section id="projects" className="py-16 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="relative mx-auto max-w-6xl">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            {t("title")}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("heading_1")}{" "}
            <span className="gradient-text">{t("heading_2")}</span>
          </h3>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            {t("description")}
          </p>
        </m.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group relative rounded-xl border border-border bg-card/50 hover:bg-card p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
              >
                {/* Icon & title */}
                <div className="flex items-start justify-between">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h4 className="mt-4 text-lg font-semibold text-foreground">
                  {t(`items.${key}.title`)}
                </h4>
                {t.has(`items.${key}.company`) && (
                  <p className="text-sm text-primary font-medium mt-0.5">
                    {t(`items.${key}.company`)}
                  </p>
                )}

                {/* Highlights */}
                <ul className="mt-3 space-y-1.5">
                  {highlights.map((h, hi) => (
                    <li
                      key={hi}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Meta row */}
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground flex-wrap">
                  <Badge
                    variant="secondary"
                    className="text-xs font-normal h-auto whitespace-normal text-left"
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
                      className="text-xs font-normal text-muted-foreground h-auto whitespace-normal"
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
