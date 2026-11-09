import { useEffect, useState } from "react";
import { NAV, NAV_IDS, SITE } from "../data/site";
import { useActiveSection } from "../hooks/useActiveSection";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(NAV_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled || open ? "navbar--solid" : ""}`}>
      <a href="#home" className="nav-brand" onClick={close}>{SITE.brand}</a>

      <nav aria-label="Main">
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={active === item.id ? "active" : ""}
                onClick={close}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        className={`nav-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
      >
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </button>
    </header>
  );
}
