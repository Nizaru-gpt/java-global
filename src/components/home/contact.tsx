import { FormEvent, useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("Dummy submit:", Object.fromEntries(new FormData(e.currentTarget) as any));
      alert("Terima kasih! Pesan kamu sudah terkirim (dummy).");
      e.currentTarget.reset();
    }, 800);
  };

  return (
    <section id="contact" className="container-xl pb-20">
      <form onSubmit={onSubmit} className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <input name="nama" placeholder="Nama" className="w-full border rounded-md p-3" required />
          <input type="email" name="email" placeholder="Email" className="w-full border rounded-md p-3" required />
          <textarea name="pesan" placeholder="Pesan" rows={6} className="w-full border rounded-md p-3" required />
          <button disabled={loading} className="inline-flex px-5 py-3 bg-brand-orange text-white rounded-md">
            {loading ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </div>

        <div className="space-y-3">
          <h4 className="font-semibold">Get In Touch</h4>
          <p className="text-sm">
            Vila Mutiara Cikarang Blok B1 No.41 RT.014 RW.007 Desa Ciantra, Cikarang Selatan
          </p>
          <a className="text-sm underline" href="https://wa.me/620000000000" target="_blank">WhatsApp</a>
        </div>
      </form>
    </section>
  );
}
