"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useScrollPosition } from "@/hooks/useScrollPosition";

import WhatsappLogo from "@img/icons/whatsapp-digital-white.png";

const WhatsAppToast: React.FC = () => {
  const scrollPosition = useScrollPosition();

  const isAtBottom =
    scrollPosition + window.innerHeight >= document.body.offsetHeight;

  return (
    <div className="toast toast-end">
      <Link
        href="https://wa.me/558532602501"
        className={`${scrollPosition > 800 && !isAtBottom ? "inline-flex" : "hidden"} btn btn-circle btn-success btn-lg z-50 shadow duration-200 ease-in-out`}
        target="_blank"
      >
        <Image src={WhatsappLogo} width={32} height={32} alt="WhatsApp Logo" />
      </Link>
    </div>
  );
};

export default WhatsAppToast;
