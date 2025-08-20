

import Hero from "./Hero";
import Navbar from "../navbar/Navbar";
import Body from "./Body";
import Testimonials from "./Testimonials";
import BodyTwo from "./BodyTwo";
import dynamic from "next/dynamic";
// import { useTranslations } from "next-intl";

// Ladda Footer dynamiskt utan SSR
const Footer = dynamic(() => import("./Footer"), {
  ssr: false,
});

function LandingPage() {

  
  return (
    <div className="h-screen">
      <Navbar />
      <Hero />
      <Body />
      <BodyTwo />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;
