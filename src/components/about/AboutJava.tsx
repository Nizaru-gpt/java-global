import { motion } from "framer-motion";
import office from "../../assets/images/about/office-work.jpg";

const left = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
};
const right = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] } },
};

export default function AboutJava() {
  return (
    <section className="container-xl section">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div variants={left} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
          <img src={office} alt="Office" className="w-full object-cover rounded-md shadow-md" />
        </motion.div>

        <motion.div variants={right} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
          <h2 className="text-[36px] md:text-[44px] font-semibold">About Java</h2>
          <div className="w-[132px] h-[3px] bg-[#f59e0b] mt-4 mb-6" />
          <p className="text-[16.5px] leading-[1.9] opacity-90">
            <strong>Java Global</strong> merupakan perusahaan solusi <em>automation</em> dan
            elektrik yang beroperasi sejak 2023, didukung pengalaman tim sejak 2006 di
            berbagai industri. Kami menyediakan sistem otomasi, rekayasa elektrik, dan
            pengadaan <em>spare part</em> dengan standar kualitas, keselamatan, dan keandalan
            yang konsisten.
          </p>
          <p className="text-[16.5px] leading-[1.9] opacity-90 mt-4">
            Dengan jaringan layanan nasional, kami membantu pelanggan merencanakan,
            mengimplementasikan, dan memelihara solusi—mulai dari otomotif, makanan &amp; minuman,
            tekstil, plastik, hingga sektor lainnya—agar operasional makin efisien dan terukur.
          </p>

          <a href="/contact" className="btn-outline-orange mt-6 inline-flex">Selengkapnya</a>
        </motion.div>
      </div>
    </section>
  );
}
