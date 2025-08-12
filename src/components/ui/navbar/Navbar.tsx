import React from "react";
import { ModeToggle } from "../darkmode/ModeToggle";
import { Button } from "../darkmode/button";

function Navbar() {
  return (
    <div className="p-4">
      <div className="flex justify-end items-center">
        <ModeToggle />
      </div>
    </div>
  );
}

export default Navbar;
