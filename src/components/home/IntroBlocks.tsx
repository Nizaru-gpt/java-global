import { motion } from "framer-motion";
import { useState } from "react";
import meeting1 from "../../assets/images/intro/meeting-1.jpg";
import businessReading from "../../assets/images/intro/business-reading.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.06 * i, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function IntroBlocks() {
  const [openMore, setOpenMore] = useState(false);

  return (
    <section id="intro" className="container-xl py-20 md:py-24">
      {/* ===== BLOK 1 ===== */}
      <div className="grid md:grid-cols-[600px_minmax(0,1fr)] gap-12 md:gap-20 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={meeting1}
            alt="Diskusi tim"
            className="w-full max-w-[600px] aspect-[16/10] object-cover rounded-md shadow-md"
          />
        </motion.div>

        <div className="max-w-[640px]">
          <motion.h3
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[42px] md:text-[50px] font-semibold"
          >
            Low Cost High Quality.
          </motion.h3>

          <div className="w-[132px] h-[3px] bg-brand-orange mt-4 mb-5" />

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-[2px] text-[#555]"
          >
            <p className="text-[18px] leading-[1.6]">
              Menurunkan <span className="font-semibold">Biaya-biaya</span> dengan cara
            </p>
            <p className="text-[18px] leading-[1.6]">
              meningkatkan <span className="font-semibold">Qualitas</span>
            </p>
            <p className="text-[18px] leading-[1.6]">
              menggunakan methode <span className="font-semibold">VA–VE</span>
            </p>
            <p className="text-[18px] leading-[1.6]">
              yaitu Value <span className="font-semibold">Analysis &amp; Value Engineering</span>
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-6"
          >
            <a href="#services" className="btn-outline-orange text-[16px] h-[48px] px-6">
              Selengkapnya
            </a>
          </motion.div>
        </div>
      </div>

      {/* ===== BLOK 2 ===== */}
      <div className="grid md:grid-cols-[minmax(0,1fr)_600px] gap-12 md:gap-20 items-center mt-24">
        <div className="max-w-[680px]">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-[36px] md:text-[42px] font-semibold"
          >
            Solusi Otomasi Industri Terdepan Untuk Kemajuan Bisnis Anda
          </motion.h3>

          <div className="w-[132px] h-[3px] bg-brand-orange mt-4 mb-5" />

          <motion.button
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            onClick={() => setOpenMore(v => !v)}
            className={`btn-accordion ${openMore ? "open is-open" : ""}`}
            aria-expanded={openMore}
          >
            <span className="chev">›</span>
            <span className="label">Selengkapnya</span>
          </motion.button>

          <div className="mt-3 md:max-w-[640px] overflow-hidden">
            <div
              className={`transition-all duration-300 ease-[cubic-bezier(.25,.1,.25,1)]
                          ${openMore ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 pointer-events-none"}`}
            >
              <div className="p-6 text-[16px] leading-[1.9] text-[#2b2b2b] bg-white border border-gray-200 rounded-[4px] shadow-sm">
                Perusahaan kami hadir sebagai pemimpin yang terpercaya dalam menyediakan
                solusi otomasi industri, dengan fokus utama pada pembaruan sistem yang
                selalu mengikuti perkembangan teknologi terkini. Kami membantu klien dengan
                memberikan informasi yang up-to-date tentang inovasi terbaru di dunia
                otomasi, sehingga mereka dapat membuat keputusan yang lebih cerdas dan
                tepat waktu untuk kemajuan bisnis mereka.
              </div>
            </div>
          </div>
        </div>

        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={businessReading}
            alt="Membaca Business"
            className="w-full max-w-[600px] aspect-[16/10] object-cover rounded-md shadow-md ml-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
