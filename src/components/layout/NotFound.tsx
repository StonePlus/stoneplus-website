"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function NotFoundHero() {
  const t = useTranslations("NotFound");
  const pathname = usePathname();

  return (
    <section className="hero min-h-screen bg-hero">
      <div className="hero-overlay h-full w-full bg-gradient-to-t from-neutral via-neutral/40 via-50% to-transparent md:via-25%" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">
            <span className="text-secondary">{t("errorCode")}</span>{" "}
            {t("errorMessage")}
          </h1>
          <p className="mb-5">
            {t.rich("description", {
              guidelines: (chunks) => <b>{chunks}</b>,
              currentUrl: `https://stoneplus.com.br${pathname}`,
            })}
          </p>
          <Link href="/" className="btn btn-secondary btn-block sm:btn-wide">
            <span>{t("buttonLabel")}</span>
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
