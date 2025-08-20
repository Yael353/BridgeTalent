"use client";

import LandingPage from "@/components/ui/landingpage/LandingPage";


// This is the main entry point for the home page
// It uses the LandingPage component to render the content
// and utilizes the useTransition hook for internationalization support

export default function Home() {
  
  return (
    <div>
      <LandingPage />
    </div>
  );
}
