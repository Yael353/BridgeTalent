"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [currentYear, setCurrentYear] = useState(2023); // Standardvärde

  useEffect(() => {
    setIsMounted(true);
    setCurrentYear(new Date().getFullYear()); 
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <footer className="bg-gradient-to-br bg-red  from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900/20 pt-20 pb-10 px-4">
      {" "}
      <div className="max-w-6xl mx-auto">
        {/* Huvudinnehåll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Kolumn 1 */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
              CareerConnect
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Gemensamt bygger vi framgångsrika karriärer och framgångsrika
              företag
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
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
                href="#"
                className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5"
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
              För Talanger
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  Skapa profil
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  Sök jobb
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  Karriärrådgivning
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  CV-hjälp
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolumn 3 */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              För Företag
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  Publicera jobb
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  Sök talanger
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  Rekryteringsverktyg
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  Prissättning
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolumn 4 */}
          <div className="space-y-5">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Kontakt
            </h4>
            <address className="not-italic text-gray-600 dark:text-gray-300">
              <p className="mb-2">CareerConnect AB</p>
              <p className="mb-2">Sveavägen 123</p>
              <p className="mb-2">113 50 Stockholm</p>
              <p className="mb-2">info@careerconnect.se</p>
              <p>08-123 456 78</p>
            </address>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 mt-8 border-t border-gray-300 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
            © {currentYear} CareerConnect. Alla rättigheter förbehållna.
          </p>
          <div className="flex space-x-6">
            <Link
              href="#"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 text-sm transition-colors duration-300"
            >
              Integritetspolicy
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 text-sm transition-colors duration-300"
            >
              Användarvillkor
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 text-sm transition-colors duration-300"
            >
              Cookiepolicy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
