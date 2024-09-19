import { useTranslations } from "next-intl";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const CallToAction = () => {
  const t = useTranslations("CallToAction");

  return (
    <section className="bg-primary">
      <div className="mx-auto w-full max-w-screen-2xl px-14 py-20">
        <div className="inline-flex w-full items-center justify-between">
          <h2 className="flex flex-col gap-6 text-5xl font-bold text-primary-content">
            <span>{t("title")}</span>
            <span>{t("description")}</span>
          </h2>

          <div className="tooltip tooltip-open" data-tip={t("tooltip")}>
            <button className="btn btn-wide mt-2 justify-between">
              <span>{t("button")}</span>
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
