"use client";

// External dependencies
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

// Hooks
import { useTranslations } from "next-intl";

// SVG assets
import StoneLogo from "@svg/logo.svg";
import StoneBrand from "@svg/logo-brand.svg";

// Local components and utilities
import { Links } from "../ui/Links";
import { IconName } from "../ui/DynamicHeroIcons";

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
      <div className="footer justify-between gap-x-10 xl:gap-x-14 py-10 px-10 xl:px-4 max-w-screen-2xl mx-auto w-screen text-gunmetal-300">
        <section className="grid md:hidden lg:grid min-w-[220px] lg:justify-center w-full">
          <h4 className="flex flex-row items-center mb-2 font-bold normal-case text-3xl">
            <Image alt="StonePlus" src={StoneBrand} height={40} />
          </h4>
          <p className="font-light max-w-sm text-gunmetal-200">
            {t("AboutUs")}
          </p>
        </section>

        <section className="place-items-start lg:justify-center w-full whitespace-nowrap">
          <h5 className="w-full pb-2 mb-2 font-bold text-lg border-b text-gunmetal-50 border-gunmetal-800 whitespace-nowrap">
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

        <section className="place-items-start lg:justify-center w-full whitespace-nowrap">
          <h5 className="w-full pb-2 mb-2 font-bold text-lg text-gunmetal-50 border-b border-gunmetal-800 whitespace-nowrap">
            {t("Address.Title")}
          </h5>
          <address className="font-light whitespace-nowrap not-italic">
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

        <section className="place-items-start lg:justify-center w-full whitespace-nowrap">
          <h5 className="w-full pb-2 mb-2 font-bold text-lg text-gunmetal-50 border-b border-gunmetal-800 whitespace-nowrap">
            {t("CostumerService.Title")}
          </h5>
          <address className="font-light whitespace-nowrap not-italic">
            {t("CostumerService.MenuItems.ContactInfo1")} <br />
            {t("CostumerService.MenuItems.ContactInfo2")} <br />
            {t("CostumerService.MenuItems.ContactInfo3")}
          </address>

          <Links
            href="#"
            label={`${t("CostumerService.MenuItems.ContactLink")}`}
            icon="PhoneArrowUpRightIcon"
          />
        </section>
      </div>

      <div className="footer pb-4 px-10 xl:px-4 max-w-screen-2xl mx-auto w-screen text-gunmetal-200">
        <div className="items-center grid-flow-col">
          <Image
            className="grid lg:hidden"
            alt="StonePlus Logo"
            src={StoneLogo}
            width={20}
            height={20}
          />
          <small className="text-sm">
            &copy; 2023 StonePlus - Concrete Design
          </small>
        </div>

        <nav className="md:place-self-center md:justify-self-end">
          <ul className="grid grid-flow-col gap-4">
            <li>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </Link>
            </li>

            <li>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </Link>
            </li>

            <li>
              <Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
