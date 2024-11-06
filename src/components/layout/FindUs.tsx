import { useTranslations } from "next-intl";

const FindUs: React.FC = () => {
  const t = useTranslations("FindUs");

  return (
    <section>
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=place_id:ChIJbaI8fvpIxwcRPT1-qjYmKz8&zoom=17&maptype=satellite&language=${t("language")}`}
        className="h-80 w-full lg:h-96"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default FindUs;
