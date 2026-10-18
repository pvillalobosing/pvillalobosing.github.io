
import Header from './components/Header';
import Hero from './components/Hero'
import projects from './data/projects'
import ProjectCard from './components/ProjectCard'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="projects">
          <h2>Projects</h2>
          <div className="grid">
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
      </main>
    </>
  )
}


export default App;