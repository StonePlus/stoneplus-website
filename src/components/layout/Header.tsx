"use client";

import Link from "next/link";

import { useTranslations } from "next-intl";

import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/24/outline";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import Brandmark from "@svg/Brandmark";

export const Header = () => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  const scrollPosition = useScrollPosition();
  const t = useTranslations("Header");

  return (
    <header
      data-theme="stoneplus"
      className={classNames(
        scrollPosition > 0 ? "bg-neutral" : "bg-transparent",
        "fixed z-50 w-full text-neutral-content duration-200 ease-in-out hover:bg-neutral",
      )}
    >
      <div className="navbar mx-auto max-w-screen-2xl px-4 md:px-14">
        <div className="navbar-start">
          <Link
            href={t("home-link")}
            className="group btn btn-ghost px-0 text-2xl font-bold tracking-tight"
          >
            <Brandmark className="size-6 fill-neutral-content group-hover:fill-secondary" />
            <span className="group-hover:text-secondary">StonePlus</span>
          </Link>
        </div>

        {/* Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="inline-flex flex-row gap-2 px-1 text-base font-bold uppercase">
            <li className="hover: btn btn-ghost rounded-btn font-bold hover:text-secondary">
              <Link
                href={t("catalogue-link")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                {t("catalogue")}
                <ClipboardDocumentListIcon className="size-5" />
              </Link>
            </li>

            <li className="hover: btn btn-ghost rounded-btn font-bold hover:text-secondary">
              <Link
                href={t("call-us-link")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                {t("call-us")}
                <ChatBubbleBottomCenterTextIcon className="size-5" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-2 sm:gap-6 lg:gap-0">
          <LanguageSwitcher />

          {/* Mobile */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="hover: btn btn-ghost pl-2 pr-0 lg:hidden"
            >
              <Bars3BottomRightIcon className="size-6" />
            </label>
            <nav tabIndex={0} className="menu dropdown-content z-[1] w-52">
              <ul className="mt-2 w-full rounded-box bg-neutral bg-opacity-70 p-2 shadow">
                <li>
                  <Link
                    href={t("catalogue-link")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:bg-neutral hover:text-secondary"
                  >
                    <ClipboardDocumentListIcon className="size-5" />
                    {t("catalogue")}
                  </Link>
                </li>
                <li>
                  <Link
                    href={t("call-us-link")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:bg-neutral hover:text-secondary"
                  >
                    <ChatBubbleBottomCenterTextIcon className="size-5" />
                    {t("call-us")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
