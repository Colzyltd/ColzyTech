import { SITE } from "../data/site";

export default function Home() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <p className="hero-kicker">DESIGN,</p>
        <h1 className="hero-title">
          BUILD & DEPLOY <span className="gold">WEB APPS</span>
        </h1>
        <p className="hero-tagline">{SITE.tagline}</p>

        <div className="hero-actions">
          <a href="#portfolio" className="btn btn--outline">PORTFOLIO</a>
          <a href="https://wa.me/2348179620225" className="btn btn--solid">WHATSAPP</a>
        </div>
      </div>
    </section>
  );
}
