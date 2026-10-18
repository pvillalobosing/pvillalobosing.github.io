import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logo-mark">PV</span>
        <span className="logo-name">Pedro Villalobos</span>
      </div>
      <nav className="nav">
        <ul className="nav-links">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a className="btn-cv" href="/CV_Pedro_Villalobos_EN.pdf" download>Download CV</a>
      </nav>
    </header>
  )
}

export default Header