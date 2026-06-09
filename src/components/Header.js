import { useState, useEffect } from 'react';
import './Header.css';

const fullText = '물리학과 우주를 사랑하는 초보 개발자, 티키타카애비입니다. 🍼✨';

function Header() {
  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-card glass">
        <p className="hero-greeting">Hello, World! 👋</p>
        <h1 className="hero-name">mkm</h1>
        <p className="hero-typing">
          {text}<span className="cursor">|</span>
        </p>
        <a href="#projects" className="hero-cta">프로젝트 보기</a>
      </div>
    </section>
  );
}

export default Header;
