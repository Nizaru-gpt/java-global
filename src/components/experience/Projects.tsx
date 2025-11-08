import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type Project = {
  headline: string;
  title: string;
  client: string;
  thumb: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const headlines = [
      "FABRIKASI PANEL WIRING, INSTALL PROGRAM AUTO DRUM TEST MACHINE",
      "RELAYOUT ROBOT SPOT WELDING, TOUCH UP TEACHING ROBOT (3 UNIT)",
      "INSTALL, INTEGRASI UPSETTER & TEACHING ROBOT HANDLING-FORGING (1 UNIT)",
      "FABRIKASI PANEL, WIRING, INSTALL ROBOT TOUCH UP EX SKID (2 UNIT)",
      "WIRING, INSTALLATION ROBOT SPRAY FOR REKIZAI (2 UNIT)",
      "INSTALL WATER COOLER WIRING AND COMISSIONING TEST",
      "TROUBLE SHOOTING REACTION INJECTION MOLDING DAN RENEWAL PLC FX-SERIES",
      "TROUBLE SHOOTING ENCODER C/V SPRAY BOOTH PAINTING LINE 1",
      "TEACHING TOUCH UP & PROBLEM SOLVING ROBOT SEALER GUN",
      "SERVICE INJECTION NITROGEN BALANCER & REGREASING ROBOT",
      "RENEWAL CONTROL PANEL INJECTION MACHINE",
      "INSTALLATION ROBOT PAINTING LINE 2",
      "COMMISSIONING ROBOT FORGING LINE",
      "OPTIMIZATION PLC SYSTEM FOR PRESS MACHINE",
      "UPGRADE SCADA MONITORING SYSTEM",
    ];

    const titles = [
      "PROJECT SPM",
      "ROBOT SPOT",
      "ROBOT FORGING",
      "ROBOT SPRAY",
      "ROBOT SPRAY",
      "INSTALL COOLER",
      "INJECTION MOLDING",
      "SPRAY BOOTH C/V",
      "HYUNDAI ROBOT",
      "HYUNDAI ROBOT",
      "INJECTION CONTROL",
      "PAINT LINE 2",
      "ROBOT FORGING LINE",
      "PLC OPTIMIZATION",
      "SCADA MONITOR",
    ];

    const clients = [
      "PAKO GROUP (TOPY)",
      "MEKAR ARMADA JAYA",
      "FEDERAL NITTAN INDONESIA",
      "ASTRA DAIHATSU MOTOR",
      "FUJISEAT INDONESIA",
      "TMMIN",
      "NIHON PLAST INDONESIA",
      "SOLUSI REKATAMA MAKMUR",
      "MEKAR ARMADA JAYA",
      "INGRESS TECHNOLOGY INDONESIA",
      "NIHON PLAST INDONESIA",
      "ASTRA DAIHATSU MOTOR",
      "FEDERAL NITTAN INDONESIA",
      "TMMIN",
      "MEKAR ARMADA JAYA",
    ];

    const list: Project[] = [];

    // jumlah project sesuai panjang data
    for (let i = 1; i <= headlines.length; i++) {
      const img = new URL(
        `../../assets/images/experience/robot-${i}.jpg`,
        import.meta.url
      ).href;

      list.push({
        headline: headlines[i - 1],
        title: titles[i - 1],
        client: clients[i - 1],
        thumb: img,
      });
    }

    setProjects(list);
  }, []);

  return (
    <section className="relative">
      <h3 className="text-center text-[32px] md:text-[34px] font-semibold">
        Our Project
      </h3>
      <div className="w-[64px] h-[3px] bg-[#f59e0b] mx-auto mt-3 mb-10" />

      {/* Headline + gambar ikut drag */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1.1}
        grabCursor
        simulateTouch
        threshold={6}
        className="cursor-grab active:cursor-grabbing"
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((p, idx) => (
          <SwiperSlide key={idx} className="select-none">
            <div className="flex flex-col items-center text-center px-4">
              {/* headline ikut scroll */}
              <p className="text-[13px] md:text-[14px] tracking-wide uppercase opacity-75 mb-4 leading-relaxed">
                {p.headline}
              </p>

              {/* konten bawah */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={p.thumb}
                  alt={p.title}
                  className="w-20 h-20 rounded-full object-cover ring-2 ring-white shadow"
                />
                <div className="text-left">
                  <div className="text-[18px] font-semibold">{p.title}</div>
                  <div className="text-[#90a3b4] text-[13.5px] -mt-0.5">
                    {p.client}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
