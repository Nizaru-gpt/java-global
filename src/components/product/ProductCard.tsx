import { Link } from "react-router-dom";
import type { ProductItem } from "../../data/products";

const imgModules = import.meta.glob("/src/assets/images/product/*", { eager: true, as: "url" }) as Record<string, string>;
function getImgUrl(fileName: string) {
  const entry = Object.entries(imgModules).find(([k]) => k.endsWith("/" + fileName));
  return entry ? entry[1] : "";
}

export default function ProductCard({ item }: { item: ProductItem }) {
  const imgSrc = getImgUrl(item.image);
  const date = new Date(item.date);
  const dateFmt = date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "2-digit" });

  return (
    <article className="bg-white rounded-md shadow-md overflow-hidden hover:shadow-lg transition">
      <Link to={`/product/${item.slug}`} className="block">
        <img src={imgSrc} alt={item.title} className="w-full h-[160px] sm:h-[180px] md:h-[190px] object-contain p-4" />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/product/${item.slug}`}>
          <h3 className="text-[22px] leading-snug font-semibold mt-1 hover:underline">
            {item.title}
          </h3>
        </Link>
        <div className="text-sm text-gray-500 mt-2">By java-global | {dateFmt}</div>
      </div>
    </article>
  );
}
