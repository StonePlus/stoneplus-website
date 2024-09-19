// External dependencies
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";

// Hooks
import { useTranslations } from "next-intl";

// SVG assets
import StoneBrand from "@svg/logo-brand.svg";

// Local components and utilities
import { Links } from "../ui/Links";
import { IconName } from "../ui/DynamicHeroIcons";
import Brandmark from "../svg/Brandmark";
import SocialLinks from "../ui/SocialLinks";

type LinkData = {
  href: Url;
  label: string;
  icon: IconName;
};

export const Footer = () => {
  const t = useTranslations("Footer");

  const linksData: LinkData[] = [
    {
      href: "#",
      label: `${t("SiteMap.MenuItems.AboutUs")}`,
      icon: "ArrowTopRightOnSquareIcon",
    },
    {
      href: "#",
      label: `${t("SiteMap.MenuItems.FrequentQuestions")}`,
      icon: "ArrowTopRightOnSquareIcon",
    },
    {
      href: "#",
      label: `${t("SiteMap.MenuItems.ProductCatalog")}`,
      icon: "DocumentArrowDownIcon",
    },
    {
      href: "#",
      label: `${t("SiteMap.MenuItems.PrivacyPolicies")}`,
      icon: "BookOpenIcon",
    },
  ];

  return (
    <footer className="bg-gunmetal-950 xl:py-6">
      <div className="footer mx-auto w-screen max-w-screen-2xl justify-between gap-x-10 px-14 py-10 text-gunmetal-300 xl:gap-x-14">
        <section className="grid w-full min-w-[220px] md:hidden lg:grid lg:justify-center">
          <h4 className="mb-2 flex flex-row items-center text-3xl font-bold normal-case">
            <Image alt="StonePlus" src={StoneBrand} height={40} />
          </h4>
          <p className="max-w-sm font-light text-gunmetal-200">
            {t("AboutUs")}
          </p>
        </section>

        <section className="w-full place-items-start whitespace-nowrap lg:justify-center">
          <h5 className="mb-2 w-full whitespace-nowrap border-b border-gunmetal-800 pb-2 text-lg font-bold text-gunmetal-50">
            {t("SiteMap.Title")}
          </h5>
          <nav>
            <ul className="grid place-items-start gap-2">
              {linksData.map((link, index) => (
                <li key={index}>
                  <Links href={link.href} label={link.label} icon={link.icon} />
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section className="w-full place-items-start whitespace-nowrap lg:justify-center">
          <h5 className="mb-2 w-full whitespace-nowrap border-b border-gunmetal-800 pb-2 text-lg font-bold text-gunmetal-50">
            {t("Address.Title")}
          </h5>
          <address className="whitespace-nowrap font-light not-italic">
            {t("Address.MenuItems.AddressInfo1")} <br />
            {t("Address.MenuItems.AddressInfo2")} <br />
            {t("Address.MenuItems.AddressInfo3")}
          </address>
          <Links
            href="#"
            label={`${t("Address.MenuItems.AddressLink")}`}
            icon="MapIcon"
          />
        </section>

        <section className="w-full place-items-start whitespace-nowrap lg:justify-center">
          <h5 className="mb-2 w-full whitespace-nowrap border-b border-gunmetal-800 pb-2 text-lg font-bold text-gunmetal-50">
            {t("CostumerService.Title")}
          </h5>
          <address className="whitespace-nowrap font-light not-italic">
            {t("CostumerService.MenuItems.ContactInfo1")} <br />
            {t("CostumerService.MenuItems.ContactInfo2")} <br />
            {t("CostumerService.MenuItems.ContactInfo3")}
          </address>

          <Links
            href="https://wa.me/558532602501"
            target="_blank"
            rel="noopener noreferrer"
            label={`${t("CostumerService.MenuItems.ContactLink")}`}
            icon="PhoneArrowUpRightIcon"
          />
        </section>
      </div>

      <div className="footer mx-auto w-screen max-w-screen-2xl px-14 pb-4 text-gunmetal-200">
        <div className="grid-flow-col items-center">
          <Brandmark className="grid size-5 lg:hidden" />
          <small className="text-sm">
            &copy; 2024 StonePlus - Concrete Design
          </small>
        </div>

        <nav className="md:place-self-center md:justify-self-end">
          <SocialLinks />
        </nav>
      </div>
    </footer>
  );
};
