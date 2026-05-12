"use client";

import { m } from "motion/react";
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
    <section className="relative px-6 py-16">
      <div className="grid-pattern absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-4xl">
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
        </m.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {achievements.map((item, i) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="border-border bg-card/50 hover:bg-card hover:border-primary/20 flex items-start gap-3 rounded-xl border p-4 transition-all"
            >
              <div className="bg-primary/10 text-primary shrink-0 rounded-lg p-2.5">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-foreground font-semibold">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.subtitle}</p>
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
