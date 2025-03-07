import React from "react";
import Link from "next/link";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface ArrowButtonProps {
  direction: "left" | "right";
  href?: string;
  onClick?: (event: React.MouseEvent) => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({
  direction,
  href,
  onClick,
}) => {
  return (
    <Link
      href={href ?? ""}
      onClick={onClick}
      className="btn btn-circle btn-secondary btn-sm sm:btn-md"
      aria-label={direction === "left" ? "Slide anterior" : "Próximo slide"}
    >
      {direction === "left" ? (
        <ArrowLeftIcon className="size-4" />
      ) : (
        <ArrowRightIcon className="size-4" />
      )}
    </Link>
  );
};

export default ArrowButton;
