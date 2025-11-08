export type DownloadItem = {
  title: string;
  desc?: string;
  size?: string;
  tags?: string[];
  driveUrl: string; // Google Drive link (bisa /view)
};

export const downloads: DownloadItem[] = [
  {
    title: "Haiwell Classic PLC Catalog (EN)",
    desc: "Katalog resmi Haiwell Classic PLC",
    size: "PDF • 12.4 MB",
    tags: ["Catalog", "PLC"],
    driveUrl: "https://drive.google.com/file/d/XXXXXXXXXXXX/view?usp=drive_link",
  },
  {
    title: "HaiwellHappy Programming Software (Installer)",
    desc: "Software pemrograman HMI/PLC",
    size: "ZIP • 145 MB",
    tags: ["Software", "Windows"],
    driveUrl: "https://drive.google.com/file/d/YYYYYYYYYYYY/view?usp=drive_link",
  },
  {
    title: "SmartLink Gateway Datasheet",
    size: "PDF • 3.1 MB",
    tags: ["Datasheet", "Gateway"],
    driveUrl: "https://drive.google.com/file/d/ZZZZZZZZZZZZ/view?usp=drive_link",
  },
  {
    title: "Card-type PLC Catalog (EN)",
    desc: "Katalog modul Card-type PLC",
    size: "PDF • 9.8 MB",
    tags: ["Catalog", "PLC"],
    driveUrl: "https://drive.google.com/file/d/AAAAAAAAAAAA/view?usp=drive_link",
  },
  {
    title: "Cloud SCADA User Manual",
    desc: "Dokumentasi & cara penggunaan",
    size: "PDF • 6.2 MB",
    tags: ["Manual", "SCADA"],
    driveUrl: "https://drive.google.com/file/d/BBBBBBBBBBBB/view?usp=drive_link",
  },
];
