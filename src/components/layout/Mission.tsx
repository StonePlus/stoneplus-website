import { useTranslations } from "next-intl";

export default function Mission() {
  const t = useTranslations("Mission");

  return (
    <section>
      <div className="relative mx-auto flex w-full max-w-screen-xl flex-col gap-16 px-4 py-16 md:gap-12 md:px-14 md:py-24 lg:gap-24">
        <div className="flex flex-col">
          <div className="badge badge-accent mb-4 p-3 text-sm font-bold uppercase md:mb-8">
            {t("badge")}
          </div>

          <div className="flex flex-col justify-between lg:flex-row lg:gap-20">
            <h2 className="flex max-w-lg text-pretty text-3xl font-bold sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
            <div className="divider divider-start mb-6 mt-2 text-primary sm:mb-14" />
            <p className="md:w-1/2 lg:text-lg">{t("description")}</p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 items-center gap-8 md:mx-auto md:w-fit md:grid-cols-2 lg:flex lg:w-full lg:justify-between">
          <div className="card m-auto h-full w-fit max-w-sm bg-base-100 shadow-xl md:aspect-square md:max-w-xs lg:aspect-square">
            <div className="card-body">
              <h2 className="text-bold divider divider-start card-title divider-secondary text-xl uppercase">
                {t("vision-title")}
              </h2>
              <p className="font-light">{t("vision-description")}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>

          <div className="card m-auto h-full w-fit max-w-sm bg-base-100 shadow-xl md:aspect-square md:max-w-xs lg:aspect-square">
            <div className="card-body">
              <h2 className="text-bold divider divider-start card-title divider-secondary text-xl uppercase">
                {t("mission-title")}
              </h2>
              <p className="font-light">{t("mission-description")}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>

          <div className="card m-auto h-full w-fit max-w-sm bg-base-100 shadow-xl md:aspect-square md:max-w-xs lg:aspect-square">
            <div className="card-body">
              <h2 className="text-bold divider divider-start card-title divider-secondary text-xl uppercase">
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
}
