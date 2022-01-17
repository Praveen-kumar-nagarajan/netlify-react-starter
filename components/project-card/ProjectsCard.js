import Badge from "@components/badge/Badge";

export default function ProjectCard({ project }) {
  return (
    <div
      className={`timeline-container ${project.status?.toLocaleLowerCase()}`}
      key={project.title}
    >
      <div className="timeline-icon">
        <i
          className={`far fa-grin-wink ${project.status?.toLocaleLowerCase()}`}
          style={{ fontSize: "2rem" }}
        ></i>
      </div>
      <div className="timeline-body">
        <h4 className="timeline-title">
          <Badge title={project.title} />
        </h4>
        <p> {project.description} </p>
        <h4 className="timeline-footer">
          Project Stack:
          {project.skills.map(function (skill) {
            return (
              <span className="badge" key={skill.label}>
                <i className={skill.icon}></i> {skill.label}
              </span>
            );
          })}
        </h4>
        <p className="timeline-subtitle"> {project.timeline} </p>
      </div>
    </div>
  );
}
