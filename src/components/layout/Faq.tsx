import { useTranslations } from "next-intl";

const Faq: React.FC = () => {
  const t = useTranslations("Faq");
  const keys = [
    "requestQuote",
    "shippingBrazil",
    "deliveryTime",
    "sampleRequest",
    "bulkOrders",
    "warranty",
    "paymentOptions",
  ] as const;

  return (
    <section className="bg-base-100">
      <div className="mx-auto flex max-w-screen-2xl flex-col px-14 pb-20 pt-32">
        <div className="badge badge-secondary mb-8 p-3 text-xs font-bold uppercase">
          {t("badge")}
        </div>
        <h1 className="text-5xl font-bold">{t("title")}</h1>
        <div className="divider divider-start mb-12 font-medium text-primary" />
        <ul className="flex flex-col items-start gap-3">
          {keys.map((key) => (
            <li
              key={key}
              className="collapse collapse-arrow max-w-4xl bg-base-200 bg-opacity-60"
            >
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-lg font-semibold">
                {t(`${key}.title`)}
              </div>
              <div className="collapse-content">
                <p className="text-pretty pr-20 text-start">
                  {t(`${key}.description`)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
