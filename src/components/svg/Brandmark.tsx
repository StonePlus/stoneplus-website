import React from "react";

interface BrandmarkProps {
  className?: string;
}

const Brandmark: React.FC<BrandmarkProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 28 28"
    className={className}
  >
    <path d="M3 12.632a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h6.632a3 3 0 0 1 3 3v6.632a3 3 0 0 1-3 3H3ZM18.369 12.632a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3H25a3 3 0 0 1 3 3v6.632a3 3 0 0 1-3 3h-6.631ZM3 28a3 3 0 0 1-3-3v-6.632a3 3 0 0 1 3-3h6.632a3 3 0 0 1 3 3V25a3 3 0 0 1-3 3H3Z" />
  </svg>
);

export default Brandmark;
