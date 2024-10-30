import { useTranslations } from "next-intl";

export const Mission = () => {
  const t = useTranslations("Mission");

  return (
    <section className="bg-base-200">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-8 md:gap-12 px-4 py-12 md:px-14 md:py-16 lg:gap-24">
        <div className="flex flex-col items-center text-center">
          <div className="badge badge-secondary mb-4 p-3 text-sm font-bold uppercase md:mb-8">
            {t("badge")}
          </div>

          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-20">
            <h2 className="flex max-w-lg text-pretty text-4xl font-bold sm:text-5xl md:text-6xl lg:text-3xl">
              {t("title")}
            </h2>
            <p className="text-lg md:w-1/2">{t("description")}</p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 items-center gap-8 md:mx-auto md:w-fit md:grid-cols-2 lg:grid-cols-3">
          <div className="card m-auto h-full w-fit max-w-sm bg-base-100 shadow-xl md:aspect-square md:max-w-xs lg:aspect-auto">
            <div className="card-body">
              <h2 className="text-bold divider divider-start card-title text-xl uppercase">
                {t("vision-title")}
              </h2>
              <p className="font-light">{t("vision-description")}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>

          <div className="card m-auto h-full w-fit max-w-sm bg-base-100 shadow-xl md:aspect-square md:max-w-xs lg:aspect-auto">
            <div className="card-body">
              <h2 className="text-bold divider divider-start card-title text-xl uppercase">
                {t("mission-title")}
              </h2>
              <p className="font-light">{t("mission-description")}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>

          <div className="card m-auto h-full w-fit max-w-sm bg-base-100 shadow-xl md:aspect-square md:max-w-xs lg:aspect-auto">
            <div className="card-body">
              <h2 className="text-bold divider divider-start card-title text-xl uppercase">
                {t("values-title")}
              </h2>
              <p className="font-light">{t("values-description")}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
