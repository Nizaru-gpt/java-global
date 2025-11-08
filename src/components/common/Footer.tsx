import { Link, NavLink } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Globe,
  MessageSquareMore,
  Star,
} from "lucide-react";

export const Footer = () => {
  const toHash = (hash: `#${string}`) => ({
    pathname: "/",
    hash,
  });

  const linkBase =
    "hover:text-[#f59e0b] transition-colors duration-150 inline-flex items-center gap-2";

  const socialBtn =
    "h-10 w-10 rounded-full bg-[#f59e0b] text-black grid place-items-center hover:opacity-90 transition";

  return (
    <footer id="footer" className="bg-black text-white pt-12 pb-6">
      {/* Content */}
      <div className="container-xl grid gap-8 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-semibold text-[#f59e0b] mb-3">
            Java Global
          </h3>
          <p className="text-sm opacity-90 leading-relaxed">
            Mechanical Electrical Plumbing (MEP), Automation, Special Purpose
            Machine (SPM), Building & Construction, System Integrator (SI)
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-[#f59e0b] mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/" end className={linkBase}>Home</NavLink></li>
            <li><NavLink to="/about" className={linkBase}>About</NavLink></li>
            <li><NavLink to="/our-experiences" className={linkBase}>Our Experience</NavLink></li>
            <li><NavLink to="/product" className={linkBase}>Product</NavLink></li>
            <li><NavLink to="/contact" className={linkBase}>Contact</NavLink></li>
            <li><Link to={toHash("#download")} className={linkBase}>Download</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold text-[#f59e0b] mb-3">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Electrical</li>
            <li>Automation</li>
            <li>Robot System</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-[#f59e0b] mb-3">
            Get In Touch
          </h4>
          <p className="text-sm leading-relaxed opacity-90">
            Vila Mutiara Cikarang Blok B1<br />
            No.41 RT.014 RW.007 Desa Ciantra,<br />
            Cikarang Selatan, Bekasi
          </p>
          <div className="mt-3 text-sm space-y-2">
            <div className="flex items-center gap-2">
              <MessageSquareMore size={16} />
              <span>WhatsApp</span>
            </div>
            <div className="h-px bg-white/30" />
            <div className="flex items-center gap-2">
              <Star size={16} />
              <span>List Item</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex justify-center gap-4">
        <a href="#" aria-label="Facebook" className={socialBtn}><Facebook size={18} /></a>
        <a href="#" aria-label="Instagram" className={socialBtn}><Instagram size={18} /></a>
        <a href="#" aria-label="Twitter" className={socialBtn}><Twitter size={18} /></a>
        <a href="#" aria-label="Google" className={socialBtn}><Globe size={18} /></a>
        <a href="#" aria-label="LinkedIn" className={socialBtn}><Linkedin size={18} /></a>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm opacity-75">
        © 2025 Java Global
      </div>
    </footer>
  );
};
