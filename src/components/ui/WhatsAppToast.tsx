"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { useScrollPosition } from "@/hooks/useScrollPosition";

import WhatsappLogo from "@img/icons/whatsapp-digital-white.png";

const SCROLL_THRESHOLD = 800;
const BOTTOM_ERROR_MARGIN = 50;

const WhatsAppToast: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - BOTTOM_ERROR_MARGIN;
      setIsAtBottom(atBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const shouldShowToast = scrollPosition > SCROLL_THRESHOLD && !isAtBottom;

  return (
    <div className="toast toast-end">
      <Link
        href="https://wa.me/558532602501"
        className={`${shouldShowToast ? "inline-flex" : "hidden"} btn btn-circle btn-success btn-lg z-50 shadow duration-200 ease-in-out`}
        target="_blank"
      >
        <Image src={WhatsappLogo} width={32} height={32} alt="WhatsApp Logo" />
      </Link>
    </div>
  );
};

export default WhatsAppToast;
