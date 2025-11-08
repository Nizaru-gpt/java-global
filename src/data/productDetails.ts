// types & shapes
export type ProductDetail = {
  slug: string;
  postMeta: { published: string; updated?: string; author: string };
  namePlateTitle?: string;
  namePlateSubtitle?: string;
  skuList?: string[];
  specTableImage?: string;
  specTableImages?: string[];
  galleryImages?: string[];
  videos?: string[];
  resources?: Array<{ label: string; url: string }>;
  sidebar?: {
    related?: Array<{ title: string; slug: string }>;
    categories?: string[];
    downloads?: Array<{ label: string; file: string }>;
  };
};


// meta presets
const JULY_14 = { published: "July 14, 2025", updated: "July 14, 2025", author: "java-global" };
const JULY_2 = { published: "July 2, 2025", updated: "July 2, 2025", author: "java-global" };
const JULY_2_TO_5 = { published: "July 2, 2025", updated: "July 5, 2025", author: "java-global" };
const JUNE_11 = { published: "June 11, 2025", updated: "June 11, 2025", author: "java-global" };

// data
export const productDetails: ProductDetail[] = [
  {
    slug: "emergency-stop",
    postMeta: JULY_14,
    namePlateSubtitle: "Protection Emergency",
    skuList: ["GXB2-ER60", "GXB2-ER90", "GXB2-EB70F", "GXB2-EB90F", "GXB2-EB65/80F", "GXB2-EB48/56F"],
    specTableImage: "product/tabel/emergency-stop-table.jpg",
    sidebar: {
      related: [
        { title: "Accessories For Pilot Lamp & Push Button", slug: "pilot-lamp-push-button" },
        { title: "Accessories For Terminal UK", slug: "terminal-uk" },
      ],
      categories: ["Accessories", "Push Button"],
    },
  },

  {
    slug: "pilot-lamp-push-button",
    postMeta: JULY_14,
    namePlateSubtitle:
      "• Lampu Neon untuk pilot lamp / Push button lamp, 22/25/30MM\n\n" +
      "• Lampu LED untuk pilot lamp / Push button lamp, 22/25/30mm\n\n" +
      "• Lampu LED untuk pilot lamp / Push button lamp, 16mm\n\n" +
      "• Legend Plate untuk 22mm, 25mm, 30mm\n\n" +
      "• Protection Cover untuk Emergency Push Button 22mm (55 × 2.5mm)\n\n" +
      "• Protection Cover untuk 16mm\n  › Rectangular (persegi panjang)\n  › Circular (bulat) & Square (persegi)\n\n" +
      "• Hole Extension / penutup lubang, size 22mm",
    skuList: ["NEON-22", "BS06", "BS02", "LAY5-22", "LAY5-22/PC", "LAY5-16/PCR", "LAY5-16/PCS", "FPP-22"],
    specTableImage: "product/tabel/pilot-lamp-push-button-table.jpg",
  },

  {
    slug: "terminal-uk",
    postMeta: JULY_14,
    namePlateSubtitle:
      "• End cover / end plate\n" +
      "• Stopper untuk terminal UK\n" +
      "• Separator\n" +
      "• Jumper / Fixed Bridge per strip 10pcs\n" +
      "• Strip Number",
    skuList: [
      "D-TUK3/10",
      "D-TUK16",
      "E/CUK",
      "SUK-E",
      "TUK-B1",
      "TFBI 10-5",
      "TFBI 10-6",
      "TFBI 10-8",
      "TFBI 10-10",
      "TFBI 10-12",
      "ZB5",
      "ZB6",
      "ZB8",
      "ZB10",
      "ZB12",
    ],
    specTableImage: "product/tabel/terminal-uk-table.jpg",
  },

  {
    slug: "axial-blower-fan",
    postMeta: JULY_14,
    namePlateSubtitle: "• Model: Sleeve, Ball Bearings",
    skuList: [
      "XF1222ASH",
      "XF1222ABH",
      "XF1232ASH",
      "XF1232ABH",
      "XF1552ASH",
      "XF1552ABH",
      "XF15051ASH",
      "XF15051ABH",
      "XF1752ASH",
      "XF1752ABH",
      "XF20060MBL-2",
      "XF22060HBL-1",
      "PF28080-2E",
      "PF22580R",
    ],
    specTableImage: "product/tabel/axial-blower-fan-table.jpg",
  },

  {
    slug: "solid-state-relay",
    postMeta: JULY_14,
    namePlateSubtitle: "• 1 Phase / 3 Phase\n• 90–250 VAC / 24–480 VAC",
    skuList: [
      "FSSR-10AA",
      "FSSR-25AA",
      "FSSR-40AA",
      "FSSR-60AA",
      "FSSR-80AA",
      "FSSR-100AA",
      "FTSSR-10AA",
      "FTSSR-25AA",
      "FTSSR-40AA",
      "FTSSR-60AA",
      "FTSSR-80AA",
      "FTSSR-100AA",
      "FTSSR-120AA",
    ],
    specTableImage: "product/tabel/solid-state-relay-table.jpg",
  },

  {
    slug: "brass-cable-gland",
    postMeta: JULY_14,
    namePlateTitle: "A1/A2 Series Brass Cable Gland (Without Armour)",
    namePlateSubtitle:
      "• Design Specification Standard: BS-6121 : Part I : 1989\n" +
      "• Ingress Protection: IP66\n" +
      "• Cable Type: Unarmoured\n" +
      "• Material:\n  › For Gland: Brass\n  › For Sealing: Thermoplastic Elastomer",
    skuList: [
      "AAG0020SB",
      "AAG0020LB",
      "AAG0025SB",
      "AAG0025LB",
      "AAG0032SB",
      "AAG0032LB",
      "AAG0040SB",
      "AAG0040LB",
      "AAG0050SB",
      "AAG0050LB",
      "AAG0063SB",
      "AAG0063LB",
      "AAG0075SB",
      "AAG0075LB",
      "AAG0090LB",
      "AAG0100LB",
      "C-2025",
      "20SCW",
      "25SCM",
      "32LCW",
      "C40-53",
      "CW32",
      "40MM-L",
      "C5068",
      "C-7300",
      "63SCW",
      "63LCW",
      "88L",
      "AET0020",
      "AET0025B",
      "AET0032B",
      "AET0040B",
      "AET0050B",
      "AET0063B",
      "AET0075B",
      "AET0090B",
    ],
    specTableImage: "product/tabel/brass-cable-gland-table.jpg",
  },

  {
    slug: "90deg-conduit-elbow-1",
    postMeta: JULY_14,
    namePlateTitle: "90° Conduit Elbow (Type 1)",
    namePlateSubtitle: "• Accessories For Pipe Conduit Type E",
    skuList: ["CEE190", "CEE250", "CEE310", "CEE390", "CEE510", "CEE630", "CEE750"],
    specTableImage: "product/tabel/90deg-conduit-elbow-1-table.jpg",
  },

  {
    slug: "90deg-conduit-elbow-2",
    postMeta: JULY_14,
    namePlateTitle: "90° Conduit Elbow (Type 2)",
    namePlateSubtitle: "• Accessories For Pipe Conduit Type G",
    skuList: ["CEG16", "CEG22", "CEG28", "CEG36", "CEG42", "CEG54", "CEG70"],
    specTableImage: "product/tabel/90deg-conduit-elbow-2-table.jpg",
  },

  {
    slug: "3phase-digital-voltage-protection-relay",
    postMeta: JULY_14,
    namePlateTitle: "3-Phase Digital Voltage Protection Relay",
    namePlateSubtitle:
      "• Rated voltage (Un): 220 VAC (L1-N)\n" +
      "• Operating range: (0.8–1.1) × Un\n" +
      "• Frequency: 50/60 Hz\n" +
      "• Under Voltage (UV): Umin = 300–370 VAC\n" +
      "• Over Voltage (OV): Umax = 390–460 VAC\n" +
      "• Unbalanced Voltage (asymmetry): 5–20%\n" +
      "• Phase Failure\n" +
      "• Phase Sequence\n" +
      "• On delay time (Voltages): 0.1–99.9 s\n" +
      "• On delay time (Frequency): 0.1–99.9 s\n" +
      "• Returning delay time: 0.1–99.9 s",
    specTableImage: "product/tabel/3phase-digital-voltage-protection-relay-table.jpg",
  },

  {
    slug: "3phase-digital-volt-current-protection-relay",
    postMeta: JULY_14,
    namePlateTitle: "3-Phase Digital Volt & Current Protection Relay",
    namePlateSubtitle:
      "• Rated Working Voltage: AC 220 V\n" +
      "• Operating Voltage Range: AC 140–500 V (3 Phase)\n" +
      "• Rated Frequency: 50/60 Hz\n" +
      "• Rated Working Current: 1–100 A\n" +
      "• Over Voltage Protection: 390–500 VAC; 230–300 VAC\n" +
      "• Under Voltage Protection: 140–370 VAC; 140–210 VAC\n" +
      "• Voltage Power-off Time: 1–400 s\n" +
      "• Overcurrent Protection Value: 1–100 A\n" +
      "• Overcurrent Power-off Time: 1–30 s\n" +
      "• Recover Time (Starting Delay Time): 1–400 s",
    specTableImage: "product/tabel/3phase-digital-volt-current-protection-relay-table.jpg",
  },

  {
    slug: "digital-volt-meter",
    postMeta: JULY_2_TO_5,
    namePlateSubtitle:
      "• AC Digital Voltmeter, 1 display (Single phase)\n\n" + "• AC Digital Voltmeter, 3 display (3 phase)",
    specTableImage: "product/tabel/digital-volt-meter-table.jpg",
  },

  {
    slug: "digital-power-factor-meter",
    postMeta: JULY_2,
    namePlateSubtitle: "• AC Digital Cos φ meter, 1 display × 4 digit",
    specTableImage: "product/tabel/digital-power-factor-meter-table.jpg",
  },

  {
    slug: "digital-multi-meter-vahz",
    postMeta: JULY_2,
    namePlateSubtitle:
      "• AC Digital Multimeter (V, A, Hz)\n" + "  › For Single phase\n" + "  › For 3 phase by selector switch",
    specTableImage: "product/tabel/digital-multi-meter-vahz-table.jpg",
  },

  {
    slug: "digital-frequency-meter",
    postMeta: JULY_2,
    namePlateSubtitle: "• AC Digital Hz meter, 1 display × 4 digit",
    specTableImage: "product/tabel/digital-frequency-meter-table.jpg",
  },

  {
    slug: "digital-amp-meter",
    postMeta: JULY_2,
    namePlateSubtitle:
      "• AC Digital Ammeter, 1 display (Single phase)\n\n" + "• AC Digital Ammeter, 3 display (3 phase)",
    specTableImage: "product/tabel/digital-amp-meter-table.jpg",
  },

  {
    slug: "3phase-ac-led-volt-meter",
    postMeta: JULY_2,
    namePlateSubtitle:
      "• 3-Phase / 4-wire\n" +
      "• Voltage range: 450 VAC (L-N) / 750 VAC (L-L)\n" +
      "• Operating power: 200–240 VAC\n" +
      "• Class: 0.5\n" +
      "• Size: 96×96, 72×72",
    specTableImage: "product/tabel/3phase-ac-led-volt-meter-table.jpg",
  },

  {
    slug: "3phase-ac-led-amp-meter",
    postMeta: JULY_2,
    namePlateSubtitle:
      "• 3-Phase / 4-wire\n" +
      "• Ampere range: 0–9999 / 5A\n" +
      "• Operating power: 200–240 VAC\n" +
      "• Class: 0.5\n" +
      "• Size: 96×96, 72×72",
    specTableImage: "product/tabel/3phase-ac-led-amp-meter-table.jpg",
  },

  {
    slug: "1phase-ac-led-volt-meter",
    postMeta: JULY_2,
    namePlateSubtitle:
      "• 1-Phase / 2-wire\n" +
      "• Voltage range: 450 VAC (L-N)\n" +
      "• Operating power: 200–240 VAC\n" +
      "• Class: 0.5\n" +
      "• Size: 96×96, 72×72, 48×96",
    specTableImage: "product/tabel/1phase-ac-led-volt-meter-table.jpg",
  },

  {
    slug: "1phase-ac-led-hz-meter",
    postMeta: JULY_2,
    namePlateSubtitle:
      "• 1-Phase / 2-wire\n" +
      "• Voltage range: 0–450 VAC\n" +
      "• Operating power: 200–240 VAC\n" +
      "• Frequency range: 45–65 Hz\n" +
      "• Class: 0.5\n" +
      "• Size: 96×96, 72×72, 48×96",
    specTableImage: "product/tabel/1phase-ac-led-hz-meter-table.jpg",
  },

  {
    slug: "1phase-ac-led-amp-meter",
    postMeta: JULY_2,
    namePlateSubtitle:
      "• 1-Phase / 2-wire\n" +
      "• Ampere range: 0–9999 / 5A\n" +
      "• Operating power: 200–240 VAC\n" +
      "• Class: 0.5\n" +
      "• Size: 96×96, 72×72, 48×96",
    specTableImage: "product/tabel/1phase-ac-led-amp-meter-table.jpg",
  },

  {
    slug: "smartlink-gateway-ebox",
    postMeta: JUNE_11,
    namePlateSubtitle:
      "• Haiwell Embedded SmartLink Gateway EBOX\n\n" +
      "• Download HMI program di gateway dan gunakan ponsel sebagai monitor.\n" +
      "• Koneksikan gateway, HMI, ponsel, tablet, komputer, TV, kamera di LAN.\n" +
      "• Akses jarak jauh via Internet (multi user) tanpa SCADA cloud atau VNC.\n" +
      "• Transmisi & penyimpanan data ke server publik/privat.\n" +
      "• Integrasi ERP/MES via MQTT, OPC UA, HTTP, TCP, dll.\n" +
      "• Embed tampilan HMI ke aplikasi lain (software/APP).\n" +
      "• Fitur TTS, interkom, audio, video surveillance, dll.\n" +
      "• Ponsel sebagai pemindai barcode untuk input ke HMI.\n" +
      "• Visualisasi / kontrol terpusat di layar besar via TVBOX.\n" +
      "• Dapat di-embed ke perangkat lain untuk membuatnya cerdas.",
    galleryImages: ["product/image/smartlink-gateway-ebox-detail-1.jpg"],
    videos: ["product/video/smartlink-gateway-ebox.mp4"],
    specTableImage: "product/tabel/smartlink-gateway-ebox-table.jpg",
  },

  {
    slug: "classic-plc-modules",
    postMeta: JUNE_11,
    namePlateSubtitle: "• Haiwell Classic PLC Modules",
    galleryImages: ["product/image/classic-plc-modules-detail-1.jpg"],
    videos: ["product/video/classic-plc-modules.mp4"],
    resources: [
      { label: "Haiwell Classic PLC Catalog", url: "https://www.haiwell.com/news/471-en.html" },
      { label: "PLC Programming Software – HaiwellHappy Features", url: "https://haiwell.com/news/HaiwellHappy_Feature-en.html" },
      { label: "Haiwell PLC Specification", url: "https://haiwell.com/news/Haiwell_PLC_Feature-en.html" },
    ],
    // MULTI-TABEL: gunakan 'specTableImages' agar semua tabel terbaca (dirender sebagai banyak gambar tabel)
    specTableImages: [
      "product/tabel/classic-plc-modules-table-1.jpg",
      "product/tabel/classic-plc-modules-table-2.jpg",
      "product/tabel/classic-plc-modules-table-3.jpg",
      "product/tabel/classic-plc-modules-table-4.jpg",
      "product/tabel/classic-plc-modules-table-5.jpg",
      "product/tabel/classic-plc-modules-table-6.jpg",
    ],
  },
  {
    slug: "cardtype-plc-modules",
    postMeta: { published: "June 11, 2025", updated: "June 11, 2025", author: "java-global" },
    namePlateSubtitle: "• Haiwell Card-type PLC Modules",
    galleryImages: [
      "product/image/cardtype-plc-modules-detail-1.jpg"
    ],
    videos: [
      "product/video/cardtype-plc-modules.mp4"
    ],
    resources: [
      { label: "Haiwell Card-type PLC Catalog", url: "https://www.haiwell.com/news/471-en.html" },
      { label: "Haiwell PLC Introduction and Features", url: "https://www.haiwell.com/news/Haiwell_PLC_Feature-en.html" },
      { label: "PLC Programming Software – HaiwellHappy Features", url: "https://www.haiwell.com/news/HaiwellHappy_Feature-en.html" }
    ],
    specTableImages: [
      "product/tabel/cardtype-plc-modules-table-1.jpg",
      "product/tabel/cardtype-plc-modules-table-2.jpg",
      "product/tabel/cardtype-plc-modules-table-3.jpg",
      "product/tabel/cardtype-plc-modules-table-4.jpg",
      "product/tabel/cardtype-plc-modules-table-5.jpg",
      "product/image/cardtype-plc-modules-detail-2.jpg"
    ],
    sidebar: {
      related: [
        { title: "Card-type PLC MPU", slug: "cardtype-plc-mpu" },
        { title: "Classic PLC Modules", slug: "classic-plc-modules" }
      ],
      categories: ["PLC", "Card-type"]
    }
  },
  {
    slug: "cardtype-plc-mpu",
    postMeta: { published: "June 11, 2025", updated: "June 11, 2025", author: "java-global" },
    namePlateTitle: "AC Series Card-type PLC MPU",
    namePlateSubtitle: "• Main Processing Unit untuk Card-type PLC",
    galleryImages: [
      "product/image/cardtype-plc-mpu-detail-1.jpg"
    ],
    videos: [
      "product/video/cardtype-plc-mpu.mp4"
    ],
    resources: [
      { label: "Haiwell Card-type PLC Catalog", url: "https://www.haiwell.com/news/471-en.html" },
      { label: "Haiwell PLC Introduction and Features", url: "https://www.haiwell.com/news/Haiwell_PLC_Feature-en.html" },
      { label: "PLC Programming Software – HaiwellHappy Features", url: "https://www.haiwell.com/news/HaiwellHappy_Feature-en.html" }
    ],
    specTableImages: [
      "product/tabel/cardtype-plc-mpu-table-1.jpg",
      "product/tabel/cardtype-plc-mpu-table-2.jpg",
      "product/tabel/cardtype-plc-mpu-table-3.jpg",
      "product/image/cardtype-plc-mpu-detail-2.jpg"
    ],
    sidebar: {
      related: [
        { title: "Card-type PLC Modules", slug: "cardtype-plc-modules" },
        { title: "Classic PLC Modules", slug: "classic-plc-modules" }
      ],
      categories: ["PLC", "Card-type"]
    }
  },
  {
    slug: "smartlink-gateway-xbox",
    postMeta: JUNE_11,
    namePlateTitle: "SmartLink Gateway XBOX",
    namePlateSubtitle:
      "• Download HMI program in gateway and use mobile phone as a monitor.\n\n" +
      "• Enable simple connection between gateway, HMI, mobile phone, tablet, computer, TV and camera in local area network.\n\n" +
      "• Enable simple connection between gateway, HMI, mobile phone, tablet, computer, TV and camera over the Internet.\n\n" +
      "• Allow remote access for multiple concurrent users without SCADA in the cloud or VNC connection.\n\n" +
      "• Provide data transmission and data storage in any public or private server.\n\n" +
      "• Integrate data with ERP, MES or other applications by MQTT, OPC UA, HTTP, TCP and etc.\n\n" +
      "• Embed the display of HMI in other applications like software, APP and etc.\n\n" +
      "• Use mobile phone as a scanner to scan barcode and enter information in HMI.\n\n" +
      "• Apply to data visualization or centralized control on large screen by TVBOX.\n\n" +
      "• Provide 8-channel configurable digital I/O.",
    videos: ["product/video/smartlink-gateway-xbox.mp4"],
    specTableImage: "product/tabel/smartlink-gateway-xbox-table.jpg",
    sidebar: { categories: ["Uncategorized"] }
  },

  {
    slug: "smartlink-gateway-cbox",
    postMeta: JUNE_11,
    namePlateTitle: "SmartLink Gateway CBOX (Use mobile as local screen)",
    namePlateSubtitle:
      "• Download HMI program in gateway and use mobile phone as a monitor.\n\n" +
      "• Enable simple connection between gateway, HMI, mobile phone, tablet, computer, TV and camera in local area network.\n\n" +
      "• Enable simple connection between gateway, HMI, mobile phone, tablet, computer, TV and camera over the Internet.\n\n" +
      "• Allow remote access for multiple concurrent users without SCADA in the cloud or VNC connection.\n\n" +
      "• Provide data transmission and data storage in any public or private server.\n\n" +
      "• Integrate data with ERP, MES or other applications by MQTT, OPC UA, HTTP, TCP and etc.\n\n" +
      "• Embed the display of HMI in other applications like software, APP and etc.\n\n" +
      "• Include intelligent functions such as TTS output, intercom, audio playing, video surveillance and etc.\n\n" +
      "• Use mobile phone as a scanner to scan barcode and enter information in HMI.\n\n" +
      "• Apply to data visualization or centralized control on large screen by TVBOX.\n\n" +
      "• Support Beidou positioning and trajectory tracking.",
    videos: ["product/video/smartlink-gateway-cbox.mp4"],
    specTableImage: "product/tabel/smartlink-gateway-cbox-table.jpg",
    sidebar: { categories: ["Uncategorized"] }
  },

  {
    slug: "classic-plc-mpu",
    postMeta: JUNE_11,
    namePlateTitle: "Classic PLC MPU",
    videos: ["product/video/classic-plc-mpu.mp4"],
    resources: [
      { label: "Haiwell Card-type PLC Catalog", url: "https://www.haiwell.com/news/471-en.html" },
      { label: "Haiwell PLC Introduction and Features", url: "https://www.haiwell.com/news/Haiwell_PLC_Feature-en.html" },
      { label: "PLC Programming Software – HaiwellHappy Features", url: "https://www.haiwell.com/news/HaiwellHappy_Feature-en.html" }
    ],
    specTableImages: [
      "product/tabel/classic-plc-mpu-table-1.jpg",
      "product/tabel/classic-plc-mpu-table-2.jpg",
      "product/tabel/classic-plc-mpu-table-3.jpg"
    ],
    sidebar: { categories: ["Uncategorized"] }
  },

  {
    slug: "cloud-scada",
  postMeta: JUNE_11,
  namePlateTitle: "Haiwell Cloud SCADA",
  galleryImages: ["product/image/cloud-scada-detail-1.jpg"],
  namePlateSubtitle:
    "Haiwell Cloud SCADA is a .NET-Framework based industrial automation monitoring and management platform. It is also the programming & management software for Haiwell IIoT HMI / IIoT Cloud Box / IPC.\n\n" +
    "**You can get the latest Haiwell Cloud SCADA software from Download center for FREE.**\n\n" +
    "• Integrated data-link tool (MySQL/SQL Server, real-time & historical data).\n" +
    "• Support MQTT protocol & built-in MQTT server (proxy, easy networking).\n" +
    "• Cloud transparent transmission (remote program/upgrade/diagnostics).\n" +
    "• Secondary configuration & centralized remote control.\n" +
    "• Remote access control via browser (PC/phone, no repeat config).\n" +
    "• Haiwell Cloud data center (no self-built MQTT server).\n" +
    "• Programmable command language (JavaScript).\n" +
    "• Rich alarm notification (screen, voice, WeChat, SMS, mail).\n" +
    "• Multiple third-party protocols & built-in drivers.\n" +
    "• Powerful displaying & connectivity; rich function modules.\n" +
    "• Strong database for logging/analysis; system security; simulation.\n\n" +
    "**Hardware Requirement:** CPU ≥1.2 GHz (suggest 2.4 GHz), RAM ≥512 MB (suggest 1 GB), HDD ≥20 GB (suggest 80 GB), 800×600@16-bit (suggest 1024×768@32-bit).\n\n" +
    "**Software Requirement:**\n\n" +
    "OS: Windows XP SP2 or higher version.\n\n" +
    "Operating Platform: .NET Framework 2.0 / 3.0 / 3.5.\n\n" +
    "**General Procedures of Project Development**\n\n" +
    "Take the project which uses Haiwell H60S2R as an example:\n\n" +
    "Step 1: Double click the \"Haiwell configuration software development environment\".\n\n" +
    "Step 2: Click “New Project”, and confirm the project settings.\n\n" +
    "Step 3: Expand the PLC node and find the Haiwell PLC node, do the settings and then click \"Add\" button.\n\n" +
    "Step 4: Choose “Yes” in the reminder window to add the variable.\n\n" +
    "Step 5: There is a default home screen when creating a new project; here we can edit on the main home screen directly. The image element can be dragged to the home screen window and configured.\n\n" +
    "Step 6: Click the \"Compile\" button in the toolbar. A pop-up window will appear to save the project; save the project to the target location. Close the \"Compile\" window after confirming there are no errors or warnings. Then click the \"Simulation Run\" in the toolbar to enter the configuration software runtime environment and execute the project.",
  specTableImage: "product/tabel/cloud-scada-table.jpg",
  sidebar: { categories: ["Uncategorized"] }
  },

  {
    slug: "cloud-app",
    postMeta: JUNE_11,
    namePlateTitle: "Haiwell Cloud APP",
    galleryImages: [
      "product/image/cloud-app-detail-1.jpg",
      "product/image/cloud-app-detail-2.jpg"
    ],
    namePlateSubtitle:
      "Haiwell Cloud APP supports PC, iPad, Android and iOS. Monitor & control HMI/SCADA remotely with 128-bit SSL encryption plus A/B-Key or password check for secure access.",
    resources: [
      { label: "User's Manual of Haiwell Cloud APP (PDF)", url: "https://en.haiwell.com/daruanjianen/User's%20Manual%20of%20Haiwell%20Cloud%20APP.pdf" }
    ],
    sidebar: { categories: ["Uncategorized"] }
  },

  {
    slug: "cloud-platform",
    postMeta: JUNE_11,
    namePlateTitle: "Haiwell Cloud Platform",
    namePlateSubtitle:
      "Haiwell Cloud is a cross-platform IoT cloud platform (PC, iPad, Android, iOS). Remote monitoring/maintenance for HMI & PLC: programming, firmware upgrades, monitoring & diagnosis. Secured by 128-bit SSL plus A/B-Key mechanism.",
    resources: [
      { label: "Haiwell Cloud Platform", url: "https://cloud.haiwell.com" }
    ],
    galleryImages: [
      "product/image/cloud-platform-detail-1.jpg",
      "product/image/cloud-platform-detail-2.jpg",
      "product/image/cloud-platform-detail-3.jpg",
      "product/image/cloud-platform-detail-4.jpg",
      "product/image/cloud-platform-detail-5.jpg",
      "product/image/cloud-platform-detail-6.jpg",
      "product/image/cloud-platform-detail-7.jpg",
      "product/image/cloud-platform-detail-8.jpg"
    ],
    sidebar: { categories: ["Uncategorized"] }
  },

  {
    slug: "haiwell-smartlink-cloud",
    postMeta: JUNE_11,
    namePlateTitle: "Haiwell SmartLink Cloud",
    galleryImages: ["product/image/haiwell-smartlink-cloud-detail-1.jpg"],
    namePlateSubtitle:
      "Exclusive IoT platform for enterprise. Manage projects, equipments, personnel, data and assets as an enterprise; suitable for mass equipment management.\n\n" +
      "• Data visualization system & WEB SCADA (centralized monitoring, third-party sources supported).\n\n" +
      "• Custom Logo/branding (logo, platform name, web link).\n\n" +
      "• Enterprise Equipment (batch bind devices, A/B keys, multi-team, multi-level grouping).\n\n" +
      "• Cloud maintenance identity for manufacturers (transparent transmission, upload/download, firmware upgrade, remote control).\n\n" +
      "• IoT Card Management (usage/status, recharge & renewal).",
    sidebar: { categories: ["Uncategorized"] }
  },

  {
    slug: "d-series-smartlink-hmi",
    postMeta: JUNE_11,
    namePlateTitle: "D Series SmartLink HMI",
    galleryImages: ["product/image/d-series-smartlink-hmi-detail-1.jpg"],
    videos: [
      "product/video/d-series-smartlink-hmi-1.mp4",
      "product/video/d-series-smartlink-hmi-2.mp4",
      "product/video/d-series-smartlink-hmi-3.mp4"
    ],
    namePlateSubtitle:
      "• Simple connection among HMI, phone, tablet, computer, TV, camera (LAN & Internet).\n" +
      "• Multi-user remote access without cloud SCADA/VNC.\n" +
      "• Data transmission & storage to public/private servers.\n" +
      "• ERP/MES integration via MQTT, OPC UA, HTTP, TCP etc.\n" +
      "• Embed HMI display into other apps.\n" +
      "• TTS, intercom, audio, video surveillance etc.\n" +
      "• Barcode scanning via phone.\n" +
      "• TVBOX for large-screen visualization.\n" +
      "• Innovative design: HD screen, narrow bezel, aluminum alloy; options eSIM, mic, speaker, RFID.",
    specTableImage: "product/tabel/d-series-smartlink-hmi-table.jpg",
    sidebar: { categories: ["Uncategorized"] }
  },

  {
    slug: "a8-smartlink-plc",
    postMeta: JUNE_11,
    namePlateTitle: "A8 SmartLink PLC",
    galleryImages: [
      "product/image/a8-smartlink-plc-detail-1.jpg",
      "product/image/a8-smartlink-plc-detail-2.jpg"
    ],
    videos: ["product/video/a8-smartlink-plc.mp4"],
    namePlateSubtitle:
      "• Full PLC + gateway functions.\n" +
      "• Mobile as HMI monitor; LAN/Internet simple connection.\n" +
      "• Multi-user remote access without cloud SCADA/VNC.\n" +
      "• Data transmission & storage (public/private server).\n" +
      "• ERP/MES integration (MQTT/OPC UA/HTTP/TCP...).\n" +
      "• Embed HMI display into other apps.\n" +
      "• Phone barcode scanning; TVBOX large-screen visualization.",
    specTableImage: "product/tabel/a8-smartlink-plc-table.jpg",
    sidebar: { categories: ["Uncategorized"] }
  },

  {
    slug: "a-series-smartlink-hmi",
    postMeta: JUNE_11,
    namePlateTitle: "A Series SmartLink HMI",
    videos: [
      "product/video/a-series-smartlink-hmi-1.mp4",
      "product/video/a-series-smartlink-hmi-2.mp4"
    ],
    namePlateSubtitle:
      "• Simple connection (LAN/Internet) among HMI and devices.\n" +
      "• Multi-user remote access without cloud SCADA/VNC.\n" +
      "• Data transmission & storage (public/private server).\n" +
      "• ERP/MES integration (MQTT/OPC UA/HTTP/TCP...).\n" +
      "• Embed HMI display; TTS/intercom/audio/video/RFID/NFC.\n" +
      "• Phone barcode scanning; TVBOX visualization.\n" +
      "• Beidou positioning & trajectory tracking.\n" +
      "• HD screen, narrow bezel; options eSIM, mic, speaker, RFID.",
    specTableImage: "product/tabel/a-series-smartlink-hmi-table.jpg",
    sidebar: { categories: ["Uncategorized"] }
  },

  {
    slug: "rseries-smartlink-ipc-catalog",
    postMeta: JUNE_11,
    namePlateTitle: "Haiwell R Series SmartLink IPC Catalog",
    galleryImages: ["product/image/rseries-smartlink-ipc-detail-1.jpg"],
    namePlateSubtitle:
      "• Built-in Haiwell Cloud SCADA (unlimited variables).\n" +
      "• Simple connection (LAN/Internet), multi-user remote access.\n" +
      "• Data transmission & storage; ERP/MES via MQTT/OPC UA/HTTP/TCP.\n" +
      "• TTS, intercom, audio, video surveillance.\n" +
      "• Phone barcode input; TVBOX large-screen control.\n" +
      "• HD capacitive screen, narrow frame, aluminum alloy shell.",
    specTableImage: "product/tabel/rseries-smartlink-ipc-table.jpg",
    sidebar: { categories: ["Uncategorized"] }
  },

  {
    slug: "smartlink-tvbox",
    postMeta: JUNE_11,
    namePlateTitle: "SmartLink Core Screen Controller TVBOX",
    galleryImages: ["product/image/smartlink-tvbox-detail-1.jpg"],
    namePlateSubtitle:
      "• Simple connection in LAN/Internet; multi-user remote access.\n" +
      "• Data transmission/storage; ERP/MES via MQTT/OPC UA/HTTP/TCP.\n" +
      "• Embed HMI display; TTS/intercom/audio/video surveillance.\n" +
      "• Phone barcode scanning; large-screen centralized control.\n" +
      "• Innovative design with HD screen & narrow bezel.",
    videos: [
      "product/video/smartlink-tvbox-1.mp4",
      "product/video/smartlink-tvbox-2.mp4"
    ],
    specTableImage: "product/tabel/smartlink-tvbox-table.jpg",
    sidebar: { categories: ["Uncategorized"] }
  },

  // Stubs unik (belum ada detail) — tidak menduplikasi slug yang sudah terisi di atas
  { slug: "cardtype-plc-modules", postMeta: JULY_14 },
  { slug: "cardtype-plc-mpu", postMeta: JULY_14 },
  { slug: "smartlink-gateway-xbox", postMeta: JULY_14 },
  { slug: "smartlink-gateway-cbox", postMeta: JULY_14 },
  { slug: "classic-plc-mpu", postMeta: JULY_14 },
  { slug: "cloud-scada", postMeta: JULY_14 },
  { slug: "cloud-app", postMeta: JULY_14 },
  { slug: "cloud-platform", postMeta: JULY_14 },
  { slug: "haiwell-smartlink-cloud", postMeta: JUNE_11 },
  { slug: "d-series-smartlink-hmi", postMeta: JUNE_11 },
  { slug: "a8-smartlink-plc", postMeta: JUNE_11 },
  { slug: "a-series-smartlink-hmi", postMeta: JUNE_11 },
  { slug: "rseries-smartlink-ipc-catalog", postMeta: JUNE_11 },
  { slug: "smartlink-tvbox", postMeta: JUNE_11 },
];
