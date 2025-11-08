import { motion } from "framer-motion";
import {
  UserRound,
  LineChart,
  Cpu,
  Award,
  Factory,
  Globe2,
} from "lucide-react";

const items = [
  {
    icon: UserRound,
    title: "Pengalaman Sejak 2006",
    desc: "Berpengalaman lebih dari 15 tahun di berbagai bidang industri.",
  },
  {
    icon: LineChart,
    title: "Beroperasi Sejak 2023",
    desc: "Diresmikan dengan visi memberi solusi terbaik dalam otomasi dan elektrik.",
  },
  {
    icon: Cpu,
    title: "Ahli Di Bidang Otomasi Dan Elektrik",
    desc: "Menyediakan spare part dan sistem rekayasa engineer yang terdepan.",
  },
  {
    icon: Award,
    title: "Layanan Terpercaya",
    desc: "Telah dipercaya oleh banyak perusahaan di berbagai sektor industri.",
  },
  {
    icon: Factory,
    title: "Penyedia Solusi Untuk Berbagai Industri",
    desc: "Otomotif, makanan & minuman, tekstil, plastik, dan lainnya.",
  },
  {
    icon: Globe2,
    title: "Jangkauan Layanan Nasional",
    desc: "Mendukung perusahaan di seluruh Indonesia dengan solusi berkualitas.",
  },
];

// animasi halus muncul dari bawah
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.08 * i,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

export default function WhyUs() {
  return (
    <section id="why" className="container-xl section">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="section-title"
      >
        Kenapa Harus Kami ?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="section-sub"
      >
        Pengalaman dan Kepercayaan untuk Masa Depan Industri Anda
      </motion.p>

      <div className="heading-underline mt-4 mb-10" />

      {/* grid item */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-12">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={title}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="flex items-start gap-5"
          >
            {/* kotak icon */}
            <div className="w-[68px] h-[68px] bg-[#f59e0b] rounded-md flex items-center justify-center shadow-md shrink-0">
              <Icon className="text-white" size={34} strokeWidth={2.5} />
            </div>

            {/* teks */}
            <div>
              <h4 className="text-[19px] md:text-[21px] font-semibold leading-snug mb-1">
                {title}
              </h4>
              <p className="text-[16px] text-[#2b2b2b]/80 leading-relaxed">
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
