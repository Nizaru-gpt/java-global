export default function Categories({ items }: { items: string[] }) {
  return (
    <div className="bg-white rounded-md shadow p-4">
      <div className="text-lg font-semibold mb-3">Categories</div>
      <ul className="list-disc list-inside space-y-1 text-[15px]">
        {items.map((c) => <li key={c}>{c}</li>)}
      </ul>
    </div>
  );
}
