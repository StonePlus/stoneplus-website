import { useTranslations } from "next-intl";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="hero min-h-dvh bg-hero bg-left-top">
      <div className="h-full w-full bg-gradient-to-t from-black via-black/40 via-50% to-transparent md:via-25%" />
      <div className="flex h-full w-full max-w-screen-2xl items-end justify-between px-4 py-8 text-left text-neutral-content md:px-14 md:py-16">
        <div className="flex flex-1 flex-col">
          <div className="inline-flex w-full items-center justify-between">
            <h1 className="mb-4 max-w-xl text-4xl font-bold sm:text-5xl md:mb-10 md:text-6xl lg:mb-16">
              {t("title")}
            </h1>
          </div>

          <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-md text-pretty sm:max-w-xs md:max-w-xl">
              {t("description")}
            </p>
            <Link
              href="https://wa.me/558532602501"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-block sm:btn-wide"
            >
              <span>{t("button")}</span> <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
