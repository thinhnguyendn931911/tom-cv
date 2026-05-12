import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="px-6 pb-8">
      <div className="mx-auto max-w-6xl">
        <Separator className="mb-8" />
        <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} {t("copyright")}
          </p>
          <p>{t("location")}</p>
        </div>
      </div>
    </footer>
  );
}
