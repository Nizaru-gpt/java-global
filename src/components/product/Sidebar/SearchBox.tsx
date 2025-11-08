export default function SearchBox({ onChange }: { onChange: (q: string) => void }) {
  return (
    <div className="bg-white rounded-md shadow p-4">
      <div className="text-lg font-semibold mb-3">Search</div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-[#f59e0b]"
      />
    </div>
  );
}
