// src/components/experience/Mission.tsx
import { motion } from "framer-motion";
import missionImg from "../../assets/images/experience/mission.jpg";

const imgVar = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
};
const textVar = {
  hidden: { opacity: 0, x: 28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }
};

export default function Mission() {
  return (
    <div className="grid md:grid-cols-[560px_minmax(0,1fr)] items-center gap-10 md:gap-16">
      <motion.div
        variants={imgVar}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <img
          src={missionImg}
          alt="Mission Java Global"
          className="w-full max-w-[560px] aspect-[4/3] object-cover rounded-md shadow"
        />
      </motion.div>

      <motion.div
        variants={textVar}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 className="text-[34px] md:text-[40px] font-semibold">Mission</h2>
        <div className="w-[120px] h-[3px] bg-[#f59e0b] mt-3 mb-5" />
        <p className="text-[15.5px] leading-[1.9] text-[#2b2b2b] max-w-[640px]">
          Menjadi perusahaan akselerator terciptanya teknologi terbaru serta
          digitalisasi demi peningkatan performa operasi customer. Kami fokus
          pada solusi otomasi & elektrik yang aman, reliabel, dan efisien,
          mulai dari desain, wiring–panel, robot system, hingga commissioning &
          training agar sistem berjalan stabil dan mudah dipelihara.
        </p>

        <a
          href="#contact"
          className="inline-flex items-center justify-center mt-6 px-6 h-[46px] rounded-[4px] border text-[15px] font-medium transition-colors duration-200"
          style={{ borderColor: "#f59e0b", color: "#f59e0b" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#f59e0b";
            (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
            (e.currentTarget as HTMLAnchorElement).style.color = "#f59e0b";
          }}
        >
          Selengkapnya
        </a>
      </motion.div>
    </div>
  );
}
