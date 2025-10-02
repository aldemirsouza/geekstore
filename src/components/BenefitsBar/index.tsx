import { CardIcon } from "../icons/CardIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
import { SecurityIcon } from "../icons/SecurityIcon";
import { ShippingIcon } from "../icons/ShippingIcon";

export function BenefitsBar() {
  const benefits = [
    {
      icon: <ShippingIcon />,
      title: "Frete grátis",
      desc: "Acima de R$ 199",
    },
    {
      icon: <CardIcon />,
      title: "12x sem Juros",
      desc: "No cartão de crédito",
    },
    {
      icon: <SecurityIcon />,
      title: "Compra Segura",
      desc: "SSL e criptografia",
    },
    {
      icon: <PhoneIcon />,
      title: "Atendimento",
      desc: "Segunda a Sábado",
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className=" max-w-[1055px] container mx-auto py-6">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide md:hidden">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center min-w-full snap-center justify-center"
            >
              {item.icon}
              <strong className="ml-2 text-[#101828]">
                {item.title} <br />
                <span className="text-[14px] font-normal leading-[20px]">
                  {item.desc}
                </span>
              </strong>
            </div>
          ))}
        </div>

        <div className="hidden md:flex justify-between items-center">
          {benefits.map((item, idx) => (
            <div key={idx} className="flex items-center  gap-4">
              {item.icon}
              <strong className="ml-2 text-[#101828]">
                {item.title} <br />
                <span className="text-[14px] font-normal leading-[20px]">
                  {item.desc}
                </span>
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
