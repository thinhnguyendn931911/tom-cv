"use client";

import { m } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export function Skills() {
  const t = useTranslations("Skills");
  const coreCompetencies: string[] = t.raw("coreCompetencies");
  const categoryKeys = [
    "languages",
    "frontend",
    "backend",
    "desktop",
    "database",
    "ui",
    "build",
    "testing",
    "quality",
    "auth",
    "version",
    "other",
  ];

  return (
    <section id="skills" className="py-16 px-6">
      <div className="mx-auto max-w-6xl">
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
        </m.div>

        {/* Core competencies */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 p-6 rounded-xl border border-primary/20 bg-primary/5"
        >
          <div className="flex items-center gap-2 mb-4">
            <Zap className="h-4 w-4 text-primary" />
            <h4 className="font-semibold text-foreground">
              {t("coreCompetenciesTitle")}
            </h4>
          </div>
          <div className="flex flex-wrap gap-2">
            {coreCompetencies.map((comp) => (
              <Badge
                key={comp}
                variant="secondary"
                className="text-sm font-normal py-1.5 px-3 h-auto whitespace-normal text-left leading-relaxed"
              >
                {comp}
              </Badge>
            ))}
          </div>
        </m.div>

        {/* Skill categories grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryKeys.map((key, i) => {
            const name = t(`categories.${key}.name`);
            const skills: string[] = t.raw(`categories.${key}.skills`);
            return (
              <m.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true, margin: "-50px" }}
                className="rounded-xl border border-border bg-card/50 p-4 hover:bg-card hover:border-primary/20 transition-all"
              >
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  {name}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="text-xs font-normal hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-colors h-auto whitespace-normal text-center"
                    >
                      {skill}
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
