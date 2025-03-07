import React, { ReactNode } from "react";

interface GradientDotBgProps {
  children: ReactNode;
}

const GradientDotBg: React.FC<GradientDotBgProps> = ({ children }) => {
  return (
    <div className="relative size-full bg-gradient-to-b from-base-200 from-75% to-primary">
      <div className="absolute hidden size-full bg-[radial-gradient(#cdced1_1px,transparent_1px)] [background-attachment:fixed] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:block" />
      {children}
    </div>
  );
};

export default GradientDotBg;
