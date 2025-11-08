import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import type { ProductDetail as Detail } from "@/data/productDetails";
import { productDetails } from "@/data/productDetails";
import SearchBox from "@/components/product/Sidebar/SearchBox";
import RecentPosts from "@/components/product/Sidebar/RecentPosts";
import Archives from "@/components/product/Sidebar/Archives";
import Categories from "@/components/product/Sidebar/Categories";
import ProductNavPager from "@/components/product/ProductNavPager";
import ProductDetailHero from "@/components/product/ProductDetailHero";
import ReactMarkdown from "react-markdown";


const IMG = import.meta.glob("/src/assets/images/product/**/*", {
  eager: true,
  as: "url",
}) as Record<string, string>;

const resolveImg = (p: string) => {
  const full = "/src/assets/images/" + p;
  if (Object.prototype.hasOwnProperty.call(IMG, full)) return IMG[full];
  const hit = Object.entries(IMG).find(([k]) => k.endsWith("/" + p));
  return hit ? hit[1] : "";
};

export default function ProductDetail() {
  const { slug = "" } = useParams();

  const idx = useMemo(() => products.findIndex((p) => p.slug === slug), [slug]);
  const item = idx >= 0 ? products[idx] : undefined;
  const detail = useMemo<Detail | undefined>(
    () => productDetails.find((d) => d.slug === slug),
    [slug]
  );

  if (!item) {
    return (
      <main className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-gray-600">Product not found.</p>
        <Link to="/product" className="text-indigo-600 hover:text-indigo-800">
          ← Back to Product
        </Link>
      </main>
    );
  }

  const mainImage = resolveImg(`product/${item.image}`);

  const recent = useMemo(
    () => [...products].sort((a, b) => +new Date(b.date) - +new Date(a.date)),
    []
  );

  return (
    <main>
      <ProductDetailHero title={item.title} />

      <section className="container-xl py-10">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">
          <article>
            <h1 className="text-3xl font-semibold text-gray-900">
              {item.title}
            </h1>

            {detail?.postMeta && (
              <p className="mt-2 text-sm text-gray-500">
                Posted on {detail.postMeta.published}
                {detail.postMeta.updated ? ` • ${detail.postMeta.updated}` : ""}{" "}
                by {detail.postMeta.author}
              </p>
            )}

            {mainImage && (
              <div className="mt-6 mr-auto max-w-[420px] overflow-hidden rounded-md border border-gray-200 bg-white">
                <img
                  src={mainImage}
                  alt={item.title}
                  className="w-full h-[210px] object-contain p-4"
                  loading="lazy"
                />
              </div>
            )}

            {(detail?.namePlateTitle || detail?.namePlateSubtitle) && (
              <section className="mt-6">
                {detail?.namePlateTitle && (
                  <h2 className="text-xl font-semibold">
                    {detail.namePlateTitle}
                  </h2>
                )}
                {detail?.namePlateSubtitle && (
                  <div className="text-gray-700 whitespace-pre-line mt-1">
                    <ReactMarkdown
                      components={{
                        p: ({ node, ...props }) => <p {...props} />,
                        a: ({ node, ...props }) => (
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-700 hover:text-sky-900 underline decoration-sky-300"
                            {...props}
                          />
                        ),
                        strong: ({ node, ...props }) => (
                          <strong className="font-semibold" {...props} />
                        ),
                        ul: ({ node, ...props }) => (
                          <ul className="list-disc pl-6" {...props} />
                        ),
                        ol: ({ node, ...props }) => (
                          <ol className="list-decimal pl-6" {...props} />
                        ),
                        li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                        br: () => <br />,
                      }}
                    >
                      {detail.namePlateSubtitle}
                    </ReactMarkdown>
                  </div>
                )}
              </section>
            )}

            {detail?.skuList?.length ? (
              <p className="mt-3 text-sm">
                <span className="font-semibold">SKU</span>{" "}
                {detail.skuList.join(" ")}
              </p>
            ) : null}

            {/* GALLERY */}
            {detail?.galleryImages?.length ? (
              <section className="mt-8">
                <div className="flex flex-col gap-6 max-w-[960px]">
                  {detail.galleryImages.map((g, i) => (
                    <div
                      key={i}
                      className="rounded-md border border-gray-200 bg-white overflow-hidden"
                    >
                      <img
                        src={resolveImg(g)}
                        alt={`Detail ${i + 1}`}
                        className="w-full h-auto object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {/* VIDEO */}
            {detail?.videos?.length ? (
              <section className="mt-8 space-y-4">
                {detail.videos.map((v, i) => (
                  <video
                    key={i}
                    controls
                    className="w-full max-w-[960px] rounded-md border border-gray-200"
                  >
                    <source src={resolveImg(v)} type="video/mp4" />
                  </video>
                ))}

                {/* RESOURCES */}
                {detail.resources?.length ? (
                  <div className="pt-2">
                    <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] leading-tight">
                      {detail.resources.map((r, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="inline-block w-3 h-3 rounded-full bg-lime-500" />
                          <a
                            href={r.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-700 hover:text-sky-900 underline decoration-sky-300"
                          >
                            {r.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </section>
            ) : null}

            {/* TABEL SPESIFIKASI */}
            {detail?.specTableImage ? (
              <section className="mt-8">
                <div className="mr-auto w-full max-w-[960px] overflow-auto rounded-md border border-gray-200 bg-white">
                  <img
                    src={resolveImg(detail.specTableImage)}
                    alt="Specification table"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </section>
            ) : null}

            {detail?.specTableImages?.length ? (
              <section className="mt-8 space-y-6">
                {detail.specTableImages.map((t, i) => (
                  <div
                    key={i}
                    className="mr-auto w-full max-w-[960px] overflow-auto rounded-md border border-gray-200 bg-white"
                  >
                    <img
                      src={resolveImg(t)}
                      alt={`Specification table ${i + 1}`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </section>
            ) : null}

            <p className="mt-6 text-sm text-gray-600">
              Posted in <span className="underline">Uncategorized</span>
            </p>

            <ProductNavPager slug={slug} />
          </article>

          <aside className="space-y-6">
            <SearchBox onChange={() => {}} />
            <RecentPosts items={recent} />
            <Archives
              items={[
                { label: "July 2025" },
                { label: "June 2025" },
                { label: "May 2025" },
              ]}
            />
            <Categories items={["Uncategorized"]} />
          </aside>
        </div>
      </section>
    </main>
  );
}
