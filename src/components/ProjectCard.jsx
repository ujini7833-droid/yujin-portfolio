function ProjectCard({ project, index }) {
    return (
        <article className="project-card">
            <div className="project-card-inner">
                <div className="project-visual project-reveal project-reveal-left">
                    <span className="project-index">0{index + 1}</span>
                    <p className="project-type">{project.type}</p>
                    <h3>{project.name}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                    <div className={`project-image-frame ${project.imageClass}`}>
                        <img src={project.image} alt={`${project.name} 메인 화면`} />
                        <span className="project-image-title">{project.name}</span>
                    </div>
                </div>

                <div className="project-details project-reveal project-reveal-right">
                    <dl>
                        <div className="project-detail"><dt>Project</dt><dd>{project.description}</dd></div>
                        <div className="project-detail"><dt>Tech Stack</dt><dd className="project-skills">{project.skills.map((skill) => <span key={skill}>{skill}</span>)}</dd></div>
                        <div className="project-detail"><dt>My Role</dt><dd>{project.role}</dd></div>
                        <div className="project-detail"><dt>Outcome / Learning</dt><dd>{project.learning}</dd></div>
                    </dl>
                    <a className="project-github" href={project.github} target="_blank" rel="noopener noreferrer">
                        GitHub<span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default ProjectCard
