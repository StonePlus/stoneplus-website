import { useTranslations } from "next-intl";

import Link from 'next-intl/link';
import Image from "next/image";

import EnFlag from "@img/icons/flags/en.png";
import PtBrFlag from "@img/icons/flags/pt-br.png";

import { DynamicHeroIcon } from "../ui/DynamicHeroIcons";

export const LanguageSwitcher = () => {
  const t = useTranslations("Language");

  return (
    <div className="dropdown dropdown-end">
      <label
        tabIndex={0}
        className="btn btn-ghost px-0 hover:bg-transparent text-gunmetal-50 hover:text-coral-500 font-bold"
      >
        <DynamicHeroIcon
          icon="GlobeAltIcon"
          className="h-6 w-6 text-inherit hover:text-inherit"
        />
        {t("iso-code")}
      </label>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
      >
        <li>
          <Link href="/" locale="pt-br" /* className="active" */>
            <Image
              alt="Brazilian flag icon."
              src={PtBrFlag}
              className="h-5 w-5"
            />
            Português &#40;Brasil&#41;
          </Link>
        </li>
        <li>
          <Link href="/" locale="en">
            <Image
              alt="American flag icon."
              src={EnFlag}
              className="h-5 w-5"
            />
            English &#40;USA&#41;
          </Link>
        </li>
      </ul>
    </div>
  );
};
