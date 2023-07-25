"use client";

import Image from "next/image";
import { useScrollPosition } from "@/hooks/useScrollPosition";

import StoneLogo from "@svg/logo.svg";
import {
  GlobeAltIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";

export const Navbar = () => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(" ");
  }
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={classNames(
        scrollPosition > 0 ? "bg-gunmetal-950" : "bg-transparent",
        "navbar w-full 2xl:px-12 fixed z-50 hover:bg-gunmetal-950"
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
            <a>História</a>
          </li>

          <li className="btn btn-ghost hover:bg-transparent rounded-btn text-gunmetal-50 hover:text-coral-500 font-bold">
            <a>Catálago</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost hover:bg-transparent text-gunmetal-50 hover:text-coral-500 font-bold"
          >
            <GlobeAltIcon className="h-6 w-6 text-inherit hover:text-inherit" />
            PT
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
          >
            <li>
              <a className="active">Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>

        {/* Mobile */}
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost hover:bg-transparent lg:hidden text-gunmetal-50 hover:text-coral-500"
          >
            <Bars3BottomRightIcon className="h-6 w-6 text-inherit hover:text-inherit stroke-2 stroke-gunmetal-50 hover:stroke-coral-500" />
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
