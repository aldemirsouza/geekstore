import { CardIcon } from "../icons/CardIcon";
import { PhoneIcon } from "../icons/PhoneIcon";
import { SecurityIcon } from "../icons/SecurityIcon";
import { ShippingIcon } from "../icons/ShippingIcon";

export function BenefitsBar() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <ShippingIcon />
          <strong className="ml-2 text-[#101828]">
            Frete grátis <br />
            <span className="text-[14px] font-normal leading-[20px]">Acima de R$ 199</span>
          </strong>
        </div>

        <div className="flex items-center">
          <CardIcon />
          <strong className="ml-2 text-[#101828]">
            12x sem Juros <br />
            <span className="text-[14px] font-normal leading-[20px]">No cartão de crédito</span>
          </strong>
        </div>

        <div className="flex items-center">
          <SecurityIcon />
          <strong className="ml-2 text-[#101828]">
            Compra Segura <br />
            <span className="text-[14px] font-normal leading-[20px]">SSL e criptografia</span>
          </strong>
        </div>

        <div className="flex items-center">
          <PhoneIcon />
          <strong className="ml-2 text-[#101828]">
            Atendimento <br />
            <span className="text-[14px] font-normal leading-[20px]">Segunda a Sábado</span>
          </strong>
        </div>
      </div>
    </div>
  );
}
