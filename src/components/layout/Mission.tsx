import Link from "next/link";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import QuoteSvg from "@svg/quote.svg";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];
const stats = [
  { name: "Offices worldwide", value: "12" },
  { name: "Full-time colleagues", value: "300+" },
  { name: "Hours per week", value: "40" },
  { name: "Paid time off", value: "Unlimited" },
];

export const Mission = () => {
  return (
    <div className="bg-coral-500">
      <div className="flex flex-col gap-16 sm:gap-24 max-w-screen-xl mx-auto w-screen px-10 pt-16 pb-20">
        <div className="">
          <h2 className="flex flex-col gap-y-2 text-3xl sm:text-5xl font-bold text-white">
            <span>Nossa missão?</span>
            <span>Excelência para você!</span>
          </h2>
        </div>

        <div className="flex flex-row flex-wrap md:flex-nowrap gap-x-12 gap-y-10 w-full h-fit place-items-start">
          <div className="flex flex-row place-content-start basis-full md:basis-1/2 gap-x-3 md:gap-x-6">
            <Image
              className="hidden sm:block max-h-12 relative text-9xl -top-5"
              src={QuoteSvg}
              width={48}
              height={48}
              alt="Quote icon"
            />
            <Image
              className="sm:hidden max-h-12 relative text-9xl -top-5"
              src={QuoteSvg}
              width={32}
              height={32}
              alt="Quote icon"
            />
            <div className="flex flex-col gap-12">
              <p className="text-2xl font-semibold sm:font-bold text-gunmetal-50">
                Fornecer soluções inovadoras e sustentáveis.
              </p>

              <Link href="/pt/nossa-historia" className="hidden md:inline-flex btn flex-nowrap truncate text-gunmetal-600 w-fit">
                Conheça nossa história
                <ArrowTopRightOnSquareIcon className="h-5 stroke-2 stroke-gunmetal-600" />
              </Link>
            </div>
          </div>

          <Link href="/pt/nossa-historia" className="md:hidden btn flex-nowrap truncate text-gunmetal-600 w-fit">
            Conheça nossa história
            <ArrowTopRightOnSquareIcon className="h-5 stroke-2 stroke-gunmetal-600" />
          </Link>

          <p className="basis-full md:basis-1/2 text-base text-gunmetal-50">
            Buscamos liderar o mercado oferecendo excelência no atendimento e
            promovendo um ambiente ético, inclusivo e de desenvolvimento para
            nossos colaboradores. <br /> <br />
            Fornecer soluções inovadoras e sustentáveis em revestimentos
            cimentícios, com qualidade e design diferenciado, atendendo às
            necessidades dos clientes.
          </p>
        </div>
      </div>
    </div>
  );
};
