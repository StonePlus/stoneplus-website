import React from "react";

import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ArrowButton: React.FC<ArrowButtonProps> = ({ direction, onClick }) => {
  return (
    <button className="btn btn-circle btn-secondary" onClick={onClick}>
      {direction === "left" ? (
        <ArrowLeftIcon className="size-4" />
      ) : (
        <ArrowRightIcon className="size-4" />
      )}
    </button>
  );
};

export default ArrowButton;
