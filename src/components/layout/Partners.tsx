import Link from "next/link";
import Image from "next/image";

import AcalLogo from "@img/partner-logos/acal-home-center.png";
import LeroyMerlinLogo from "@img/partner-logos/leroy-merlin.png";
import CarajasLogo from "@img/partner-logos/carajas.png";
import MetalLogo from "@img/partner-logos/metal-comercio.png";

export const Partners = () => {
  return (
    <section className="bg-gradient-to-b from-black via-25% to-neutral">
      <div className="mx-auto w-screen max-w-screen-2xl px-14 pb-20 pt-16">
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <Link
            href="https://www.acalhomecenter.com.br/materiais-de-construcao/acessorios-para-construcao/stoneplus/#&search-term=StonePlus"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 hover:scale-105 active:scale-95 lg:col-span-1"
          >
            <Image
              className="max-h-12 w-full object-contain"
              src={AcalLogo}
              alt="Acal Home Center"
              width={158}
              height={48}
            />
          </Link>

          <Link
            href="https://www.leroymerlin.com.br/search?term=stone%20plus&refinementList%5Battributes.Marca%5D=Stone%20Plus&searchTerm=stone%20plus&searchType=default"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 hover:scale-105 active:scale-95 lg:col-span-1"
          >
            <Image
              className="max-h-12 w-full object-contain"
              src={LeroyMerlinLogo}
              alt="Leroy Merlin"
              width={158}
              height={48}
            />
          </Link>

          <Link
            href="https://www.carajas.com.br/stoneplus"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 hover:scale-105 active:scale-95 lg:col-span-1"
          >
            <Image
              className="max-h-12 w-full object-contain"
              src={CarajasLogo}
              alt="Carajás"
              width={158}
              height={48}
            />
          </Link>

          <Link
            href="https://www.metalcomercio.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 hover:scale-105 active:scale-95 lg:col-span-1"
          >
            <Image
              className="max-h-12 w-full object-contain"
              src={MetalLogo}
              alt="Metal Comércio"
              width={158}
              height={48}
            />
          </Link>

          <Image
            className="col-span-2 col-start-2 max-h-12 w-full object-contain hover:scale-105 active:scale-95 sm:col-start-auto lg:col-span-1"
            src={LeroyMerlinLogo}
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </section>
  );
};
