import { useMemo, useState } from "react";
import ProductHero from "../../components/product/ProductHero";
import ProductGrid from "../../components/product/ProductGrid";
import Pagination from "../../components/product/Pagination";
import SearchBox from "../../components/product/Sidebar/SearchBox";
import RecentPosts from "../../components/product/Sidebar/RecentPosts";
import Archives from "../../components/product/Sidebar/Archives";
import Categories from "../../components/product/Sidebar/Categories";
import { products as ALL } from "../../data/products";

const PER_PAGE = 6;

export default function Product() {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const keyword = q.trim().toLowerCase();
    return !keyword ? ALL : ALL.filter((p) => p.title.toLowerCase().includes(keyword));
  }, [q]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const start = (page - 1) * PER_PAGE;
  const pageItems = filtered.slice(start, start + PER_PAGE);

  const recent = [...ALL].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <main>
      <ProductHero />
      <section className="container-xl py-10">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          <div>
            <ProductGrid items={pageItems} />
            <Pagination page={page} pages={pages} onPage={setPage} />
          </div>
          <aside className="space-y-6">
            <SearchBox onChange={(text) => { setPage(1); setQ(text); }} />
            <RecentPosts items={recent} />
            <Archives items={[{ label: "July 2025" }, { label: "June 2025" }, { label: "May 2025" }]} />
            <Categories items={["Uncategorized"]} />
          </aside>
        </div>
      </section>
    </main>
  );
}
