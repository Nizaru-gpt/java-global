// src/components/experience/Team.tsx
import adit from "../../assets/images/experience/adit.jpg";
import nizar from "../../assets/images/experience/nizar.jpg";
import makhdum from "../../assets/images/experience/makhdum.jpg";

const team = [
  {
    name: "Makhdum",
    role: "Project Manager",
    photo: makhdum,
  },
  {
    name: "Nizar",
    role: "Manager",
    photo: nizar,
  },
  {
    name: "Adit",
    role: "Director",
    photo: adit,
  },
];

export default function Team() {
  return (
    <section>
      {/* Heading */}
      <h3 className="text-center text-[32px] md:text-[34px] font-semibold">
        Meet Our Team
      </h3>
      <div className="w-[72px] h-[3px] bg-[#f59e0b] mx-auto mt-3 mb-10" />

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((t) => (
          <div
            key={t.name}
            className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Foto dengan tampilan lebih besar */}
            <div className="overflow-hidden">
              <img
                src={t.photo}
                alt={t.name}
                className="w-full h-[340px] object-cover object-top scale-105 hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Nama dan role */}
            <div className="p-6 text-center">
              <div className="text-[20px] font-semibold text-gray-900">
                {t.name}
              </div>
              <div className="text-gray-500 mt-1">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
