import { ExternalLink, Download } from "lucide-react";
import type { DownloadItem } from "@/data/downloads";

function toDirectDrive(viewUrl: string) {
  try {
    const u = new URL(viewUrl);
    if (/\/file\/d\//.test(u.pathname)) {
      const id = u.pathname.split("/")[3];
      return `https://drive.google.com/uc?export=download&id=${id}`;
    }
    return viewUrl;
  } catch {
    return viewUrl;
  }
}

export default function DownloadList({ items }: { items: DownloadItem[] }) {
  return (
    <section className="container-xl py-14">
      {/* Responsive grid: 1 / 2 / 3 kolom. Tambah 5 item pun otomatis wrap. */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => {
          const direct = toDirectDrive(it.driveUrl);
          return (
            <article
              key={i}
              className="
                rounded-xl border border-black/5 bg-white shadow-sm hover:shadow-md transition-all
                p-6 grid grid-rows-[1fr_auto] min-h-[280px]
              "
            >
              {/* ROW 1: konten atas (judul, deskripsi, chips + size) */}
              <div>
                <h3 className="text-lg font-semibold leading-tight">{it.title}</h3>
                {it.desc && <p className="mt-1.5 text-sm text-black/80">{it.desc}</p>}

                {/* BARIS CHIPS + SIZE: dua kolom + tinggi seragam agar sejajar antar card */}
                <div className="mt-2 grid grid-cols-[1fr_auto] gap-2 items-start min-h-[44px]">
                  <div className="flex flex-wrap items-start gap-2">
                    {it.tags?.map((t) => (
                      <span
                        key={t}
                        className="h-7 inline-flex items-center px-2 rounded bg-black/5 text-[11px] uppercase tracking-wide leading-none"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs opacity-70 self-start leading-7">
                    {it.size ?? "\u00A0"}
                  </span>
                </div>
              </div>

              {/* ROW 2: tombol selalu sejajar di bawah */}
              <div className="mt-6 grid grid-cols-2 gap-2 row-start-2">
                <a
                  href={it.driveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-orange h-10 text-sm inline-flex items-center justify-center gap-2"
                  title="Open in Google Drive (view)"
                >
                  <ExternalLink size={16} /> View
                </a>
                <a
                  href={direct}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-orange h-10 text-sm inline-flex items-center justify-center gap-2"
                  title="Download"
                >
                  <Download size={16} /> Download
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
