import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Ricardo Oliveira",
    role: "Proprietário · Comércio Varejista",
    location: "Jabuticabal - SP",
    text:
      "Desde que passei a contar com a TRINDADE, sinto um alívio enorme. Antes eu ficava perdido com impostos e obrigações fiscais. Hoje tenho total clareza sobre minha situação tributária e posso focar 100% no meu negócio.",
    initials: "RO",
  },
  {
    name: "Camila Santos",
    role: "Médica · Pessoa Física",
    location: "Ribeirão Preto - SP",
    text:
      "Contratei para a declaração do IR e fui surpreendida com a eficiência e atenção. Recebi orientação detalhada sobre todas as deduções que eu tinha direito. Restituição bem acima do esperado. Recomendo demais!",
    initials: "CS",
  },
  {
    name: "Fernando Matos",
    role: "MEI · Serviços de TI",
    location: "São Paulo - SP (online)",
    text:
      "Trabalho com atendimento remoto e ficava com receio de contratar assessoria online. A TRINDADE acabou com esse medo logo na primeira conversa. Comunicação ágil, documentação organizada e nunca tive problema com a Receita.",
    initials: "FM",
  },
  {
    name: "Ana Paula Ferreira",
    role: "Diretora · Empresa de Eventos",
    location: "Araraquara - SP",
    text:
      "A transição do meu contador antigo para a TRINDADE foi simples e sem estresse, como eles prometem. Em pouco tempo já sentimos a diferença na organização fiscal e na redução de custos com impostos.",
    initials: "AP",
  },
  {
    name: "Marcelo Costa",
    role: "Autônomo · Consultor de Gestão",
    location: "São Paulo - SP (online)",
    text:
      "Precisava de segurança jurídica e encontrei muito mais que isso: encontrei uma parceira estratégica. A Domingas é extremamente técnica, atenciosa e sempre explica tudo com clareza. Minha empresa está em ótimas mãos.",
    initials: "MC",
  },
  {
    name: "Juliana Ramos",
    role: "Proprietária · Clínica de Estética",
    location: "Jabuticabal - SP",
    text:
      "O planejamento tributário feito pela TRINDADE me trouxe uma economia significativa ainda no primeiro ano. Sempre comprometidos, pontuais e disponíveis para tirar dúvidas. Profissionalismo em cada detalhe.",
    initials: "JR",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="depoimentos"
      ref={ref}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#dfe8dc" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
            style={{ backgroundColor: "#c5d5a5", color: "#2c3241" }}
          >
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Quem confia na{" "}
            <span style={{ color: "#2c3241" }}>TRINDADE</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Veja o que empresários e profissionais estão dizendo sobre segurança, alívio 
            e resultados concretos com nossa assessoria.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-border flex flex-col hover:shadow-md transition-shadow"
            >
              <Quote size={28} className="mb-4 flex-shrink-0" style={{ color: "#c5d5a5" }} />
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6 italic">
                &quot;{t.text}&quot;
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-5">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 text-white"
                  style={{ backgroundColor: "#2c3241" }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                  <p className="text-xs" style={{ color: "#2c3241" }}>{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}