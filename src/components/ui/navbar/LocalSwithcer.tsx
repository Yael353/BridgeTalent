"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

function LocalSwitcher() {
  const locale = useLocale();
  const t = useTranslations("Common");
  const router = useRouter();
  const pathname = usePathname();

  // Hitta nästa språk att växla till
  const nextLocale =
    routing.locales.find((loc) => loc !== locale) || routing.defaultLocale;

  // Funktion för att byta språk
  const switchLocale = () => {
    // Skapa ny path med ny locale
    const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPathname);
  };

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
      aria-label={t("switchLanguage")}
    >
      <Globe className="h-5 w-5 md:h-6 md:w-6" />
      <span className="text-sm font-medium uppercase hidden md:block">
        {nextLocale}
      </span>
    </button>
  );
}

export default LocalSwitcher;
