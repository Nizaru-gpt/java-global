import { motion } from "framer-motion";
import v1 from "../../assets/images/about/vision-budget.jpg";
import v2 from "../../assets/images/about/vision-capability.jpg";
import v3 from "../../assets/images/about/vision-timeline.jpg";

const cards = [
  {
    img: v1,
    title: "Kebutuhan dan Budget",
    alt: "Solusi disesuaikan kebutuhan & kemampuan investasi",
  },
  {
    img: v2,
    title: "Kapabilitas & Kredibilitas",
    alt: "Memaksimalkan kapabilitas demi kepuasan customer",
  },
  {
    img: v3,
    title: "Timeline yang jelas",
    alt: "Jadwal rapi, risiko terukur, dan komunikasi terbuka",
  },
];

const pop = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
};

export default function OurVision() {
  return (
    <section className="container-xl section">
      <h2 className="section-title">Our Vision</h2>
      <div className="w-[90px] h-[3px] bg-[#f59e0b] mt-4 mx-auto" />

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.article
            key={c.title}
            variants={pop}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={i}
            className="group relative aspect-[4/3] overflow-hidden rounded-md"
          >
            <img
              src={c.img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
            />
            {/* overlay dasar tetap */}
            <div className="absolute inset-0 bg-black/45" />

            {/* teks pertama - di tengah, akan hilang dulu saat hover */}
            <div
              className="
                absolute inset-0 flex items-center justify-center z-10
                transition-opacity duration-300
                group-hover:opacity-0
              "
            >
              <h3 className="text-white text-center text-[20px] md:text-[22px] font-semibold px-6 drop-shadow">
                {c.title}
              </h3>
            </div>

            {/* panel “tutup buku” */}
            <div
              className="
                absolute inset-0 bg-black/70 origin-left
                scale-x-0 group-hover:scale-x-100
                transition-transform duration-500 ease-[cubic-bezier(0.77,0,0.175,1)]
                z-20
              "
            />

            <div
              className="
                absolute inset-0 flex items-center justify-center
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300 delay-300
                z-30
              "
            >
              <p className="text-white text-center text-[16px] md:text-[18px] px-6 drop-shadow">
                {c.alt}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
