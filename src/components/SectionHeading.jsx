// Big faded title with a small gold label, like the template's section headers.
export default function SectionHeading({ title, eyebrow }) {
  return (
    <div className="section-heading reveal">
      <h2 className="ghost-title">{title}</h2>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    </div>
  );
}
