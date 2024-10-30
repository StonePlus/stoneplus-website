import Link from "next/link";

import { useTranslations } from "next-intl";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const CallToAction = () => {
  const t = useTranslations("CallToAction");

  return (
    <section className="bg-primary">
      <div className="mx-auto w-full max-w-screen-2xl px-4 md:px-14 py-8 md:py-20">
        <div className="w-full items-center justify-between md:inline-flex">
          <h2 className="flex flex-col gap-6 font-bold text-primary-content">
            <span className="text-3xl md:text-5xl">{t("title")}</span>
            <span className="text-xl">{t("description")}</span>
          </h2>

          <div className="tooltip md:tooltip-open" data-tip={t("tooltip")}>
            <Link
              href="https://wa.me/558532602501"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wide mt-2 justify-between"
            >
              <span>{t("button")}</span>
              <ArrowRightIcon className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
