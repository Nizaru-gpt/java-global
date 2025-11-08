import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import sana from "../../assets/images/clients/sana.jpg";
import kelvin from "../../assets/images/clients/kelvin.jpg";
import john from "../../assets/images/clients/john.jpg";


const testimonials = [
  {
    name: "Sana Goel",
    role: "Manager",
    quote:
      "Tim Java Global responsif, presisi, dan pengirimannya tepat waktu.",
    photo: sana,
    objectPos: "object-center",
  },
  {
    name: "Kelvin James",
    role: "CEO",
    quote:
      "Kolaborasi yang efisien, dokumentasi rapi, dan hasil di lapangan sesuai ekspektasi.",
    photo: kelvin,
    objectPos: "object-top", // supaya kepala tidak terpotong
  },
  {
    name: "John Thomson",
    role: "Accountant",
    quote:
      "Pelaporan dan integrasi sistemnya mempermudah analisis biaya dan kontrol.",
    photo: john,
    objectPos: "object-center",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="container-xl py-16 md:py-20">
      <div className="text-center">
        <h2 className="text-[32px] md:text-[34px] font-semibold">Our Clients</h2>
        {/* garis oranye kecil di tengah */}
        <div className="heading-underline mt-3" />
      </div>

      <div className="mt-10 max-w-[760px] mx-auto rounded-md border border-gray-200 bg-white shadow-sm p-6 md:p-8">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          style={{ paddingBottom: 28 }} // ruang untuk titik pagination
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.name}>
              <div className="text-center">
                <p className="opacity-80 leading-[1.9] max-w-[640px] mx-auto">
                  {t.quote}
                </p>

                {/* AVATAR */}
                <div className="mt-6">
                  <div className="mx-auto w-[72px] h-[72px] md:w-[84px] md:h-[84px] rounded-full overflow-hidden ring-2 ring-white shadow-[0_0_0_3px_rgba(243,244,246,1)]">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className={`w-full h-full object-cover ${t.objectPos}`}
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-3 font-semibold text-[18px] md:text-[20px]">
                    {t.name}
                  </div>
                  <div className="text-[14px] md:text-[15px] font-medium text-[#f59e0b]">
                    {t.role}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
