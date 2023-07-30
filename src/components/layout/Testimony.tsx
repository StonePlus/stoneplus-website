import Image from "next/image";
import QuoteSecondarySvg from "@svg/quote-secondary.svg";

export const Testimony = () => {
  return (
    <div className="bg-gunmetal-50">
      <div className="flex flex-col gap-16 sm:gap-24 max-w-screen-xl mx-auto w-screen px-10 pt-16 pb-20">
        <div className="">
          <h2 className="flex flex-col gap-y-2 text-3xl sm:text-5xl font-bold text-gunmetal-950">
            O que falam sobre nós
          </h2>
        </div>

        <div className="flex flex-row flex-wrap md:flex-nowrap gap-x-12 gap-y-10 w-full h-fit place-items-start">
          <div className="flex flex-row place-content-start basis-full md:basis-1/2 gap-x-3 md:gap-x-6">
            <Image
              className="hidden sm:block max-h-12 relative text-9xl -top-5"
              src={QuoteSecondarySvg}
              width={48}
              height={48}
              alt="Quote icon"
            />
            <Image
              className="sm:hidden max-h-12 relative text-9xl -top-5"
              src={QuoteSecondarySvg}
              width={32}
              height={32}
              alt="Quote icon"
            />
            <div className="flex flex-col gap-12">
              <p className="basis-full md:basis-1/2 text-lg text-gunmetal-950">
                Minha experiência com a StonePlus tem sido excepcional. Os
                produtos oferecidos pela empresa são elegantes, duráveis e
                funcionais, além de serem personalizados de acordo com as
                necessidades do cliente.
              </p>
            </div>
          </div>

          <p className="basis-full md:basis-1/2 text-base text-gunmetal-950">
            Minha experiência com a StonePlus tem sido excepcional. Os produtos
            oferecidos pela empresa são elegantes, duráveis e funcionais, além
            de serem personalizados de acordo com as necessidades do cliente.
          </p>
        </div>
      </div>
    </div>
  );
};
