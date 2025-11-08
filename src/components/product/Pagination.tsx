type Props = { page: number; pages: number; onPage: (p: number) => void; };

export default function Pagination({ page, pages, onPage }: Props) {
  const nums = Array.from({ length: pages }, (_, i) => i + 1);
  const base = "text-purple-700 hover:text-purple-500 transition-colors";
  return (
    <div className="flex items-center gap-4 justify-center mt-8 text-[15px]">
      <button onClick={() => onPage(Math.max(1, page - 1))} disabled={page === 1}
        className={`${base} disabled:text-gray-400`}>Previous</button>
      {nums.map((n) => (
        <button key={n} onClick={() => onPage(n)}
          className={`${base} ${n === page ? "font-semibold" : ""}`}>
          {n}
        </button>
      ))}
      <button onClick={() => onPage(Math.min(pages, page + 1))} disabled={page === pages}
        className={`${base} disabled:text-gray-400`}>Next</button>
    </div>
  );
}
