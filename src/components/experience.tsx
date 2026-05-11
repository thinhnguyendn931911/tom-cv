"use client";

import { m } from "framer-motion";
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
      className="relative pl-8 pb-12 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-border group-last:bg-gradient-to-b group-last:from-border group-last:to-transparent" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary" />

      {/* Content */}
      <div
        className="p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-all cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <h4 className="text-lg font-semibold text-foreground">
              {exp.role}
            </h4>
            <p className="text-primary font-medium">{exp.company}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Badge variant="secondary" className="font-normal">
              {exp.period}
            </Badge>
            {exp.teamSize && (
              <Badge variant="outline" className="font-normal gap-1">
                <Users className="h-3 w-3" />
                {exp.teamSize}
              </Badge>
            )}
          </div>
        </div>

        {/* Expand toggle */}
        <div className="flex items-center gap-1 mt-3 text-sm text-muted-foreground">
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
                className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/30"
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
    <section id="experience" className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
            {t("title")}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {t("heading_1")}{" "}
            <span className="gradient-text">{t("heading_2")}</span>
          </h3>
          <p className="mt-3 text-muted-foreground">{t("description")}</p>
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
