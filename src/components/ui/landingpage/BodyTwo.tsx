import { useTranslations } from "next-intl";
import React from "react";

function BodyTwo() {

  const t = useTranslations("BodyTwo");
  return (
    <section className="h-screen py-24 px-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900/20">
      <div className="max-w-6xl mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Textsektion */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            {t("h21")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-400 dark:to-sky-300">
              {t("h22")}
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-accant-foreground leading-relaxed font-semibold">
            {t("p1")}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              {t("p2")}
            </span>{" "}
            {t("p3")}
          </p>
          <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            {t("knapp")}
          </button>
        </div>

        {/* Bildsektion (nu inom samma grid-container) */}
        <div className="relative group flex justify-center lg:justify-end">
          <div className="absolute inset-0 bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-md group-hover:blur-lg transition-all duration-500 scale-95 group-hover:scale-100"></div>
          <img
            src="/images/talent.jpg"
            alt="IT-rekrytering"
            className="relative w-full max-w-md lg:max-w-xl h-auto rounded-full shadow-xl border-4 border-white dark:border-gray-800 group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default BodyTwo;
