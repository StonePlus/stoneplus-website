import { useTranslations } from "next-intl";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

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

  return (
    <section className="overflow-hidden bg-base-200">
      <div className="mx-auto flex max-w-screen-2xl flex-col px-14 pb-20 pt-32">
        <h1 className="text-5xl font-bold">{t("title")}</h1>
        <span>
          <div className="divider divider-end mb-12 font-medium text-primary">
            <button className="btn btn-circle btn-secondary">
              <ArrowLeftIcon className="size-4" />
            </button>
            <button className="btn btn-circle btn-secondary">
              <ArrowRightIcon className="size-4" />
            </button>
          </div>
        </span>

        <span className="inline-flex gap-12">
          <div className="carousel gap-12 overflow-visible">
            {keys.map((key) => (
              <div
                key={key}
                className="carousel-item flex flex-col overflow-visible"
              >
                <div className="chat chat-start overflow-visible">
                  <div className="chat-bubble max-w-xs bg-base-100 p-6 text-base-content shadow-2xl">
                    {t(`${key}.feedback`)}
                  </div>
                </div>
                <span className="mt-4 inline-flex items-center justify-start gap-4">
                  <div className="avatar">
                    <div className="size-12 rounded-full">
                      <img
                        alt="Tailwind CSS chat bubble component"
                        src={t(`${key}.photo`)}
                      />
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
        </span>
      </div>
    </section>
  );
};
