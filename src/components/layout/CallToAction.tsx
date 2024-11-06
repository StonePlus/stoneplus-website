import Link from "next/link";

import { useTranslations } from "next-intl";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const CallToAction = () => {
  const t = useTranslations("CallToAction");

  return (
    <section className="bg-secondary">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16 md:px-14 md:py-24">
        <div className="w-full items-center justify-between">
          <h2 className="flex flex-col gap-6 text-secondary-content">
            <span className="text-center text-3xl font-bold md:text-5xl">
              <p>
                Tem <span className="text-accent">um projeto</span> em mente?
              </p>
            </span>
            <span className="text-center text-base">{t("description")}</span>
          </h2>

          <div
            className="tooltip tooltip-open mt-16 w-full"
            data-tip={t("tooltip")}
          >
            <Link
              href="https://wa.me/558532602501"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-block mt-2 justify-between text-base sm:btn-wide"
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
