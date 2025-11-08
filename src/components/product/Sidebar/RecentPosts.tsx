import { Link } from "react-router-dom";
import type { ProductItem } from "../../../data/products";

export default function RecentPosts({ items }: { items: ProductItem[] }) {
  return (
    <div className="bg-white rounded-md shadow p-4">
      <div className="text-lg font-semibold mb-3">Recent Posts</div>
      <ul className="space-y-2">
        {items.slice(0, 5).map((it) => (
          <li key={it.slug} className="text-[15px]">
            <Link to={`/product/${it.slug}`} className="hover:underline">{it.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
