import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  HeartHandshake,
  ShieldCheck,
  Zap,
  Globe,
  TrendingUp,
  Clock,
} from "lucide-react";

const DIFFERENTIALS = [
  {
    icon: HeartHandshake,
    title: "Acompanhamento Humanizado",
    description:
      "Atendimento técnico próximo e personalizado em todo o ciclo de vida do seu negócio, sem burocracia interna.",
  },
  {
    icon: ShieldCheck,
    title: "Conformidade Rigorosa",
    description:
      "Total conformidade com a legislação vigente. Você nunca corre o risco de penalidades ou irregularidades fiscais.",
  },
  {
    icon: TrendingUp,
    title: "Inteligência Financeira",
    description:
      "Transformamos obrigações burocráticas em estratégias de crescimento, com planejamento tributário eficiente e lícito.",
  },
  {
    icon: Globe,
    title: "Atendimento Digital Nacional",
    description:
      "Nossa infraestrutura digital permite atender com a mesma qualidade do presencial para clientes em todo o Brasil.",
  },
  {
    icon: Zap,
    title: "Agilidade na Resolução",
    description:
      "Processos junto a órgãos públicos resolvidos com tecnologia e expertise, sem lentidão e sem complicações.",
  },
  {
    icon: Clock,
    title: "Transição Sem Estresse",
    description:
      "Migramos seu histórico contábil do contador anterior com segurança e sem interrupção das suas atividades.",
  },
];

export default function DifferentialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="diferenciais" ref={ref} className="py-20 lg:py-28 bg-background">
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
            Por que nos escolher
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
            Nossos{" "}
            <span style={{ color: "#2c3241" }}>Diferenciais</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja por que empresários e pessoas físicas de todo o Brasil confiam na TRINDADE 
            Assessoria Contábil para sua segurança jurídica e crescimento.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((item, i) => {
            const ItemIcon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-7 rounded-2xl border border-border bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: "#2c3241" }}
                >
                  <ItemIcon size={22} color="#c5d5a5" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}