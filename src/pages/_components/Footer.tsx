import { Mail, MapPin, Phone, Clock } from "lucide-react";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

const FOOTER_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const SERVICES_LIST = [
  "Assessoria Contábil PJ",
  "Assessoria Contábil PF",
  "Planejamento Tributário",
  "Abertura de Empresas",
  "Declaração de IR (IRPF)",
  "Atendimento Online Nacional",
];

const handleNav = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1a1f2e" }} className="text-white" aria-label="Rodapé">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#c5d5a5" }}
              >
                <span className="font-bold text-base" style={{ color: "#2c3241" }}>T</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-sm tracking-wide text-white">TRINDADE</span>
                <span className="text-[10px] tracking-widest uppercase text-white/50">
                  Assessoria Contábil
                </span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Simplificamos a gestão burocrática para garantir conformidade e crescimento 
              sustentável. Seu parceiro estratégico para a saúde financeira do seu negócio.
            </p>
            <a
              href="https://instagram.com/domingaspereiratrindade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#c5d5a5] transition-colors cursor-pointer"
              aria-label="Instagram @domingaspereiratrindade"
            >
              <InstagramIcon size={16} />
              @domingaspereiratrindade
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
              Navegação
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-sm text-white/60 hover:text-[#c5d5a5] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
              Serviços
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_LIST.map((s) => (
                <li key={s} className="text-sm text-white/60">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-5">
              Contato
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/5516981776122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-[#c5d5a5] transition-colors cursor-pointer"
                  aria-label="WhatsApp (16) 98177-6122"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0" />
                  (16) 98177-6122
                </a>
              </li>
              <li>
                <a
                  href="mailto:assessoriacontabiltrindade@gmail.com"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-[#c5d5a5] transition-colors cursor-pointer break-all"
                  aria-label="E-mail assessoriacontabiltrindade@gmail.com"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0" />
                  assessoriacontabiltrindade@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin size={15} className="mt-0.5 flex-shrink-0" />
                Jabuticabal - SP
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Clock size={15} className="mt-0.5 flex-shrink-0" />
                Seg–Sex · 8h às 18h
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © {currentYear} TRINDADE Assessoria Contábil. Todos os direitos reservados.
          </p>
          <p className="text-xs text-white/35">
            Jabuticabal - SP &nbsp;|&nbsp; Atendimento Nacional Online
          </p>
        </div>
      </div>
    </footer>
  );
}