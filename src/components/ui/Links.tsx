import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

import { DynamicHeroIcon, IconName } from "./DynamicHeroIcons";

interface LinksProps {
  href: Url;
  linkType?: IconName;
  label: string;
}

export const Links: React.FC<LinksProps> = ({ label, linkType, href }) => {
  return (
    <Link
      className="flex items-center gap-2 whitespace-nowrap hover:text-gunmetal-50 stroke-gunmetal-300 hover:stroke-gunmetal-50 "
      href={href}
    >
      {label}
      {linkType && <DynamicHeroIcon icon={linkType} />}
    </Link>
  );
};
