import DownloadHero from "@/components/download/DownloadHero";
import DownloadList from "@/components/download/DownloadList";
import { downloads } from "@/data/downloads";

export default function Download() {
  return (
    <main className="bg-white text-black min-h-screen">
      <DownloadHero />
      <DownloadList items={downloads} />
    </main>
  );
}
