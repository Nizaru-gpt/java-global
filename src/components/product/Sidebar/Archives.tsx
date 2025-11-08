export default function Archives({ items }: { items: { label: string }[] }) {
  return (
    <div className="bg-white rounded-md shadow p-4">
      <div className="text-lg font-semibold mb-3">Archives</div>
      <ul className="list-disc list-inside space-y-1 text-[15px]">
        {items.map((a) => (
          <li key={a.label} className="hover:underline cursor-pointer">{a.label}</li>
        ))}
      </ul>
    </div>
  );
}
