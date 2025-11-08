import { motion } from "framer-motion";
import bgStats from "../../assets/images/stats/bg-stats.jpg";

const stats = [
  { value: "50+", label: "Brand Partnership" },
  { value: "20+", label: "Freelance Project" },
  { value: "29+", label: "Customers" },
  { value: "10+", label: "Area" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={bgStats}
          alt="Background statistik"
          className="w-full h-full object-cover scale-[1.05]" // sedikit diperbesar biar proporsional
        />
      </div>

      {/* Overlay lebih gelap */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative container-xl py-20 md:py-24 grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="text-[54px] md:text-[64px] font-bold text-[#f59e0b] leading-none drop-shadow-lg">
              {s.value}
            </div>
            <div className="mt-3 text-[18px] md:text-[20px] font-medium tracking-wide text-white/95">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
