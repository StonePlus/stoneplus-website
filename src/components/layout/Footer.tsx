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

export default function Footer() {
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
    <footer className="bg-gradient-to-b from-neutral from-75% to-[#0f2f42]">
      <div className="footer max-w-screen-xl justify-between gap-x-10 px-4 py-12 text-base-300 md:mx-auto md:px-14 md:py-16 xl:gap-x-14">
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
            href="https://maps.app.goo.gl/xXJxCxLep13Pd3cC9"
            target="_blank"
            rel="noopener noreferrer"
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

      <div className="footer max-w-screen-xl gap-0 text-base-200 md:mx-auto">
        <SocialLinks className="md:order-last md:justify-items-end" />

        <small className="w-full grid-flow-col items-center justify-center border-t border-base-300 border-opacity-10 py-5 md:h-full md:justify-start md:border-b-0 md:px-14 md:py-4">
          <Brandmark className="grid size-5 fill-base-200 md:w-fit lg:hidden" />
          <span className="text-sm">
            &copy; {new Date().getFullYear()} StonePlus - Concrete Design
          </span>
        </small>
      </div>
    </footer>
  );
}
