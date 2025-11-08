import ProductCard from "./ProductCard";
import type { ProductItem } from "../../data/products";

export default function ProductGrid({ items }: { items: ProductItem[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it) => <ProductCard key={it.slug} item={it} />)}
    </div>
  );
}
