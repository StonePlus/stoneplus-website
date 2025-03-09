import { useTranslations } from "next-intl";

export default function Faq() {
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
    <section className="relative">
      <div className="mx-auto flex max-w-screen-xl flex-col px-4 py-16 md:px-14 md:py-24">
        <div className="badge mb-4 bg-[#FEDC00] p-3 text-sm font-bold uppercase text-neutral md:mb-8">
          {t("badge")}
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          {t("title")}
        </h1>
        <div className="divider divider-secondary mb-6 mt-2 border-primary text-primary sm:mb-14" />
        <ul className="flex flex-col items-center gap-3">
          {keys.map((key) => (
            <li
              key={key}
              className="collapse collapse-arrow max-w-4xl bg-base-100 drop-shadow sm:drop-shadow-md"
            >
              <input
                type="radio"
                name="my-accordion-2"
                className="peer/draft"
              />
              <div className="collapse-title font-semibold peer-checked/draft:font-bold sm:text-lg">
                {t(`${key}.title`)}
              </div>
              <div className="collapse-content">
                <p className="text-pretty text-start sm:pr-20">
                  {t(`${key}.description`)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
