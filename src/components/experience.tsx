"use client";

import { m } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Users, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTranslations } from "next-intl";

function TimelineEntry({
  exp,
  index,
  t,
}: {
  exp: {
    role: string;
    company: string;
    period: string;
    teamSize?: string;
    highlights: string[];
  };
  index: number;
  t: any;
}) {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <m.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative pb-12 pl-8 last:pb-0"
    >
      {/* Timeline line */}
      <div className="bg-border group-last:from-border absolute top-2 bottom-0 left-0 w-px group-last:bg-gradient-to-b group-last:to-transparent" />

      {/* Timeline dot */}
      <div className="border-primary bg-background group-hover:bg-primary absolute top-2 left-0 h-3 w-3 -translate-x-1/2 rounded-full border-2 transition-colors" />

      {/* Content */}
      <div
        className="border-border bg-card/50 hover:bg-card hover:border-primary/20 cursor-pointer rounded-xl border p-4 transition-all"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h4 className="text-foreground text-lg font-semibold">
              {exp.role}
            </h4>
            <p className="text-primary font-medium">{exp.company}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Badge variant="secondary" className="font-normal">
              {exp.period}
            </Badge>
            {exp.teamSize && (
              <Badge variant="outline" className="gap-1 font-normal">
                <Users className="h-3 w-3" />
                {exp.teamSize}
              </Badge>
            )}
          </div>
        </div>

        {/* Expand toggle */}
        <div className="text-muted-foreground mt-3 flex items-center gap-1 text-sm">
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          />
          <span>{expanded ? t("collapse") : t("viewDetails")}</span>
        </div>

        {/* Expandable highlights */}
        {expanded && (
          <m.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-2"
          >
            {exp.highlights.map((h, i) => (
              <li
                key={i}
                className="text-muted-foreground before:bg-primary/30 relative pl-4 text-sm leading-relaxed before:absolute before:top-[0.6em] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:content-['']"
              >
                {h}
              </li>
            ))}
          </m.ul>
        )}
      </div>
    </m.div>
  );
}

export function Experience() {
  const t = useTranslations("Experience");
  const roles = ["lazarus", "ztech", "hodfords", "enclave"];

  return (
    <section id="experience" className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-primary mb-2 text-sm font-semibold tracking-widest uppercase">
            {t("title")}
          </h2>
          <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("heading_1")}{" "}
            <span className="gradient-text">{t("heading_2")}</span>
          </h3>
          <p className="text-muted-foreground mt-3">{t("description")}</p>
        </m.div>

        <div className="mt-12">
          {roles.map((key, i) => {
            const exp = {
              role: t(`roles.${key}.role`),
              company: t(`roles.${key}.company`),
              period: t(`roles.${key}.period`),
              teamSize: t.has(`roles.${key}.teamSize`)
                ? t(`roles.${key}.teamSize`)
                : undefined,
              highlights: t.raw(`roles.${key}.highlights`),
            };
            return <TimelineEntry key={key} exp={exp} index={i} t={t} />;
          })}
        </div>
      </div>
    </section>
  );
}
