import './Contact.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

function Contact() {
  const ref = useScrollAnimation();

  return (
    <div id="contact" className="contact-wrapper">
      <div className="contact-inner">
        <div ref={ref} className="contact-card glass fade-up">
          <h2>Contact</h2>
          <p>
            궁금한 점이나 함께 하고 싶은 프로젝트가 있다면<br />
            언제든 편하게 연락주세요! 😊
          </p>
          <div className="contact-links">
            <a href="mailto:mkmin8057@gmail.com" className="contact-btn">
              ✉️ mkmin8057@gmail.com
            </a>
            <a
              href="https://github.com/mkmin8057"
              className="contact-btn"
              target="_blank"
              rel="noreferrer"
            >
              🐙 GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
