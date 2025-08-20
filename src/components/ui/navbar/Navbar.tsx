"use client";

import { ModeToggle } from "../darkmode/ModeToggle";
import { Button } from "../darkmode/button";
import {
  Users,
  Building2,
  FileSpreadsheet,
  Globe,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { icon: <Users size={28} />, text: "Talanger" },
    { icon: <FileSpreadsheet size={28} />, text: "Öppna roller" },
    { icon: <Building2 size={28} />, text: "Företag" },
    { icon: <Building2 size={28} />, text: "Rekryterare" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-6 py-3">
      <div className="w-full mx-auto flex justify-between items-center">
        {/* Vänster sida: Hamburger + Logo */}
        <div className="flex items-center">
          {/* Hamburger menu för mobil */}
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

          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/talentbridge.png"
              alt="BridgeTalent logo"
              className="h-10 md:h-12 transition-all hover:scale-105"
            />
          </div>
        </div>

        {/* Mitten: Navigationsknappar - synliga på desktop */}
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

        {/* Höger sida: CTA-knappar + ModeToggle */}
        <div className="flex items-center gap-4">
          {/* CTA-knappar - synliga på desktop, dolda på mobil */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="outline"
              className="rounded-full border-indigo-300 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-900/30 transition-all text-sm md:text-base"
            >
              Logga in
            </Button>
            <Button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white hover:from-indigo-700 hover:to-purple-600 hover:shadow-md transition-all text-sm md:text-base">
              Skapa konto
            </Button>
          </div>

          {/* ModeToggle - alltid synlig */}
          <div className="flex items-center">
            <div className="flex items-center ml-4 lg:ml-6 lg:pl-6 lg:border-l border-gray-400 dark:border-gray-700 gap-2">
              <ModeToggle />
              <Globe className="h-[2rem] w-[2rem] lg:h-[2.2rem] lg:w-[2.2rem] rounded-md bg-white text-black dark:bg-black dark:text-white p-1.5 lg:p-2 hover:bg-gray-100 dark:hover:bg-gray-800" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobilmeny (visas när hamburgaren klickas) */}
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

            {/* CTA-knappar i mobilmenyn */}
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
