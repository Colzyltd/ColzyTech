import { SITE } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer">
     

      <ul className="footer-socials">
        {SITE.socials.map((s) => (
          <li key={s.label}>
            <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="hex hex--sm">
              {s.short}
            </a>
          </li>
        ))}
      </ul>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} {SITE.company}. All rights reserved.
      </p>
    </footer>
  );
}
