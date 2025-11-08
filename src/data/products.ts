export type ProductItem = {
  title: string;
  slug: string;   // dipakai di URL
  date: string;   // bebas (buat sort Recent)
  image: string;  // nama file di src/assets/images/product/
};

export const products: ProductItem[] = [
  // Page 1 (atas → bawah, kiri → kanan)
  { title: "Accessories For Push Button",                           slug: "emergency-stop",                                   date: "2025-07-14", image: "emergency-stop.jpg" },
  { title: "Accessories For Pilot Lamp & Push Button",              slug: "pilot-lamp-push-button",                           date: "2025-07-14", image: "pilot-lamp-push-button.jpg" },
  { title: "Accessories For Terminal UK",                           slug: "terminal-uk",                                      date: "2025-07-14", image: "terminal-uk.jpg" },
  { title: "AC — Axial Blower Fan",                                 slug: "axial-blower-fan",                                 date: "2025-07-14", image: "axial-blower-fan.jpg" },
  { title: "AC — AC, Solid State Relay",                            slug: "solid-state-relay",                                date: "2025-07-14", image: "solid-state-relay.jpg" },
  { title: "A1/A2 Series Brass Cable Gland (Without Armour)",       slug: "brass-cable-gland",                                date: "2025-07-14", image: "brass-cable-gland.jpg" },
  { title: "90° Conduit Elbow (Type 1)",                            slug: "90deg-conduit-elbow-1",                            date: "2025-07-14", image: "90deg-conduit-elbow-1.jpg" },
  { title: "90° Conduit Elbow (Type 2)",                            slug: "90deg-conduit-elbow-2",                            date: "2025-07-14", image: "90deg-conduit-elbow-2.jpg" },
  { title: "3-Phase Digital Voltage Protection Relay",              slug: "3phase-digital-voltage-protection-relay",          date: "2025-07-14", image: "3phase-digital-voltage-protection-relay.jpg" },
  { title: "3-Phase Digital Volt & Current Protection Relay",       slug: "3phase-digital-volt-current-protection-relay",     date: "2025-07-14", image: "3phase-digital-volt-current-protection-relay.jpg" },
  { title: "Digital Volt Meter",                                    slug: "digital-volt-meter",                               date: "2025-07-14", image: "digital-volt-meter.jpg" },
  { title: "Digital Power Factor Meter",                            slug: "digital-power-factor-meter",                       date: "2025-07-14", image: "digital-power-factor-meter.jpg" },

  // Page 2
  { title: "Digital Multi Meter (V, A, Hz)",                        slug: "digital-multi-meter-vahz",                         date: "2025-07-14", image: "digital-multi-meter-vahz.jpg" },
  { title: "Digital Frequency Meter",                               slug: "digital-frequency-meter",                          date: "2025-07-14", image: "digital-frequency-meter.jpg" },
  { title: "Digital Ampere Meter",                                  slug: "digital-amp-meter",                                date: "2025-07-14", image: "digital-amp-meter.jpg" },
  { title: "3-Phase AC LED Digital Volt Meter",                     slug: "3phase-ac-led-volt-meter",                         date: "2025-07-14", image: "3phase-ac-led-volt-meter.jpg" },
  { title: "3-Phase AC LED Digital Ampere Meter",                   slug: "3phase-ac-led-amp-meter",                          date: "2025-07-14", image: "3phase-ac-led-amp-meter.jpg" },
  { title: "1-Phase AC LED Digital Volt Meter",                     slug: "1phase-ac-led-volt-meter",                         date: "2025-07-14", image: "1phase-ac-led-volt-meter.jpg" },
  { title: "1-Phase AC LED Digital HZ Meter",                       slug: "1phase-ac-led-hz-meter",                           date: "2025-07-14", image: "1phase-ac-led-hz-meter.jpg" },
  { title: "1-Phase AC LED Digital Ampere Meter",                   slug: "1phase-ac-led-amp-meter",                          date: "2025-07-14", image: "1phase-ac-led-amp-meter.jpg" },

  // Page 3
  { title: "SmartLink Gateway EBOX",                                slug: "smartlink-gateway-ebox",                           date: "2025-07-14", image: "smartlink-gateway-ebox.jpg" },
  { title: "Classic PLC Modules",                                   slug: "classic-plc-modules",                              date: "2025-07-14", image: "classic-plc-modules.jpg" },
  { title: "Card-type PLC Modules",                                 slug: "cardtype-plc-modules",                             date: "2025-07-14", image: "cardtype-plc-modules.jpg" },
  { title: "Card-type PLC MPU",                                     slug: "cardtype-plc-mpu",                                 date: "2025-07-14", image: "cardtype-plc-mpu.jpg" },
  { title: "SmartLink Gateway XBOX",                                slug: "smartlink-gateway-xbox",                           date: "2025-07-14", image: "smartlink-gateway-xbox.jpg" },
  { title: "SmartLink Gateway CBOX",                                slug: "smartlink-gateway-cbox",                           date: "2025-07-14", image: "smartlink-gateway-cbox.jpg" },
  { title: "Classic PLC MPU",                                       slug: "classic-plc-mpu",                                  date: "2025-07-14", image: "classic-plc-mpu.jpg" },
  { title: "Cloud SCADA",                                           slug: "cloud-scada",                                      date: "2025-07-14", image: "cloud-scada.jpg" },
  { title: "Cloud APP",                                             slug: "cloud-app",                                        date: "2025-07-14", image: "cloud-app.jpg" },
  { title: "Cloud Platform",                                        slug: "cloud-platform",                                   date: "2025-07-14", image: "cloud-platform.jpg" },

  // Page 4
  { title: "Haiwell SmartLink Cloud",                               slug: "haiwell-smartlink-cloud",                          date: "2025-06-11", image: "haiwell-smartlink-cloud.jpg" },
  { title: "D Series SmartLink HMI",                                slug: "d-series-smartlink-hmi",                           date: "2025-06-11", image: "d-series-smartlink-hmi.jpg" },
  { title: "A8 SmartLink PLC",                                      slug: "a8-smartlink-plc",                                 date: "2025-06-11", image: "a8-smartlink-plc.jpg" },
  { title: "A Series SmartLink HMI",                                slug: "a-series-smartlink-hmi",                           date: "2025-06-11", image: "a-series-smartlink-hmi.jpg" },
  { title: "Haiwell R Series SmartLink IPC Catalog",                slug: "rseries-smartlink-ipc-catalog",                    date: "2025-06-11", image: "rseries-smartlink-ipc-catalog.jpg" },
  { title: "SmartLink Core Screen Controller TVBOX",                slug: "smartlink-tvbox",                                  date: "2025-06-11", image: "smartlink-tvbox.jpg" },
];
