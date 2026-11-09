import SectionHeading from "../components/SectionHeading";
import { SERVICES } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeading title="Services" />

        <div className="services-grid">
          {SERVICES.map(({ icon: Icon, title, text }, i) => (
            <article className="service reveal" key={title} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="hex"><Icon size={26} strokeWidth={1.5} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
