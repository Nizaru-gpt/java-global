import { useId } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactHero from "./ContactHero";

const COMPANY = "PT. Global Sahabat Otomasi";
const ADDRESS =
  "Jl. Industri Sel. IV blok GG.5.O KIJ, RW.2, Pasirsari, Cikarang Selatan, Bekasi Regency, West Java 17550";

const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(`${COMPANY}, ${ADDRESS}`) +
  "&z=17&output=embed";

export default function ContactSection() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const msgId = useId();

  return (
    <>
      <ContactHero />

      {/* FORM */}
      <section className="container-xl py-14 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">Get In Touch</h2>
        <div className="mx-auto mt-2 h-[3px] w-24 bg-[#f59e0b]" />

        <form
          className="mt-10 grid gap-4 max-w-3xl mx-auto text-left"
          onSubmit={(e) => {
            e.preventDefault();
            alert("This form is a demo. Hook it to your backend/email service.");
          }}
        >
          <input
            id={nameId}
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
          />
          <input
            id={emailId}
            type="email"
            placeholder="Email*"
            className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
          />
          <input
            id={phoneId}
            type="tel"
            placeholder="Mobile*"
            className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]"
          />
          <textarea
            id={msgId}
            placeholder="Message"
            rows={6}
            className="w-full border border-gray-300 rounded-sm px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#f59e0b] resize-y"
          />
          <button
            type="submit"
            className="mx-auto border border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black transition px-6 py-2 text-sm font-medium"
          >
            Send Message
          </button>
        </form>

        {/* INFO */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3 max-w-5xl mx-auto">
          <Info
            icon={<MapPin className="w-6 h-6" />}
            title="Address"
            desc={ADDRESS}
          />
          <Info
            icon={<Phone className="w-6 h-6" />}
            title="Phone"
            desc="+62 812-0000-0000"
          />
          <Info
            icon={<Mail className="w-6 h-6" />}
            title="Email"
            desc="contact@javaglobal.com"
          />
        </div>
      </section>

      {/* MAP */}
      <section className="container-xl pb-16">
        <div className="relative w-full rounded-md overflow-hidden shadow-md border border-black/5 h-[340px] md:h-[420px] mx-auto max-w-5xl">
          <iframe
            title={`${COMPANY} Location`}
            src={MAP_EMBED_SRC}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function Info({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="grid place-items-center h-12 w-12 rounded-full bg-[#f59e0b] text-black mb-3">
        {icon}
      </div>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-sm opacity-90 max-w-[280px]">{desc}</p>
    </div>
  );
}
