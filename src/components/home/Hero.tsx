import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero/hero-business.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-14 md:pt-16">
      {/* background */}
      <img
        src={heroImg}
        alt="Business meeting"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* content */}
      <div className="relative container-xl min-h-[68vh] md:min-h-[78vh] flex items-center">
        <div className="max-w-[760px]">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white font-heading font-extrabold leading-[1.05]
                       text-[40px] sm:text-[56px] md:text-[70px]"
          >
            PT JAVA GLOBAL <br className="hidden sm:block" />
            OTOMASI
          </motion.h1>

          {/* underline */}
          <div className="w-[88px] h-[4px] bg-brand-orange mt-5 mb-6" />

          <motion.p
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-white/95 text-[16px] md:text-[18px] leading-relaxed max-w-[820px]"
          >
            Berkomitmen menjadi perusahaan terdepan dan terpercaya dalam
            membagikan semua informasi pembaruan sistem otomasi industri. Kami
            mengedepankan pelayanan terbaik kepada seluruh klien dalam hal
            persediaan, harga, kualitas, pengiriman, dan after sales.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mt-6"
          >
            <a href="#contact" className="btn-outline-orange text-[16px] h-[52px] px-7">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
