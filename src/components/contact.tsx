"use client";

import { m } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("Contact");
  return (
    <section id="contact" className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
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
          <p className="text-muted-foreground mx-auto mt-3 max-w-lg">
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
                label: "+84 974 559 593",
                href: "tel:+84974559593",
              },
              {
                icon: MapPin,
                label: t("location"),
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border-border bg-card/50 hover:bg-card hover:border-primary/20 flex items-center gap-3 rounded-xl border px-4 py-2.5 transition-all"
              >
                <item.icon className="text-primary h-4 w-4 shrink-0" />
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="text-muted-foreground text-sm">
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
              "gradient-border mt-4 cursor-pointer gap-2 border-0 text-white transition-opacity hover:opacity-90",
            )}
          >
            <Mail className="h-4 w-4" />
            {t("sendEmail")}
          </a>

          {/* Languages */}
          <div className="text-muted-foreground mt-6 flex items-center gap-4 text-sm">
            <span>{t("lang_vi")}</span>
            <span className="bg-border h-4 w-px" />
            <span>{t("lang_en")}</span>
          </div>
        </m.div>
      </div>
    </section>
  );
}
