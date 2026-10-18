
import Header from './components/Header';
import Hero from './components/Hero'
import projects from './data/projects'
import ProjectCard from './components/ProjectCard'
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  )
}


export default App;