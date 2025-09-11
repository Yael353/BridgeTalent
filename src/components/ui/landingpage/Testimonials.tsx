import { useTranslations } from "next-intl";
import { AnimatedTestimonials } from "../ui-components/AnimatedTestimonials";

function Testimonials() {
  const t = useTranslations("Testimonials");
  const testimonialsData = [
    {
      quote: t("testimonials.petra.quote"),
      name: t("testimonials.petra.name"),
      designation: t("testimonials.petra.designation"),
      src: "/images/petra.jpg",
    },
    {
      quote: t("testimonials.marcus.quote"),
      name: t("testimonials.marcus.name"),
      designation: t("testimonials.marcus.designation"),
      src: "/images/marcus.jpg",
    },
    {
      quote: t("testimonials.darya.quote"),
      name: t("testimonials.darya.name"),
      designation: t("testimonials.darya.designation"),
      src: "/images/darya.jpg",
    },
    {
      quote: t("testimonials.anders.quote"),
      name: t("testimonials.anders.name"),
      designation: t("testimonials.anders.designation"),
      src: "/images/anders.jpg",
    },
    {
      quote: t("testimonials.sara.quote"),
      name: t("testimonials.sara.name"),
      designation: t("testimonials.sara.designation"),
      src: "/images/sara.jpg",
    },
    {
      quote: t("testimonials.elizeu.quote"),
      name: t("testimonials.elizeu.name"),
      designation: t("testimonials.elizeu.designation"),
      src: "/images/elizeu.jpg",
    },
    {
      quote: t("testimonials.oscar.quote"),
      name: t("testimonials.oscar.name"),
      designation: t("testimonials.oscar.designation"),
      src: "/images/oscar.jpg",
    },
  ];

  return (
    <div className="flex flex-col justify-between  items-center py-16 bg-gradient-to-r from-primary to-secondary/20 min-h-screen mt-auto">
      <div className="space-y-6 text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          {t("title")}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400 dark:from-blue-400 dark:to-sky-300">
            {t("title2")}
          </span>
        </h2>
        <div>
          <p className="text-center  text-2xl md:text-3xl text-muted-foreground font-medium leading-relaxed max-w-4xl mx-auto md:mx-0">
            {t("subtitle")}{" "}
          </p>
        </div>
      </div>
      <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />{" "}
      <div></div>
    </div>
  );
}

export default Testimonials;
