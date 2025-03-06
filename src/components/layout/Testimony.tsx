"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import ArrowButton from "../ui/ArrowButton";

// Helper function to handle title word splitting and margin on the last word
const renderTitleWithSpacing = (title: string) => {
  return title.split(" ").map((word, index, arr) => (
    <span
      key={index} // Add key prop with unique value (index in this case)
      className={index === arr.length - 1 ? "inline-block pr-24 md:pr-32" : ""}
    >
      {word}{" "}
    </span>
  ));
};

export const Testimony = () => {
  const t = useTranslations("Testimony");
  const keys = [
    "testimony-one",
    "testimony-two",
    "testimony-three",
    "testimony-four",
    "testimony-five",
    "testimony-six",
  ] as const;

  // State to track current slide index and items per page
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Effect hook to adjust items per page based on window width
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2); // Tablet
      } else {
        setItemsPerPage(3); // Desktop
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Calculate the maximum index based on number of items per page
  const maxIndex = Math.ceil(keys.length / itemsPerPage) - 1;

  // Function to move to the next slide
  const nextSlide = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 md:px-14 md:py-24">
        {/* Badge */}
        <div className="badge mb-4 bg-[#FEDC00] p-3 text-sm font-bold uppercase text-neutral md:mb-8">
          {t("badge")}
        </div>

        {/* Title with dynamic spacing on the last word */}
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          {renderTitleWithSpacing(t("title"))}
        </h1>

        {/* Arrow Buttons for the carousel */}
        <div className="divider divider-end mb-6 mt-2 gap-1 font-medium text-primary sm:mb-14 lg:mb-14">
          <ArrowButton direction="left" onClick={prevSlide} />
          <ArrowButton direction="right" onClick={nextSlide} />
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {keys.map((key) => (
              <div
                key={key}
                className="w-full flex-shrink-0 items-center justify-center pr-8 md:w-1/2 lg:w-1/3"
              >
                <div className="flex flex-col items-center justify-center">
                  <div className="chat chat-start">
                    <div className="chat-bubble max-w-xs bg-base-100 p-6 text-base-content shadow-xl">
                      {t(`${key}.feedback`)}
                    </div>
                  </div>
                  <span className="mt-4 inline-flex items-center justify-start gap-4">
                    <div className="avatar">
                      <div className="size-12 rounded-full">
                        <img alt="Foto" src={t(`${key}.photo`)} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-bold">{t(`${key}.name`)}</p>
                      <small className="font-light">
                        {t(`${key}.description`)}
                      </small>
                    </div>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
