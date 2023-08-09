import * as HeroIconsOutline from "@heroicons/react/24/outline";

export type IconName = keyof typeof HeroIconsOutline;

interface DynamicHeroIconProps {
  icon: IconName;
}

/**
 * Component that displays a dynamic icon from HeroIcons.
 * @param {string} icon - Icon name to be displayed. Refer to the complete list of available icons at {@link https://unpkg.com/browse/@heroicons/react@2.0.18/24/outline/}.
 * @returns {JSX.Element} The rendered HeroIcon.
 */

export const DynamicHeroIcon: React.FC<DynamicHeroIconProps> = ({ icon }) => {
  const SelectedIcon = HeroIconsOutline[icon];

  if (!SelectedIcon) {
    // Handle invalid icon.
    return null;
  }

  return (
    <SelectedIcon
      className="h-3 w-3 stroke-2 stroke-inherit"
      aria-hidden="true"
    />
  );
};
