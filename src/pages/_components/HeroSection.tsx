import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const HERO_IMG =
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NzIwMTN8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGZpbmFuY2lhbCUyMGFjY291bnRpbmclMjBkb2N1bWVudHMlMjBwYXBlcnN8ZW58MHx8fHwxNzg0ODMwOTI0fDA&ixlib=rb-4.1.0&q=80&w=1080";

export default function HeroSection() {
  const scrollToAbout = () => {
    document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(44,50,65,0.93) 0%, rgba(44,50,65,0.78) 60%, rgba(44,50,65,0.65) 100%)" }}
        aria-hidden="true"
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #c5d5a5, transparent, #c5d5a5)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
            style={{ backgroundColor: "rgba(197,213,165,0.2)", color: "#c5d5a5", border: "1px solid rgba(197,213,165,0.35)" }}
          >
            Assessoria Contábil Especializada
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-white leading-tight text-balance mb-6"
        >
          Segurança jurídica e{" "}
          <span style={{ color: "#c5d5a5" }}>previsibilidade tributária</span>{" "}
          para você focar no crescimento do seu negócio.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto mb-10 text-balance"
        >
          Atendemos MEIs, empresas de todos os portes e pessoas físicas em Jabuticabal, 
          no estado de São Paulo e em todo o Brasil com atendimento online ágil e personalizado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="https://wa.me/5516981776122"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl text-base font-bold transition-all hover:opacity-90 hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
            style={{ backgroundColor: "#c5d5a5", color: "#2c3241" }}
          >
            Vem Saber Mais
          </a>
          <button
            onClick={() => document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-xl text-base font-semibold text-white border border-white/30 backdrop-blur-sm hover:bg-white/10 transition-all cursor-pointer"
          >
            Nossos Serviços
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {[
            { value: "25+", label: "Anos de Experiência" },
            { value: "100%", label: "Conformidade Legal" },
            { value: "Online", label: "Atendimento Nacional" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold" style={{ color: "#c5d5a5" }}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/60 mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors cursor-pointer animate-bounce"
        aria-label="Rolar para baixo"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}