import './About.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function About() {
  const ref = useScrollAnimation();

  return (
    <div id="about" className="about-wrapper">
      <div className="about-inner">
        <div ref={ref} className="about-card glass fade-up">
          <div className="about-avatar">🧑‍🚀</div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              안녕하세요! 물리학과 우주에 푹 빠진 초보 개발자 <strong>티키타카애비</strong>입니다.
              아름다운 코드로 세상을 탐험하고, 웹 개발을 통해 새로운 우주를 만들어가고 있어요.
              작은 것부터 차근차근, 꾸준히 성장하는 것이 목표입니다.
            </p>
            <div className="about-facts">
              <span className="fact-item"><strong>KOR</strong></span>
              <span className="fact-item">🎓 물리학에 관심이 많아요</span>
              <span className="fact-item">💻 웹 개발 학습 중</span>
              <span className="fact-item">🚀 우주 덕후</span>
              <span className="fact-item">🍼 쌍둥이 육아중</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
