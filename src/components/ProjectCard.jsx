import './ProjectCard.css'

function ProjectCard({ title, summary, tags, confidential }) {
  return (
    <article className="card">
      {<h3 className="card-title">{title}</h3>}
      {<p className="card-summary">{summary}</p>}
      {<ul className="card-tags">
        {tags.map((tag) => (
            <li key={tag}>{tag}</li>
        ))}
      </ul>}
    </article>
  )
}

export default ProjectCard