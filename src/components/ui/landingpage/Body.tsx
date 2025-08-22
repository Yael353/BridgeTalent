"use client";

import { useTranslations } from "next-intl";

function Body() {
  const t = useTranslations("Body");
  return (
    <section className="flex justify-center h-screen py-20 px-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">
        {/* Bildsektion */}
        <div className="relative group flex justify-between ">
          <div className="absolute inset-0 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-md group-hover:blur-lg transition-all duration-500 scale-95 group-hover:scale-100"></div>
          <img
            src="/images/bodyimg.jpg"
            alt="IT-rekrytering"
            className="relative w-full max-w-md h-auto rounded-full shadow-xl border-4 border-white dark:border-gray-800 group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
          />
        </div>

        {/* Textsektion*/}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {t("h21")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-400 dark:to-sky-300">
              {t("h22")}
            </span>
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-accent-foreground leading-relaxed">
            {t("p1")}{" "}
          </p>

          <button className="mt-8 px-8 py-3 bg-gradient-to-r sm:justify-center from-blue-600 to-sky-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            {t("knapp")}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Body;
