import { motion } from "framer-motion";
import heroCity from "../../assets/images/about/hero-city.jpg";

const fade = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function AboutHero() {
  return (
    
    <section className="relative h-[46vh] md:h-[56vh] overflow-hidden">
      <img src={heroCity} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/55" />

     
      <div className="relative container-xl h-full flex items-center">
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          className="translate-y-[6%] text-white"
        >
          <h1 className="text-4xl md:text-5xl font-semibold">About</h1>
          <div className="w-28 h-[3px] bg-[#f59e0b] mt-3" />
        </motion.div>
      </div>
    </section>
  );
}
