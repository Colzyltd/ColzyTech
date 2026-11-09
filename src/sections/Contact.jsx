import { useState } from "react";
import { Phone, MapPin, Mail } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { SITE } from "../data/site";

const EMPTY = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${SITE.formspreeId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm(EMPTY);
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading title="Contact Us" />

        <div className="contact-grid">
          <ul className="contact-info reveal">
            <li>
              <Phone size={16} strokeWidth={1.5} />
              <div><span className="label">Phone</span><a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></div>
            </li>
            <li>
              <MapPin size={16} strokeWidth={1.5} />
              <div><span className="label">Address</span><p>{SITE.location}</p></div>
            </li>
            <li>
              <Mail size={16} strokeWidth={1.5} />
              <div><span className="label">Email</span><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
            </li>
          </ul>

          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
            </div>
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" />
            <textarea name="message" rows={6} value={form.message} onChange={handleChange} placeholder="Message" required />

            <div className="form-footer">
              <p className={`form-status ${status}`} role="status">
                {status === "sent" && "Thanks! Your message has been sent."}
                {status === "error" && "Something went wrong. Please try again or email me directly."}
              </p>
              <button type="submit" className="btn btn--gold" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
