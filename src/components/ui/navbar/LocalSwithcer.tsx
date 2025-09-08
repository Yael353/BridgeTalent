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

  
  const nextLocale =
    routing.locales.find((loc) => loc !== locale) || routing.defaultLocale;

  const switchLocale = () => {
    const newPathname = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPathname);
  };

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
      aria-label={t("switchLanguage")}
    >
      <Globe className="h-[2rem] w-[2rem] lg:h-[2.2rem] lg:w-[2.2rem] rounded-md bg-white text-black dark:bg-black dark:text-white p-1.5 lg:p-2 hover:bg-gray-100 dark:hover:bg-gray-800" />
      <span className="text-sm font-medium uppercase hidden md:block">
        {nextLocale}
      </span>
    </button>
  );
}

export default LocalSwitcher;
