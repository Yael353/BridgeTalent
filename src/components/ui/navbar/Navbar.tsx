"use client";

import { ModeToggle } from "../darkmode/ModeToggle";
import { Button } from "../darkmode/button";
import { Users, Building2, FileSpreadsheet } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 px-6 py-3">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/talentbridge.png"
            alt="BridgeTalent logo"
            className="h-10 md:h-12 transition-all hover:scale-105"
          />
        </div>

        {/* Navigationsknappar */}
        <div className="flex justify-center gap-1 md:gap-4">
          {[
            { icon: <Users size={20} />, text: "Talanger" },
            { icon: <FileSpreadsheet size={20} />, text: "Öppna roller" },
            { icon: <Building2 size={20} />, text: "Företag" },
            { icon: <Building2 size={20} />, text: "Rekryterare" },
          ].map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="flex flex-col h-auto gap-1 p-2 text-sm font-medium text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-300 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20 rounded-lg transition-all"
            >
              <span className="text-indigo-500 dark:text-indigo-400">
                {item.icon}
              </span>
              <span>{item.text}</span>
            </Button>
          ))}
        </div>

        {/* Högerdel - CTA-knappar */}
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="rounded-full border-indigo-300 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-300 dark:hover:bg-indigo-900/30 transition-all"
            >
              Logga in
            </Button>
            <Button className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white hover:from-indigo-700 hover:to-purple-600 hover:shadow-md transition-all">
              Skapa konto
            </Button>
          </div>

          {/* ModeToggle med extra marginal */}
          <div className="ml-6 pl-6 border-l border-gray-400 dark:border-gray-700">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
