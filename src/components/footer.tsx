import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="pb-8 px-6">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {t("copyright")}
          </p>
          <p>{t("location")}</p>
        </div>
      </div>
    </footer>
  );
}
