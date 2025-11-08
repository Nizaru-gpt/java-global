import { Link } from "react-router-dom";
import { products } from "@/data/products";

export default function ProductNavPager({ slug }: { slug: string }) {
  const idx = products.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? products[idx - 1] : undefined;
  const next = idx >= 0 && idx < products.length - 1 ? products[idx + 1] : undefined;

  return (
    <nav className="mt-10 pt-6 border-t border-gray-200 flex items-center justify-between text-sm">
      <div className="min-h-[24px]">
        {prev ? (
          <Link
            to={`/product/${prev.slug}`}
            className="text-indigo-600 hover:text-indigo-800"
          >
            Previous: {prev.title}
          </Link>
        ) : null}
      </div>
      <div className="min-h-[24px]">
        {next ? (
          <Link
            to={`/product/${next.slug}`}
            className="text-indigo-600 hover:text-indigo-800"
          >
            Next: {next.title}
          </Link>
        ) : null}
      </div>
    </nav>
  );
}
