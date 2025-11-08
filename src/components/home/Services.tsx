// src/components/home/Services.tsx
import { motion } from "framer-motion";
import bgServices from "../../assets/images/services/bg-services.jpg";

const services = [
  { key: "market",   title: "Market Research",     desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer" },
  { key: "finance",  title: "Finance Management",  desc: "It is a long established fact that a reader will be distracted by the readable content of a page" },
  { key: "program",  title: "Program Management",  desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed" },
  { key: "planning", title: "Business Planning",   desc: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this." },
  { key: "strategy", title: "Strategic Approach",  desc: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures" },
  { key: "analytic", title: "Analytic Solutions",  desc: "The generated Lorem Ipsum is therefore always free from repetition, injected humour" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: 0.06 * i, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const ORANGE = "#f59e0b";

// === ukuran ikon besar sesuai desain (64px) ===
const iconProps = { width: 64, height: 64, viewBox: "0 0 24 24" } as const;

function IconMarket() {
  return (
    <svg {...iconProps} fill="none" className="mt-[2px]" aria-hidden>
      <path d="M3 18V6" stroke={ORANGE} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M3 18h18" stroke={ORANGE} strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M5 15l4-4 3 3 5-6 3 3"
        stroke={ORANGE}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5 15h7l5-6" stroke={ORANGE} strokeWidth="2.4" opacity=".45" />
    </svg>
  );
}

function IconFinance() {
  return (
    <svg {...iconProps} fill="none" className="mt-[2px]" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke={ORANGE} strokeWidth="2.4" />
      <path
        d="M14.5 9.5c0-.97-.9-1.75-2.5-1.75S9.5 8.53 9.5 9.5 10.4 11 12 11s2.5.53 2.5 1.5S13.6 14 12 14s-2.5-.78-2.5-1.75"
        stroke={ORANGE}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path d="M12 6.3v11.4" stroke={ORANGE} strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

function IconProgram() {
  return (
    <svg {...iconProps} fill="none" className="mt-[2px]" aria-hidden>
      <path d="M3 20h18" stroke={ORANGE} strokeWidth="2.4" strokeLinecap="round" />
      <rect x="5" y="12" width="3" height="6" fill={ORANGE} rx="1" />
      <rect x="10.5" y="9" width="3" height="9" fill={ORANGE} rx="1" />
      <rect x="16" y="6" width="3" height="12" fill={ORANGE} rx="1" />
    </svg>
  );
}

function IconPlanning() {
  return (
    <svg {...iconProps} fill="none" className="mt-[2px]" aria-hidden>
      <path d="M12 3a9 9 0 0 1 9 9h-9V3z" fill={ORANGE} />
      <path d="M12 12V3a9 9 0 1 0 9 9h-9z" stroke={ORANGE} strokeWidth="2.4" />
    </svg>
  );
}

function IconStrategy() {
  return (
    <svg {...iconProps} fill="none" className="mt-[2px]" aria-hidden>
      <path
        d="M7 3h7l4 4v14H7V3z"
        stroke={ORANGE}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M14 3v4h4" stroke={ORANGE} strokeWidth="2.4" />
      <path d="M9 12h6" stroke={ORANGE} strokeWidth="2.4" strokeLinecap="round" />
      <path d="M9 16h3" stroke={ORANGE} strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M12 10l2-2 2 2"
        stroke={ORANGE}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconAnalytic() {
  return (
    <svg {...iconProps} fill="none" className="mt-[2px]" aria-hidden>
      <path d="M3 20h18" stroke={ORANGE} strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M5 16l4-5 3 3 5-6"
        stroke={ORANGE}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="11" r="1.7" fill={ORANGE} />
      <circle cx="12" cy="14" r="1.7" fill={ORANGE} />
      <circle cx="17" cy="8" r="1.7" fill={ORANGE} />
    </svg>
  );
}

function PickIcon({ k }: { k: string }) {
  switch (k) {
    case "market":
      return <IconMarket />;
    case "finance":
      return <IconFinance />;
    case "program":
      return <IconProgram />;
    case "planning":
      return <IconPlanning />;
    case "strategy":
      return <IconStrategy />;
    case "analytic":
      return <IconAnalytic />;
    default:
      return <IconMarket />;
  }
}

export default function Services() {
  return (
    <section id="services" className="relative section text-white overflow-hidden">
      {/* Background */}
      <img
        src={bgServices}
        alt="Latar belakang layanan"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative container-xl">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="section-title text-white"
        >
          Our Services
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="section-sub max-w-3xl mx-auto text-white/85"
        >
          It is a long established fact that a reader will be distracted by the readable
          content of a page
        </motion.p>

        <div className="heading-underline mt-4 mb-8" />

        {/* Cards */}
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              custom={idx + 2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="glass p-6 md:p-7 rounded-xl"
            >
              <div className="flex items-start gap-5">
                <PickIcon k={s.key} />
                <div>
                  <h3 className="text-[18px] font-semibold mb-2">{s.title}</h3>
                  <p className="text-white/85 leading-relaxed text-[14.5px]">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
