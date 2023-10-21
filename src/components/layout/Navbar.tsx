"use client";

import Image from "next/image";
import StoneLogo from "@svg/logo.svg";
import { DynamicHeroIcon } from "../ui/DynamicHeroIcons";

import { useTranslations } from "next-intl";
import { useScrollPosition } from "@/hooks/useScrollPosition";

import { LanguageSwitcher } from "../ui/LanguageSwitcher";

export const Navbar = () => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  const scrollPosition = useScrollPosition();

  const t = useTranslations("Navbar");

  return (
    <div
      className={classNames(
        scrollPosition > 0 ? "bg-gunmetal-950" : "bg-transparent",
        "navbar w-full px-6 xl:px-8 2xl:px-12 fixed z-50 hover:bg-gunmetal-950"
      )}
    >
      <div className="navbar-start">
        <a className="btn btn-ghost hover:bg-transparent normal-case text-2xl text-gunmetal-50 hover:text-white font-bold tracking-tight">
          <Image alt="StonePlus Logo" src={StoneLogo} width={24} height={24} />
          StonePlus
        </a>
      </div>

      {/* Desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="inline-flex flex-row px-1 gap-2 text-base text-gunmetal-50 font-bold uppercase">
          <li className="btn btn-ghost hover:bg-transparent rounded-btn text-gunmetal-50 hover:text-coral-500 font-bold">
            <a>{t("about-us")}</a>
          </li>

          <li className="btn btn-ghost hover:bg-transparent rounded-btn text-gunmetal-50 hover:text-coral-500 font-bold">
            <a>{t("catalogue")}</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <LanguageSwitcher />

        {/* Mobile */}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost hover:bg-transparent lg:hidden text-gunmetal-50 hover:text-coral-500"
          >
            <DynamicHeroIcon
              icon="Bars3BottomRightIcon"
            />
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>História</a>
            </li>

            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
