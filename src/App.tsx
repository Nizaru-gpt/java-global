import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/common/Navbar";
import { Footer } from "./components/common/Footer";
import BackToTop from "./components/common/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import OurExperience from "./pages/OurExperience";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/product/ProductDetail";
import Contact from "./pages/Contact";
import Download from "./pages/Download"; // ⬅️ NEW

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const NAV_HEIGHT = window.innerWidth < 768 ? 56 : 64;
      const Y = rect.top + scrollTop - NAV_HEIGHT - 8;
      window.scrollTo({ top: Y, behavior: "auto" });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-experiences" element={<OurExperience />} />
        <Route path="/experience" element={<Navigate to="/our-experiences" replace />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:slug" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<Download />} /> {/* ⬅️ NEW */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <BackToTop />
    </div>
  );
}
