import { useState } from "react";
import projects from "../data/projects";


function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Frontend",
    "Prompt Engineering",
    "Python",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <main className="projects-page">

      {/* ================= HEADER ================= */}

      <section className="projects-header">

        <div>
          <div className="section-label">
            Selected Work
          </div>

          <h1>
            My <span>Projects.</span>
          </h1>
        </div>

        <div className="projects-intro">
          <p>
            A collection of frontend experiments, developer
            projects, and programming work built while exploring
            modern web development and software engineering.
          </p>

          <div className="project-count">
            {projects.length} PROJECTS / 2026
          </div>
        </div>

      </section>


      {/* ================= FILTERS ================= */}

      <div className="project-filters">

        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            className={
              activeFilter === filter ? "active" : ""
            }
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}

      </div>


      {/* ================= PROJECT GRID ================= */}

      {filteredProjects.length > 0 ? (

        <section className="projects-grid">

          {filteredProjects.map((project, index) => (

            <article
              className="project-card"
              key={project.id}
            >

              {/* Card Header */}

              <div className="project-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{project.year}</span>
              </div>


              {/* Project Visual */}

              <div className="project-visual">

                <div className="project-symbol">
                  {project.symbol}
                </div>

                <div className="project-category">
                  {project.category}
                </div>

              </div>


              {/* Project Content */}

              <div className="project-content">

                <div className="project-title-row">

                  <h2>
                    {project.title}
                  </h2>

                  <span className="project-arrow">
                    ↗
                  </span>

                </div>


                <p>
                  {project.description}
                </p>


                {/* Tech Stack */}

                <div className="project-tech">

                  {project.tech.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>


                {/* Project Links */}

                <div className="project-links">

                  {/* GitHub */}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>↗</span>
                      GitHub
                    </a>
                  )}


                  {/* Live Demo — only when available */}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>↗</span>
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </article>

          ))}

        </section>

      ) : (

        <div className="projects-empty">

          <h2>
            No projects found
          </h2>

          <p>
            Try selecting another category.
          </p>

        </div>

      )}


      {/* ================= BOTTOM CTA ================= */}

      <section className="projects-cta">

        <h2>
          More to <span>build.</span>
        </h2>

      </section>

    </main>
  );
}

export default Projects;