import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";

import { DynamicHeroIcon, IconName } from "./DynamicHeroIcons";

interface LinksProps {
  href: Url;
  label: string;
  target?: string;
  rel?: string;
  icon?: IconName;
}

/**
 * Component that displays a dynamic link with optional icon from HeroIcons.
 * @param {Url} href - The path or URL to navigate to. It can also be an object.
 * @param {string} label - Text to be displayed as your link label.
 * @param {IconName} [icon] - Optional icon to be displayed. Refer to the complete list of available icons at {@link https://unpkg.com/browse/@heroicons/react@2.0.18/24/outline/}.
 * @returns {React.FC} The rendered HeroIcon.
 */

export const Links: React.FC<LinksProps> = ({
  label,
  icon,
  href,
  target,
  rel,
}) => {
  return (
    <Link
      className="flex items-center gap-2 whitespace-nowrap stroke-gunmetal-300 hover:stroke-gunmetal-50 hover:text-gunmetal-50"
      href={href}
      target={target}
      rel={rel}
    >
      {label}
      {icon && <DynamicHeroIcon icon={icon} />}
    </Link>
  );
};
