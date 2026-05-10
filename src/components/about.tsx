"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Award } from "lucide-react";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");
  return (
    <section id="about" className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
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
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl"
          dangerouslySetInnerHTML={{ __html: t.raw("description") }}
        />

        <motion.div
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
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <item.icon className="h-4 w-4 text-primary" />
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
