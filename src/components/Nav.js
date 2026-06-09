import './Nav.css';

function Nav({ isDark, setIsDark }) {
  return (
    <nav>
      <a className="nav-logo" href="#home">mkmin</a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button className="dark-toggle" onClick={() => setIsDark(!isDark)}>
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
