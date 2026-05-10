"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const handleLocaleChange = (nextLocale: string) => {
    // Set the NEXT_LOCALE cookie directly so middleware picks it up
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
    router.refresh();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
          className:
            "font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer gap-2",
        })}
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase text-xs">{locale}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={`cursor-pointer gap-2 ${locale === "vi" ? "bg-accent" : ""}`}
          onClick={() => handleLocaleChange("vi")}
        >
          <span className="text-lg leading-none">🇻🇳</span>
          <span>Tiếng Việt</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={`cursor-pointer gap-2 ${locale === "en" ? "bg-accent" : ""}`}
          onClick={() => handleLocaleChange("en")}
        >
          <span className="text-lg leading-none">🇬🇧</span>
          <span>English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
