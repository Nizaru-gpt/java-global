import { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link, useLocation } from "react-router-dom";

type LinkItem =
  | { to: string; label: string; hash?: false }
  | { to: `#${string}`; label: string; hash: true };

const links: LinkItem[] = [
  { to: "/", label: "HOME", hash: false },
  { to: "/about", label: "ABOUT", hash: false },
  { to: "/our-experiences", label: "OUR EXPERIENCE", hash: false },
  { to: "/product", label: "PRODUCT", hash: false },
  { to: "/contact", label: "CONTACT", hash: false },
  { to: "/download", label: "DOWNLOAD", hash: false }, // ⬅️ now a real page
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [hidden, setHidden] = useState(false);
  const lastYRef = useRef(0);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // close mobile drawer on route change
  useEffect(() => setOpen(false), [pathname]);

  // hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setAtTop(y < 10);
      if (y > lastYRef.current && y > 120) setHidden(true);
      else setHidden(false);
      lastYRef.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeClass = "text-[#f59e0b]";

  const NavItems = ({ mobile = false }: { mobile?: boolean }) => (
    <ul className={mobile ? "flex flex-col gap-2" : "hidden md:flex items-center gap-8 text-sm"}>
      {links.map((l) => (
        <li key={l.label}>
          {l.hash ? (
            // SPA hash to Home: "/#id"
            <Link
              to={{ pathname: "/", hash: l.to }}
              onClick={() => mobile && setOpen(false)}
              className={mobile ? "block py-2 text-white/90 hover:text-[#f59e0b] transition" : "nav-link"}
            >
              {l.label}
            </Link>
          ) : (
            <NavLink
              to={l.to}
              end={l.to === "/"}
              onClick={() => mobile && setOpen(false)}
              className={({ isActive }) =>
                [
                  mobile ? "block py-2 text-white/90 transition" : "nav-link",
                  isActive ? activeClass : mobile ? "hover:text-[#f59e0b]" : "",
                ].join(" ")
              }
            >
              {l.label}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transform-gpu will-change-transform",
        "transition-transform duration-300",
        hidden ? "-translate-y-[120%]" : "translate-y-0",
        // Transparan hanya di Home ketika di paling atas
        atTop && isHome
          ? "bg-transparent"
          : "bg-black/70 backdrop-blur-sm shadow-[inset_0_-1px_0_rgba(255,255,255,0.08)]",
      ].join(" ")}
    >
      <nav className="container-xl h-14 md:h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-white font-extrabold tracking-wide text-xl md:text-2xl leading-none hover:opacity-90 transition"
          aria-label="Java Global - Home"
        >
          Java Global
        </Link>

        {/* Desktop */}
        <NavItems />

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={[
          "md:hidden bg-black/90 backdrop-blur-sm",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
          open ? "opacity-100 visible" : "opacity-0 invisible",
          "transition-opacity duration-200",
        ].join(" ")}
      >
        <div className="container-xl py-3">
          <NavItems mobile />
        </div>
      </div>
    </header>
  );
}
