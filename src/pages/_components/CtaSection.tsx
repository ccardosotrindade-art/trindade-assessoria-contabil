import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MessageCircle, Mail, CheckCircle2 } from "lucide-react";

const CTA_IMG = "https://hercules-cdn.com/file_LXskATJVSnVVVE3eQam96feS";

const OBJECTIONS = [
  "Transição do contador atual feita sem estresse e com total segurança",
  "Custo-benefício transparente, sem surpresas na fatura",
  "Atendimento digital tão eficiente quanto o presencial",
];

export default function CtaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="contato"
      ref={ref}
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#2c3241" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 hidden lg:block"
          >
            <img
              src={CTA_IMG}
              alt="Assessoria contábil profissional em ação — TRINDADE Assessoria Contábil"
              className="w-full h-[480px] object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(44,50,65,0.3) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-1 lg:order-2"
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
              style={{ backgroundColor: "rgba(197,213,165,0.2)", color: "#c5d5a5", border: "1px solid rgba(197,213,165,0.3)" }}
            >
              Pronto para começar?
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight text-balance">
              Segurança jurídica e{" "}
              <span style={{ color: "#c5d5a5" }}>previsibilidade tributária</span>{" "}
              para você focar apenas no crescimento.
            </h2>

            <p className="text-white/70 mb-7 leading-relaxed">
              Atendemos MEIs, empresas de todos os portes e pessoas físicas em Jabuticabal, 
              em todo o estado de São Paulo e em todo o Brasil via atendimento online. 
              Entre em contato agora e dê o próximo passo rumo à sua liberdade empresarial.
            </p>

            <ul className="space-y-3 mb-8">
              {OBJECTIONS.map((obj) => (
                <li key={obj} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#c5d5a5" }}
                  />
                  <span className="text-sm text-white/80">{obj}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5516981776122"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-bold transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
                style={{ backgroundColor: "#c5d5a5", color: "#2c3241" }}
              >
                <MessageCircle size={20} />
                Vem Saber Mais
              </a>
              <a
                href="mailto:assessoriacontabiltrindade@gmail.com"
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base font-semibold text-white border border-white/25 hover:bg-white/10 transition-all cursor-pointer"
              >
                <Mail size={18} />
                Enviar E-mail
              </a>
            </div>

            <p className="mt-5 text-white/40 text-xs">
              Seg–Sex das 8h às 18h &nbsp;·&nbsp; (16) 98177-6122 &nbsp;·&nbsp; Jabuticabal-SP
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}