"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary/20 md:pt-34 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Huvudinnehåll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Kolumn 1 */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold gradient-text">
              {t("companyName")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("tagline")}
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.facebook.com/login.php/"
                className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
              >
                <svg
                  className="md:w-10 md:h-10 hover:scale-105 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://x.com/"
                className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
                aria-label="Följ oss på X"
              >
                <svg
                  className="md:w-10 md:h-10 hover:scale-105 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
              >
                <svg
                  className="md:w-10 md:h-10 hover:scale-105 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Kolumn 2 */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t("forTalents")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {t("talentLinks.createProfile")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {t("talentLinks.searchJobs")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {t("talentLinks.careerAdvice")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {t("talentLinks.cvHelp")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolumn 3 */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t("forCompanies")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {t("companyLinks.postJobs")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {t("companyLinks.findTalents")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {t("companyLinks.recruitmentTools")}
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  {t("companyLinks.pricing")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolumn 4 */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              {t("contact")}
            </h4>
            <address className="not-italic text-gray-600 dark:text-gray-300">
              <p className="mb-2">{t("address.company")}</p>
              <p className="mb-2">{t("address.street")}</p>
              <p className="mb-2">{t("address.postalCode")}</p>
              <p className="mb-2">{t("address.email")}</p>
              <p>{t("address.phone")}</p>
            </address>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 mt-8 border-t border-gray-300 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
            {t("bottom.copyright")} {currentYear}
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 text-sm transition-colors duration-300"
            >
              {t("bottom.privacyPolicy")}
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 text-sm transition-colors duration-300"
            >
              {t("bottom.termsOfService")}
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 text-sm transition-colors duration-300"
            >
              {t("bottom.cookiePolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
