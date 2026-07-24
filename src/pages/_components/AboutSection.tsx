import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const TEAM_IMG = "https://hercules-cdn.com/file_qaepVf3Il45rPljA75bdlygN";

const HIGHLIGHTS = [
  "Mais de 25 anos de atuação no setor contábil",
  "Pós-graduada em Contabilidade Pública",
  "Atendimento presencial em Jabuticabal-SP e online nacional",
  "Acompanhamento técnico humanizado em todo o ciclo do negócio",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" ref={ref} className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
              style={{ backgroundColor: "#c5d5a5", color: "#2c3241" }}
            >
              Sobre Nós
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6 leading-tight">
              Uma trajetória construída com{" "}
              <span style={{ color: "#2c3241" }}>dedicação</span> e{" "}
              <span style={{ color: "#2c3241" }}>expertise técnica</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Tudo começou há mais de 25 anos, quando iniciamos nossa atuação como auxiliar 
                nos setores de contabilidade de órgãos públicos municipais e, em seguida, em 
                escritórios de contabilidade privados. Ao longo dessa trajetória, acumulamos 
                experiência nas mais diversas frentes de suporte e assessoria contábil.
              </p>
              <p>
                Movidos pela vontade de ir além, aprofundamos nossos estudos na área e concluímos 
                a graduação em Ciências Contábeis, seguida de pós-graduação em Contabilidade 
                Pública. Depois de anos em parcerias público-privadas, decidimos concentrar nossa 
                atuação no atendimento mais direto, individualizado e pessoal ao cliente.
              </p>
              <p>
                Nossa{" "}
                <strong className="text-foreground">missão</strong> é simplificar a gestão 
                burocrática para garantir conformidade e crescimento sustentável, tratando a 
                contabilidade como pilar de inteligência para o seu negócio.
              </p>
            </div>

            <ul className="mt-6 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#2c3241" }}
                  />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div
              className="mt-8 grid grid-cols-3 gap-4 p-6 rounded-2xl"
              style={{ backgroundColor: "#2c3241" }}
            >
              {[
                { value: "25+", label: "Anos de Atuação" },
                { value: "SP", label: "& Brasil" },
                { value: "PJ + PF", label: "Atendemos" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-extrabold" style={{ color: "#c5d5a5" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={TEAM_IMG}
                alt="Domingas Pereira Trindade — Contadora da TRINDADE Assessoria Contábil"
                className="w-full h-[480px] lg:h-[540px] object-cover object-top"
                loading="lazy"
              />
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background:
                    "linear-gradient(to top, rgba(44,50,65,0.95) 0%, rgba(44,50,65,0.6) 60%, transparent 100%)",
                }}
              >
                <p className="text-white font-bold text-lg">Domingas Pereira Trindade</p>
                <p style={{ color: "#c5d5a5" }} className="text-sm font-medium">
                  Contadora · CRC ativo
                </p>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -right-6 hidden lg:block px-5 py-4 rounded-2xl shadow-xl"
              style={{ backgroundColor: "#c5d5a5" }}
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#2c3241]">
                Pós-graduada em
              </p>
              <p className="text-sm font-extrabold text-[#2c3241] mt-0.5">
                Contabilidade Pública
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}