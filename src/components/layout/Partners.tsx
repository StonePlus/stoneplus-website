import Link from "next/link";
import Image from "next/image";

import AcalLogo from "@img/partner-logos/acal-home-center.png";
import LeroyMerlinLogo from "@img/partner-logos/leroy-merlin.png";
import CarajasLogo from "@img/partner-logos/carajas.png";
import MetalLogo from "@img/partner-logos/metal-comercio.png";

export default function Partners() {
  return (
    <section className="bg-gradient-to-b from-black via-25% to-neutral">
      <div className="px-4 py-12 md:px-14 md:py-16">
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-9 sm:gap-x-10 md:mx-0 md:max-w-none md:grid-cols-5">
          <Link
            href="https://www.acalhomecenter.com.br/materiais-de-construcao/acessorios-para-construcao/stoneplus/#&search-term=StonePlus"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 hover:scale-105 active:scale-95 sm:col-span-3 md:col-span-1"
          >
            <Image
              className="max-h-12 w-full object-contain"
              src={AcalLogo}
              alt="Acal Home Center"
            />
          </Link>

          <Link
            href="https://www.leroymerlin.com.br/search?term=stone%20plus&refinementList%5Battributes.Marca%5D=Stone%20Plus&searchTerm=stone%20plus&searchType=default"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 hover:scale-105 active:scale-95 sm:col-span-3 md:col-span-1"
          >
            <Image
              className="max-h-12 w-full object-contain"
              src={LeroyMerlinLogo}
              alt="Leroy Merlin"
            />
          </Link>

          <Link
            href="https://www.carajas.com.br/stoneplus"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 hover:scale-105 active:scale-95 sm:col-span-3 md:col-span-1"
          >
            <Image
              className="max-h-12 w-full object-contain"
              src={CarajasLogo}
              alt="Carajás"
            />
          </Link>

          <Link
            href="https://www.metalcomercio.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 hover:scale-105 active:scale-95 sm:col-span-3 sm:col-start-2 md:col-span-1 md:grid"
          >
            <Image
              className="max-h-12 w-full object-contain"
              src={MetalLogo}
              alt="Metal Comércio"
            />
          </Link>

          <Link
            href="https://www.metalcomercio.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 col-start-2 hover:scale-105 active:scale-95 sm:col-span-3 sm:col-start-6 md:col-span-1 md:grid"
          >
            <Image
              className="max-h-12 w-full object-contain"
              src={MetalLogo}
              alt="Metal Comércio"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
