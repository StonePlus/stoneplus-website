import { useTranslations } from "next-intl";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

export const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="hero min-h-screen bg-hero bg-cover bg-left-top">
      <div className="h-full w-full bg-gradient-to-t from-black via-black/40 via-25% to-transparent" />
      <div className="hero-content h-screen w-screen max-w-screen-2xl items-end justify-between px-14 pb-16 text-left text-gunmetal-50">
        <div className="flex flex-1 flex-col gap-20">
          <div className="inline-flex w-full items-center justify-between">
            <h1 className="mb-10 max-w-xl text-6xl font-bold">{t("title")}</h1>
          </div>

          <div className="inline-flex w-full items-center justify-between">
            <p className="max-w-xl">{t("description")}</p>

            <button className="btn btn-primary">
              <span>{t("button")}</span> <ArrowRightIcon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
