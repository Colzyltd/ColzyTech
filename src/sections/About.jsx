import { SITE } from "../data/site";
import logo from '../assets/logo.jpg'

export default function About() {
  const hideBrokenImage = (e) => { e.currentTarget.style.display = "none"; };

  return (
    <section id="about" className="section about">
      <div className="container about-grid">

        {/* Left: image */}
        <div className="about-photo reveal">
          <span className="about-initials" aria-hidden="true">{SITE.nickname.slice(0, 2)}</span>
          <img src={logo} alt='Colzy' onError={hideBrokenImage} />
        </div>

        {/* Right: header + 2 paragraphs */}
        <div className="about-text reveal">
          <h2 className="about-title">About <span className="gold">Colzy</span></h2>
          <p>
            I run Colzy Ltd, a business that combines premium men&rsquo;s tailoring with digital and
            technology services. Through {SITE.company} I build production-grade web applications for
            Nigerian businesses using React, Firebase and Paystack.
          </p>
          <p>
            From the first design to domain, hosting and launch, I handle the whole stack so your
            product ships properly and keeps working. Based in {SITE.location}.
          </p>
        </div>

      </div>
    </section>
  );
}
