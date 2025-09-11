"use client";

import { useTranslations } from "next-intl";
import { Button } from "../darkmode/button";

function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="flex justify-center h-screen py-16 md:py-24 bg-gradient-to-br from-primary to-secondary/20">
      <div className="w-[95%] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:pl-10">
        {/* Textsektion  */}
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            {t("titleOne")}{" "}
            <span className="gradient-text">{t("titleTwo")}</span>
          </h1>

          <p className="text-center md:text-left text-2xl md:text-3xl text-muted-foreground font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
            {t("content")}
          </p>

          {/* Knappar*/}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 md:max-w-md">
            <Button
              variant="ghost"
              className="rounded-full px-8 py-4 border-2 border-border text-text-secondary hover:shadow-md hover:scale-105 transition-transform duration-300 font-semibold text-xl"
            >
              {t("b1")}
              <img
                src="/images/google.png"
                alt="google logo"
                className="pl-2 h-4.5"
              />
            </Button>
            <Button
              variant="ghost"
              className="rounded-full px-8 py-4 border-2 border-border text-text-secondary hover:shadow-lg hover:scale-105 transition-transform duration-300 font-semibold text-xl"
            >
              {t("b2")}
            </Button>
            <Button
              variant="ghost"
              className="rounded-full px-8 py-4 border-2 border-border  text-text-secondary hover:shadow-lg hover:scale-105 transition-transform duration-300 font-semibold text-xl"
            >
              {t("b3")}
            </Button>
          </div>
        </div>

        {/* Bildsektion*/}
        <div className="relative group flex justify-center">
          <div className="absolute inset-1 bg-indigo-200/50 dark:bg-indigo-900/20 rounded-xl blur-3xl group-hover:blur-lg transition-all duration-500 group-hover:scale-105"></div>
          <img
            src="/images/heroimg.jpg"
            alt="Professionell IT-community"
            className="relative w-full max-w-xl rounded-xl shadow-xl border-4 border-white dark:border-gray-800 group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
