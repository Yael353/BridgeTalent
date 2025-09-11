"use client";

import { useTranslations } from "next-intl";
import { ModeToggle } from "../darkmode/ModeToggle";
import { Button } from "../darkmode/button";
import { Users, Building2, FileSpreadsheet, Menu, X } from "lucide-react";
import { useState } from "react";
import LocalSwithcer from "./LocalSwithcer";
import { Link } from "@/i18n/routing";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navbar");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getNavItems = () => [
    { icon: <Users size={28} />, text: t("talanger") },
    { icon: <FileSpreadsheet size={28} />, text: t("roller") },
    { icon: <Building2 size={28} />, text: t("employer") },
    { icon: <Building2 size={28} />, text: t("rekryterare") },
  ];

  const navItems = getNavItems();

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from:primary to:secondary backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-6 py-3">
      <div className="w-full mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="lg:hidden mr-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-600 dark:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          <div className="flex items-center">
            <Link href={"/"}>
              <img
                src="/images/talentbridge.png"
                alt="BridgeTalent logo"
                className="h-12 md:h-25 transition-all hover:scale-105"
              />
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center md:pl-25 gap-3 md:gap-8 flex-1 mx-8">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex flex-col h-auto gap-2 p-4 text-lg font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-300 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 rounded-lg transition-all"
            >
              <span className="text-indigo-500 dark:text-indigo-400">
                {item.icon}
              </span>
              <span className="text-base md:text-lg">{item.text}</span>
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2">
            <Link href={"/login"}>
              <Button
                variant="outline"
                className="rounded-full border-indigo-300 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-900/30 transition-all text-sm md:text-base"
              >
                {t("loggaIn")}
              </Button>
            </Link>
            <Button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white hover:from-indigo-700 hover:to-purple-600 hover:shadow-md transition-all text-sm md:text-base">
              {t("registrera")}
            </Button>
          </div>

          <div className="flex items-center">
            <div className="flex items-center ml-4 lg:ml-6 lg:pl-6 lg:border-l border-gray-400 dark:border-gray-700 gap-2">
              <ModeToggle />
              <LocalSwithcer />
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-3 py-4">
          <div className="flex flex-col space-y-4 px-4">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="flex items-center justify-start gap-3 p-3 text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-300 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 rounded-lg transition-all"
              >
                <span className="text-indigo-500 dark:text-indigo-400">
                  {item.icon}
                </span>
                <span className="text-base">{item.text}</span>
              </Button>
            ))}

            <div className="flex flex-col gap-2 pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
              <Button
                variant="outline"
                className="w-full rounded-full border-indigo-300 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-900/30 transition-all"
              >
                Logga in
              </Button>
              <Button className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white hover:from-indigo-700 hover:to-purple-600 hover:shadow-md transition-all">
                Skapa konto
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
