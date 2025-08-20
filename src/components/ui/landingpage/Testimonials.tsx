

import { AnimatedTestimonials } from "../ui-components/AnimatedTestimonials";

function Testimonials() {
  const testimonialsData = [
    {
      quote:
        "Via BridgeTalent hittade vi vår seniorutvecklare på bara två veckor. Processen var smidig och kandidaterna högkvalitativa.",
      name: "Petra Lindgren",
      designation: "Teknisk chef, Nordic Tech Solutions",
      src: "/images/petra.jpg",
    },
    {
      quote:
        "Som nyexaminerad utvecklare var BridgeTalent ovärderliga för att komma i kontakt med rätt arbetsgivare. Fick mitt första jobb tack vare dem!",
      name: "Marcus Berg",
      designation: "Junior Fullstack-utvecklare",
      src: "/images/marcus.jpg",
    },
    {
      quote:
        "Vi sparade 30% på rekryteringskostnader jämfört med traditionella rekryteringsbyråer. Hög träffsäkerhet på kandidaterna.",
      name: "Darya Fakhir",
      designation: "HR-direktör, CloudInnovate",
      src: "/images/darya.jpg",
    },
    {
      quote:
        "BridgeTalents matchning mellan våra behov och kandidaters kompetens är oslagbar. 5/5 rekryteringar lyckades på första försöket.",
      name: "Anders Nilsson",
      designation: "VP Engineering, Fintech Stockholm",
      src: "/images/anders.jpg",
    },
    {
      quote:
        "Plattformen är intuitiv och sparar oss massor med tid. Speciellt gillar vi möjligheten att direkt se relevanta tekniska färdigheter.",
      name: "Sara Wikström",
      designation: "Rekryteringsansvarig, AI Ventures",
      src: "/images/sara.jpg",
    },
    {
      quote:
        "Från registrering till anställning tog det bara 18 dagar. Snabbaste rekryteringen jag varit med om på 10 år i branschen.",
      name: "Elizeu Dias",
      designation: "CTO, GreenTech Startup",
      src: "/images/elizeu.jpg",
    },
    {
      quote:
        "BridgeTalents algoritmer matchade oss med perfekta kandidater vi inte ens hittat via traditionell sökning. Game changer!",
      name: "Oscar Lundqvist",
      designation: "Grundare, TechScout AB",
      src: "/images/oscar.jpg",
    },
  ];

  return (
    <div className="flex justify-center items-center py-16 bg-gray-50 dark:bg-gray-900 min-h-screen mt-auto">
      {" "}
      <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
    </div>
  );
}

export default Testimonials;
