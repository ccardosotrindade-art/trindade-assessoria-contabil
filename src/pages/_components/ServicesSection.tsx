import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  Building2,
  User,
  FileText,
  BarChart3,
  Globe,
  Receipt,
} from "lucide-react";

const SERVICES = [
  {
    id: "pj",
    tabLabel: "Contabilidade PJ",
    icon: Building2,
    title: "Assessoria Contábil Pessoa Jurídica",
    description:
      "Gestão contábil e fiscal completa para empresas de todos os portes — do MEI às médias empresas. Cuidamos de toda a burocracia para você focar no crescimento.",
    benefits: [
      "Abertura e estruturação societária",
      "Escrituração contábil e fiscal",
      "Apuração de impostos (Simples Nacional, Lucro Presumido, Lucro Real)",
      "Obrigações acessórias (SPED, DCTF, ECF, EFD)",
      "Folha de pagamento e encargos sociais",
    ],
    cta: "Solicitar Consultoria PJ",
  },
  {
    id: "pf",
    tabLabel: "Contabilidade PF",
    icon: User,
    title: "Assessoria Contábil Pessoa Física",
    description:
      "Suporte especializado para profissionais liberais, autônomos e investidores que precisam de organização fiscal e tranquilidade com o Leão.",
    benefits: [
      "Declaração do Imposto de Renda Pessoa Física (IRPF)",
      "Planejamento tributário individual",
      "Orientação sobre rendimentos, ganhos de capital e investimentos",
      "Regularização de pendências com a Receita Federal",
      "Consultoria para MEI e autônomos",
    ],
    cta: "Solicitar Consultoria PF",
  },
  {
    id: "planejamento",
    tabLabel: "Planej. Tributário",
    icon: BarChart3,
    title: "Planejamento Tributário",
    description:
      "Estratégias legais para reduzir a carga tributária da sua empresa ou atividade, com segurança jurídica e total conformidade com a legislação vigente.",
    benefits: [
      "Análise do regime tributário ideal",
      "Estudo de economia tributária lícita",
      "Reestruturação societária estratégica",
      "Revisão de obrigações e recuperação de créditos",
      "Relatórios de previsibilidade tributária",
    ],
    cta: "Solicitar Consultoria",
  },
  {
    id: "abertura",
    tabLabel: "Abertura de Empresas",
    icon: FileText,
    title: "Abertura e Regularização de Empresas",
    description:
      "Do CNPJ à regularização fiscal, cuidamos de cada etapa com agilidade e precisão, garantindo que sua empresa nasce ou se regulariza sem complicações.",
    benefits: [
      "Abertura de MEI, LTDA, EIRELI e SA",
      "Enquadramento e reenquadramento tributário",
      "Regularização de débitos e pendências",
      "Baixa e encerramento de empresas",
      "Alterações contratuais e societárias",
    ],
    cta: "Solicitar Consultoria",
  },
  {
    id: "online",
    tabLabel: "Atendimento Online",
    icon: Globe,
    title: "Atendimento Online Nacional",
    description:
      "Nossa estrutura digital permite oferecer a mesma qualidade de atendimento presencial para clientes em todo o Brasil, com agilidade e segurança.",
    benefits: [
      "Comunicação por videoconferência e WhatsApp",
      "Envio e assinatura digital de documentos",
      "Portal de documentos seguro",
      "Suporte dedicado e resposta ágil",
      "Atendimento em Jabuticabal-SP e em todo o território nacional",
    ],
    cta: "Solicitar Consultoria",
  },
  {
    id: "irpf",
    tabLabel: "Declaração IR",
    icon: Receipt,
    title: "Declaração de IR — Pessoa Física",
    description:
      "Declaração completa e sem erros do Imposto de Renda com acompanhamento especializado, evitando riscos de malha fina e maximizando restituições.",
    benefits: [
      "Declaração completa e revisada",
      "Orientação sobre deduções legais",
      "Análise de bens, direitos e dívidas",
      "Declaração de dependentes e pensão",
      "Retificação de declarações anteriores",
    ],
    cta: "Solicitar Consultoria",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [activeTab, setActiveTab] = useState("pj");

  const activeService = SERVICES.find((s) => s.id === activeTab) ?? SERVICES[0];
  const Icon = activeService.icon;

  return (
    <section
      id="servicos"
      ref={ref}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#dfe8dc" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ backgroundColor: "#c5d5a5", color: "#2c3241" }}
          >
            Nossos Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Soluções completas para{" "}
            <span style={{ color: "#2c3241" }}>sua vida financeira</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos assessoria contábil completa, desde a abertura da empresa até o planejamento 
            tributário estratégico, com atendimento humanizado e ágil.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Categorias de serviços"
        >
          {SERVICES.map((service) => {
            const TabIcon = service.icon;
            return (
              <button
                key={service.id}
                role="tab"
                aria-selected={activeTab === service.id}
                aria-controls={`panel-${service.id}`}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeTab === service.id
                    ? "shadow-md text-white"
                    : "text-muted-foreground bg-white hover:bg-muted border border-border"
                }`}
                style={
                  activeTab === service.id
                    ? { backgroundColor: "#2c3241" }
                    : {}
                }
              >
                <TabIcon size={15} />
                <span>{service.tabLabel}</span>
              </button>
            );
          })}
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          id={`panel-${activeTab}`}
          role="tabpanel"
          className="bg-white rounded-3xl shadow-lg overflow-hidden grid md:grid-cols-2"
        >
          <div className="p-8 lg:p-10">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
              style={{ backgroundColor: "#2c3241" }}
            >
              <Icon size={26} color="#c5d5a5" />
            </div>
            <h3 className="text-2xl font-extrabold text-foreground mb-3">
              {activeService.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {activeService.description}
            </p>
            <a
              href="https://wa.me/5516981776122"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90 hover:shadow-md cursor-pointer"
              style={{ backgroundColor: "#c5d5a5", color: "#2c3241" }}
            >
              {activeService.cta}
            </a>
          </div>

          <div
            className="p-8 lg:p-10 flex flex-col justify-center"
            style={{ backgroundColor: "#ebf1ea" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              O que está incluso
            </p>
            <ul className="space-y-3">
              {activeService.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                    style={{ backgroundColor: "#2c3241" }}
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span className="text-sm text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}