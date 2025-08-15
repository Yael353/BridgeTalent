"use client";

import Hero from "./Hero";
import Navbar from "../navbar/Navbar";
import Body from "./Body";
import Testimonials from "./Testimonials";
import BodyTwo from "./BodyTwo";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Body />
      <BodyTwo/>
      <Testimonials />
    </div>
  );
}

export default LandingPage;
