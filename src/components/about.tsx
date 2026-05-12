"use client";

import { m } from "motion/react";
import { MapPin, Briefcase, Award } from "lucide-react";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");
  return (
    <section id="about" className="px-6 py-16">
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
        </m.div>

        <m.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-muted-foreground mt-6 max-w-3xl text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.raw("description") }}
        />

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-8 flex flex-wrap gap-6"
        >
          {[
            {
              icon: MapPin,
              label: t("location"),
            },
            {
              icon: Briefcase,
              label: t("certification"),
            },
            {
              icon: Award,
              label: t("award"),
            },
          ].map((item) => (
            <div
              key={item.label}
              className="text-muted-foreground flex items-center gap-2 text-sm"
            >
              <item.icon className="text-primary h-4 w-4" />
              {item.label}
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
