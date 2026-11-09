export default function ProjectCard({ project }) {
  const { title, category, description, stack, image, url, size } = project;

  const hideBrokenImage = (e) => { e.currentTarget.style.display = "none"; };

  const body = (
    <>
      <div className="project-fallback" aria-hidden="true">{title.charAt(0)}</div>
      {image && <img src={image} alt={`${title} screenshot`} loading="lazy" onError={hideBrokenImage} />}

      <div className="project-overlay">
        <span className="project-cat">{category}</span>
        <h3 className="project-title">{title}</h3>
        <div className="project-extra">
          <p>{description}</p>
          <ul className="project-stack">
            {stack.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </>
  );

  const className = `project ${size ? `project--${size}` : ""}`;

  return url ? (
    <a className={className} href={url} target="_blank" rel="noreferrer" aria-label={`${title} — open live site`}>
      {body}
    </a>
  ) : (
    <article className={className}>{body}</article>
  );
}
