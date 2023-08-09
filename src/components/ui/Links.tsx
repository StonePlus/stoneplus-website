import Link from "next/link";
import { DynamicHeroIcon , IconName } from "./DynamicHeroIcons";

interface LinksProps {
    linkType: IconName;
    linkLabel: string;
  }

export const Links: React.FC<LinksProps> = ({ linkLabel , linkType }) => {
  return (
    <Link
      className="flex items-center gap-2 whitespace-nowrap hover:text-gunmetal-50 stroke-gunmetal-300 hover:stroke-gunmetal-50 "
      href="#"
    >
      {linkLabel}
      <DynamicHeroIcon icon={linkType} />
    </Link>
  );
};
