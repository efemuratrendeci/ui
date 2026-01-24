import projects from "../data/projects.js";

export default function Projects() {
  return (
    <div className="projects_list">
      {projects.map((project) => (
        <div className="project_card" key={project.title}>
          <div className="project_header">
            {project.iconSrc && (
              <img src={project.iconSrc} alt="" className="project_icon img_contain" />
            )}
            <div>
              <h3>{project.title}</h3>
              {project.subtitle && <p className="project_subtitle">{project.subtitle}</p>}
            </div>
          </div>
          <p className="project_description">{project.description}</p>
          {project.features?.length > 0 && (
            <ul className="project_features">
              {project.features.map((feature) => (
                <li key={`${project.title}-${feature}`}>{feature}</li>
              ))}
            </ul>
          )}
          {project.link && (
            <a className="project_link" href={project.link} target="_blank" rel="noreferrer">
              {project.linkLabel ?? "Projeyi gor"}
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
