import WppLogo from "@svg/wpp.png";

import Image from "next/image";

import Link from "next/link";

export const WppToast = () => {
  return (
    <div className="flex md:hidden lg:flex toast toast-end 2xl:px-6 2xl:pb-16 hover:scale-105">
      <Link
        href={"https://wa.me/558532602501"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex alert alert-success rounded-full"
      >
        <Image src={WppLogo} alt="Whatsapp" />
      </Link>
    </div>
  );
};
