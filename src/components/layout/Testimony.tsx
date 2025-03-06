"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import ArrowButton from "../ui/ArrowButton";

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

  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

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

  const maxIndex = Math.ceil(keys.length / itemsPerPage) - 1;

  const nextSlide = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-screen-xl px-4 py-16 md:px-14 md:py-24">
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          {t("title")}
        </h1>
        <span>
          <div className="divider divider-end mb-6 mt-2 font-medium text-primary sm:mb-14">
            <ArrowButton direction="left" onClick={prevSlide} />
            <ArrowButton direction="right" onClick={nextSlide} />
          </div>
        </span>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {keys.map((key) => (
              <div
                key={key}
                className="w-full flex-shrink-0 p-4 md:w-1/2 lg:w-1/3"
              >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
