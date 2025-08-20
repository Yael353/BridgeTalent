"use client";

import { useTranslations } from "next-intl";
import { Button } from "../darkmode/button";

function Hero() {
  const t = useTranslations("Hero");


  return (
    <section className="flex justify-center h-screen py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900/20">
      <div className="w-[90%] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center md:pl-10">
        {/* Textsektion med förbättrad typografi */}
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            {t("titleOne")} {" "}
            {/* Här hittar du en{" "} */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-400">
              {t("titleTwo")}
            </span> 
          </h1>

          <p className="text-center md:text-left text-2xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium leading-relaxed max-w-2xl mx-auto md:mx-0">
            {t("content")}
            {/* Vi förbinder <span className="text-indigo-400">talanger</span> med{" "}
            <span className="text-indigo-400">möjligheter</span> och bygger
            broar mellan <span className="text-indigo-400">drömmar</span> och{" "}
            <span className="text-indigo-400">karriärer</span> */}
          </p>

          {/* Knappar med förbättrade hover-effekter */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 md:max-w-md">
            <Button className="w-full rounded-full px-8 py-4 border-2 border-indigo-600 bg-white text-indigo-600  hover:shadow-md hover:scale-105 transition-transform duration-300 font-semibold text-xl">
              Fortsätt med Google
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path
                  fill="#fff"
                  d="M44.59 4.21a63.28 63.28 0 004.33 120.9 67.6 67.6 0 0032.36.35 57.13 57.13 0 0025.9-13.46 57.44 57.44 0 0016-26.26 74.33 74.33 0 001.61-33.58H65.27v24.69h34.47a29.72 29.72 0 01-12.66 19.52 36.16 36.16 0 01-13.93 5.5 41.29 41.29 0 01-15.1 0A37.16 37.16 0 0144 95.74a39.3 39.3 0 01-14.5-19.42 38.31 38.31 0 010-24.63 39.25 39.25 0 019.18-14.91A37.17 37.17 0 0176.13 27a34.28 34.28 0 0113.64 8q5.83-5.8 11.64-11.63c2-2.09 4.18-4.08 6.15-6.22A61.22 61.22 0 0087.2 4.59a64 64 0 00-42.61-.38z"
                />
                <path
                  fill="#e33629"
                  d="M44.59 4.21a64 64 0 0142.61.37 61.22 61.22 0 0120.35 12.62c-2 2.14-4.11 4.14-6.15 6.22Q95.58 29.23 89.77 35a34.28 34.28 0 00-13.64-8 37.17 37.17 0 00-37.46 9.74 39.25 39.25 0 00-9.18 14.91L8.76 35.6A63.53 63.53 0 0144.59 4.21z"
                />
                <path
                  fill="#f8bd00"
                  d="M3.26 51.5a62.93 62.93 0 015.5-15.9l20.73 16.09a38.31 38.31 0 000 24.63q-10.36 8-20.73 16.08a63.33 63.33 0 01-5.5-40.9z"
                />
                <path
                  fill="#587dbd"
                  d="M65.27 52.15h59.52a74.33 74.33 0 01-1.61 33.58 57.44 57.44 0 01-16 26.26c-6.69-5.22-13.41-10.4-20.1-15.62a29.72 29.72 0 0012.66-19.54H65.27c-.01-8.22 0-16.45 0-24.68z"
                />
                <path
                  fill="#319f43"
                  d="M8.75 92.4q10.37-8 20.73-16.08A39.3 39.3 0 0044 95.74a37.16 37.16 0 0014.08 6.08 41.29 41.29 0 0015.1 0 36.16 36.16 0 0013.93-5.5c6.69 5.22 13.41 10.4 20.1 15.62a57.13 57.13 0 01-25.9 13.47 67.6 67.6 0 01-32.36-.35 63 63 0 01-23-11.59A63.73 63.73 0 018.75 92.4z"
                />
              </svg>
            </Button>
            <Button className="rounded-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-500 text-white  hover:shadow-lg hover:scale-105 transition-transform duration-300 font-semibold text-xl">
              Logga in med email
            </Button>
            <Button className="rounded-full px-8 py-4 border-2 border-indigo-600 bg-gradient-to-r from-indigo-200 to-purple-200 text-indigo-600 hover:shadow-md hover:scale-105 transition-transform duration-300 font-semibold text-xl">
              Skapa ett konto
            </Button>
          </div>
        </div>

        {/* Bildsektion med animering */}
        <div className="relative group flex justify-center">
          <div className="absolute inset-1 bg-indigo-200/30 dark:bg-indigo-900/20 rounded-xl blur-3xl group-hover:blur-lg transition-all duration-500 group-hover:scale-105"></div>
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
