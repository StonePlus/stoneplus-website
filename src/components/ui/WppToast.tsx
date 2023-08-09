import WppLogo from "@svg/wpp.png";

import Image from "next/image";

export const WppToast = () => {
  return (
    <div className="flex md:hidden lg:flex toast toast-end 2xl:px-6 2xl:pb-16">
      <div className="flex alert alert-success rounded-full">
        <Image src={WppLogo} alt="Whatsapp" width={30} height={30} />
      </div>
    </div>
  );
};
