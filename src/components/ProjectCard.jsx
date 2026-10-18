import './ProjectCard.css'

function ProjectCard({ title, summary, tags, confidential }) {
  return (
    <article className="card">
        {confidential && (
            <span className="nda">Client work · NDA</span>
        )}
      <h3 className="card-title">{title}</h3>
      <p className="card-summary">{summary}</p>
      <ul className="card-tags">
        {tags.map((tag) => (
            <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard