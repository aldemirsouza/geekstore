import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube, } from "lucide-react";
import { Newsletter } from "../Newsletter";
import { FooterMenuToggle } from "../FooterMenuToggle";

export function Footer() {
  return (
    <div className="bg-primary pt-12">
      <Newsletter />

      <footer className=" text-white pt-10 border-t border-[rgba(255,255,255,0.10)]">
        <div className="px-6 max-w-[1055px] mx-auto flex flex-col sm:flex-row sm:justify-between gap-0 sm:gap-10 sm:px-4">

          <div className="flex-1 flex flex-col gap-6">
            <h2 className="text-[24px] font-bold leading-[32px] tracking-[-0.312px]">GeekStore</h2>

            <p className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] max-w-[87%]">
              Sua loja especializada em games, consoles e produtos geek. Qualidade garantida e os melhores preços do mercado.
            </p>

            <nav className="mt-4 mb-8 sm:my-0">
              <ul className="flex gap-6">
                <li>
                  <a href="/" className="text-white hover:text-[#F5AB00] transition-colors duration-300">
                    <Facebook size={16} />
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white hover:text-[#F5AB00] transition-colors duration-300">
                    <Instagram size={16} />
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white hover:text-[#F5AB00] transition-colors duration-300">
                    <Twitter size={16} />
                  </a>
                </li>
                <li>
                  <a href="/" className="text-white hover:text-[#F5AB00] transition-colors duration-300">
                    <Youtube size={16} />
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="md:flex-1">
            <FooterMenuToggle title="Produtos">
              <ul className="flex flex-col gap-2 text-[#F9FAFB] text-[14px]">
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#F5AB00] transition-colors duration-300">
                  <a href="">PlayStation 5</a>
                </li>
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#F5AB00] transition-colors duration-300"><a href="">Xbox Series X/S</a></li>
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#F5AB00] transition-colors duration-300"><a href="">Nintendo Switch</a></li>
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#F5AB00] transition-colors duration-300"><a href="">PC Gaming</a></li>
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#F5AB00] transition-colors duration-300"><a href="">Acessórios</a></li>
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#F5AB00] transition-colors duration-300"><a href="">Colecionáveis</a></li>
              </ul>
            </FooterMenuToggle>
          </div>

          <div className="md:flex-1">
            <FooterMenuToggle title="Atendimento">
              <ul className="flex flex-col gap-2">
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#F5AB00] transition-colors duration-300">
                  <a href="">Central de Ajuda</a>
                </li>
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#c400f5] transition-colors duration-300">
                  <a href="">Como Comprar</a>
                </li>
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#F5AB00] transition-colors duration-300">
                  <a href="">Trocas e Devoluções</a>
                </li>
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#F5AB00] transition-colors duration-300">
                  <a href="">Garantia</a>
                </li>
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#F5AB00] transition-colors duration-300">
                  <a href="">Frete e Entregas</a>
                </li>
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#F5AB00] transition-colors duration-300">
                  <a href="">Formas de Pagamento</a>
                </li>
              </ul>
            </FooterMenuToggle>
          </div>

          <div className="md:flex-1">
            <FooterMenuToggle title="Contato">
              <ul className="flex flex-col gap-4 text-[#F9FAFB] text-[14px]">
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#F5AB00] transition-colors duration-300">
                  <a className="flex gap-3 items-center" href="tel:+551130000000">
                    <Phone size={'20'} color="#F5AB00" />
                    (11) 3000-0000
                  </a>
                </li>
                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px] hover:text-[#F5AB00] transition-colors duration-300">
                  <a className="flex gap-3 items-center" href="mailto:contato@geekstore.com.br">
                    <Mail size={'20'} color="#F5AB00" />
                    contato@geekstore.com.br
                  </a>
                </li>

                <li className="flex gap-3 text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px]">
                  <MapPin size={'20'} color="#F5AB00" />
                  Rua dos Gamers, 123<br />
                  São Paulo - SP<br />
                  CEP: 01234-567
                </li>

                <li className="text-white/80 text-[16px] font-normal leading-[24px] tracking-[-0.312px]">
                  <span className="text-white text-[16px] font-bold leading-[24px] tracking-[-0.312px]">Horário de Atendimento</span><br />
                  Segunda a Sexta: 8h às 18h<br />
                  Sábado: 8h às 14h
                </li>
              </ul>
            </FooterMenuToggle>
          </div>
        </div>

        <div className="border-t border-[rgba(255,255,255,0.10)] mt-12">
          <div
            className="max-w-[1055px] mx-auto flex flex-col items-center justify-center text-center py-6 gap-4 sm:flex-row sm:px-4 sm:items-center sm:justify-between sm:text-left">
            <p
              className="text-[rgba(255,255,255,0.60)] text-[14px] font-normal leading-5 tracking-[-0.15px] py-6 sm:py-0"
            >
              © 2024 GeekStore. Todos os direitos reservados.
            </p>

            <nav>
              <ul
                className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
                <li>
                  <a
                    href=""
                    className="
                      text-[rgba(255,255,255,0.60)]
                      text-[14px] font-normal leading-5 tracking-[-0.15px]
                      transition-colors duration-300 hover:text-[#F5AB00]
                    "
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="
                    text-[rgba(255,255,255,0.60)]
                    text-[14px] font-normal leading-5 tracking-[-0.15px]
                    transition-colors duration-300 hover:text-[#F5AB00]
                  "
                  >
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="
                    text-[rgba(255,255,255,0.60)]
                    text-[14px] font-normal leading-5 tracking-[-0.15px]
                    transition-colors duration-300 hover:text-[#F5AB00]
                  "
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}