import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { MotionProvider } from "@/components/motion-provider";
import { notFound } from "next/navigation";
import "../globals.css";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Hero" });

  return {
    title: `${t("name")} — ${t("role")} | ${t("specialist")}`,
    description: t("description_1") + " " + t("description_2"),
    openGraph: {
      title: `${t("name")} — Portfolio`,
      description: t("description_1") + " " + t("description_2"),
      url: "https://thinhnguyen.dev",
      siteName: t("name"),
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("name")} — Portfolio`,
      description: t("description_1") + " " + t("description_2"),
      images: ["/og-image.jpg"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <MotionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider messages={messages}>
              <TooltipProvider>{children}</TooltipProvider>
            </NextIntlClientProvider>
          </ThemeProvider>
        </MotionProvider>
      </body>
    </html>
  );
}
