import * as HeroIconsOutline from "@heroicons/react/24/outline";

export type IconName = keyof typeof HeroIconsOutline;

interface DynamicHeroIconProps {
  icon: IconName;
  className?: string;
}

/**
 * Component that displays a dynamic icon from HeroIcons.
 * @param {IconName} icon - Icon to be displayed. Refer to the complete list of available icons at {@link https://unpkg.com/browse/@heroicons/react@2.0.18/24/outline/}.
 * @returns {React.FC} - The rendered HeroIcon.
 */

export const DynamicHeroIcon: React.FC<DynamicHeroIconProps> = ({ icon, className }) => {
  const SelectedIcon = HeroIconsOutline[icon];
  const DefaultClassName = "h-3 w-3 stroke-2 stroke-inherit";
  return (
    <SelectedIcon
      className={className || DefaultClassName}
      aria-hidden="true"
    />
  );
};
