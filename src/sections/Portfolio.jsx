import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/projects";

const CATEGORIES = ["All", ...new Set(PROJECTS.map((p) => p.category))];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <SectionHeading title="Portfolio" />

        <div className="filters" role="tablist" aria-label="Filter projects">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={filter === c}
              className={`filter ${filter === c ? "active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="projects">
          {shown.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}
