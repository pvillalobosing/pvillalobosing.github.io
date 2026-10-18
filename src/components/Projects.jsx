import './Projects.css'
import projects from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            summary={p.summary}
            tags={p.tags}
            confidential={p.confidential}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects