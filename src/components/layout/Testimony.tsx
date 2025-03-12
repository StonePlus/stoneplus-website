"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

import ArrowButton from "../ui/ArrowButton";
import TestimonyCard from "../ui/TestimonyCard";

const renderTitleWithSpacing = (title: string) => {
  return title.split(" ").map((word, index, arr) => (
    <span
      key={index}
      className={index === arr.length - 1 ? "inline-block pr-24 md:pr-32" : ""}
    >
      {word}{" "}
    </span>
  ));
};

export default function Testimony() {
  const t = useTranslations("Testimony");

  const keys = [
    "testimony-one",
    "testimony-two",
    "testimony-three",
    "testimony-four",
    "testimony-five",
    "testimony-six",
  ] as const;

  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [currentSliderIndex, setCurrentSliderIndex] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const groupedKeys = [];
  for (let i = 0; i < keys.length; i += itemsPerPage) {
    groupedKeys.push(keys.slice(i, i + itemsPerPage));
  }

  const totalSlides = groupedKeys.length;

  const prevSlide =
    currentSliderIndex === 0 ? totalSlides - 1 : currentSliderIndex - 1;
  const nextSlide =
    currentSliderIndex === totalSlides - 1 ? 0 : currentSliderIndex + 1;

  const handlePrevClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setCurrentSliderIndex(prevSlide);
  };

  const handleNextClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setCurrentSliderIndex(nextSlide);
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 md:px-14 md:py-24">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="badge mb-4 bg-[#FEDC00] p-3 text-sm font-bold uppercase text-neutral">
              {t("badge")}
            </div>

            <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              {renderTitleWithSpacing(t("title"))}
            </h3>

            <div className="divider divider-end mb-6 mt-0 gap-1 font-medium text-primary sm:mb-12">
              <ArrowButton direction="left" onClick={handlePrevClick} />
              <ArrowButton direction="right" onClick={handleNextClick} />
            </div>

            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentSliderIndex * 100}%)`,
                }}
              >
                {groupedKeys.map((group, groupIndex) => (
                  <div
                    key={groupIndex}
                    className="flex min-w-full justify-center gap-4"
                  >
                    {group.map((key, index) => (
                      <TestimonyCard
                        key={index}
                        testimony={t(`${key}.feedback`)}
                        avatar={t(`${key}.photo`)}
                        name={t(`${key}.name`)}
                        role={t(`${key}.description`)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
