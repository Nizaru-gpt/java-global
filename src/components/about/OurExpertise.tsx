import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import teamBoard from "../../assets/images/about/team-board.jpg";

const longLeft = {
  hidden: { opacity: 0, x: -56 },
  show: { opacity: 1, x: 0, transition: { duration: 1.1, ease: [0.25, 0.1, 0.25, 1] } },
};
const longRight = {
  hidden: { opacity: 0, x: 56 },
  show: { opacity: 1, x: 0, transition: { duration: 1.1, ease: [0.25, 0.1, 0.25, 1] } },
};

function Bar({ label, value }: { label: string; value: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ width: `${value}%`, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } });
    }
  }, [inView, controls, value]);

  return (
    <div className="mt-5" ref={ref}>
      <div className="flex items-center justify-between text-[15px] font-medium mb-2">
        <span>{label}</span><span>{value}%</span>
      </div>
      <div className="h-[14px] rounded-full bg-gray-200 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          className="h-full bg-[#f59e0b] rounded-full"
        />
      </div>
    </div>
  );
}

export default function OurExpertise() {
  return (
    <>
      <section className="container-xl section">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={longLeft} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <h3 className="uppercase text-[#f59e0b] tracking-wide font-semibold">Our Expertise</h3>
            <h2 className="text-[34px] md:text-[42px] font-semibold mt-2">Redefining Your Business Strategy</h2>
            <div className="w-[132px] h-[3px] bg-[#f59e0b] mt-4 mb-6" />
            <p className="opacity-90 leading-[1.9]">
              Kami membantu perusahaan mengubah kebutuhan bisnis menjadi rencana otomasi
              yang terukur: audit proses, desain &amp; rekayasa, implementasi VA–VE, hingga
              analitik pasca implementasi untuk menjaga hasil tetap berkelanjutan.
            </p>

            <Bar label="Strategy Consulting" value={80} />
            <Bar label="Operations Excellence" value={70} />
            <Bar label="Management Consulting" value={60} />
          </motion.div>

          <motion.div variants={longRight} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <img src={teamBoard} alt="" className="w-full rounded-md object-cover shadow-md" />
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden">
        <img src={teamBoard} alt="" className="absolute inset-0 w-full h-full object-cover scale-[1.05]" />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative container-xl text-center text-white">
          <h3 className="text-[28px] md:text-[34px] font-semibold">We are always ready for your help</h3>
          <div className="w-[96px] h-[3px] bg-[#f59e0b] mt-4 mb-6 mx-auto" />
          <p className="max-w-3xl mx-auto opacity-90 leading-[1.9]">
            Tim Java Global mendampingi dari studi kelayakan, desain, instalasi,
            hingga pelatihan dan pemeliharaan agar sistem berjalan stabil.
          </p>
        </div>
      </section>
    </>
  );
}
