"use client";

import { m } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, Trophy, Gauge } from "lucide-react";
import { useTranslations } from "next-intl";

export function Achievements() {
  const t = useTranslations("Achievements");

  const achievements = [
    {
      icon: Award,
      title: t("items.pmp.title"),
      subtitle: t("items.pmp.subtitle"),
      detail: t("items.pmp.detail"),
    },
    {
      icon: Trophy,
      title: t("items.award.title"),
      subtitle: t("items.award.subtitle"),
      detail: t("items.award.detail"),
    },
    {
      icon: Gauge,
      title: t("items.lighthouse.title"),
      subtitle: t("items.lighthouse.subtitle"),
      detail: t("items.lighthouse.detail"),
    },
    {
      icon: GraduationCap,
      title: t("items.education.title"),
      subtitle: t("items.education.subtitle"),
      detail: t("items.education.detail"),
    },
  ];

  return (
    <section className="py-16 px-6 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative mx-auto max-w-4xl">
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-all"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                <Badge variant="secondary" className="mt-2 text-xs font-normal">
                  {item.detail}
                </Badge>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
