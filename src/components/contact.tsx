"use client";

import { m } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("Contact");
  return (
    <section id="contact" className="py-16 px-6">
      <div className="mx-auto max-w-4xl">
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
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            {t("description")}
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          {/* Contact cards */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              {
                icon: Mail,
                label: "thinhnguyendn931911@gmail.com",
                href: "mailto:thinhnguyendn931911@gmail.com",
              },
              {
                icon: Phone,
                label: "+84 896 212 509",
                href: "tel:+84896212509",
              },
              {
                icon: MapPin,
                label: t("location"),
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/20 transition-all"
              >
                <item.icon className="h-4 w-4 text-primary shrink-0" />
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {item.label}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="mailto:thinhnguyendn931911@gmail.com"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-4 gap-2 gradient-border text-white border-0 hover:opacity-90 transition-opacity cursor-pointer",
            )}
          >
            <Mail className="h-4 w-4" />
            {t("sendEmail")}
          </a>

          {/* Languages */}
          <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
            <span>{t("lang_vi")}</span>
            <span className="w-px h-4 bg-border" />
            <span>{t("lang_en")}</span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
