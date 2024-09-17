import { useTranslations } from "next-intl";

export const Mission = () => {
  const t = useTranslations("Mission");

  return (
    <section className="bg-base-200">
      <div className="mx-auto flex w-screen max-w-screen-2xl flex-col gap-16 px-14 py-32 sm:gap-24">
        <div>
          <div className="badge badge-secondary mb-8 p-3 text-xs font-bold uppercase">
            {t("badge")}
          </div>
          <div className="inline-flex items-center justify-between gap-20">
            <h2 className="flex max-w-lg flex-col gap-y-2 text-pretty text-3xl font-bold sm:text-5xl">
              {t("title")}
            </h2>

            <p className="w-1/2 text-lg">{t("description")}</p>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-3 gap-16">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-bold card-title text-lg uppercase">
                {t("vision-title")}
              </h2>
              <p className="font-light">{t("vision-description")}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-bold card-title text-lg uppercase">
                {t("mission-title")}
              </h2>
              <p className="font-light">{t("mission-description")}</p>
              <div className="card-actions justify-end"></div>
            </div>
          </div>

          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="text-bold card-title text-lg uppercase">
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
