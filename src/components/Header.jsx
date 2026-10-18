import './Header.css';

function Header() {
    return (
        <header className="header">
            <section className="logo">
                <h1>PV</h1>
                <h2>Pedro Villalobos</h2>
            </section>

            <nav>
                <ul>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button className="download-cv">Download CV</button>            
        </header>
    )
}

export default Header;