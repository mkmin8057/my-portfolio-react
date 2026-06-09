import './Projects.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const projects = [
  {
    title: '개인 포트폴리오 홈페이지',
    description: 'HTML / CSS / JS로 직접 만든 첫 번째 포트폴리오 홈페이지. 기초부터 차근차근 배우며 완성했습니다.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link: null,
  },
  {
    title: 'React 포트폴리오 v2',
    description: 'React로 리빌드한 포트폴리오. 글래스모피즘 디자인과 스크롤 애니메이션을 적용했습니다.',
    tags: ['React', 'CSS', 'JavaScript'],
    link: 'https://github.com/mkmin8057/my-portfolio-react',
  },
  {
    title: '🚧 Coming Soon',
    description: '새로운 프로젝트를 열심히 준비 중이에요! 기대해 주세요.',
    tags: [],
    link: null,
  },
];

function Projects() {
  const ref = useScrollAnimation();

  return (
    <div id="projects" className="projects-wrapper">
      <div ref={ref} className="projects-inner fade-up">
        <h2>Projects</h2>
        <div className="cards-container">
          {projects.map((proj) => (
            <div key={proj.title} className="project-card glass">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              {proj.tags.length > 0 && (
                <div className="tech-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
              )}
              {proj.link && (
                <a
                  href={proj.link}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  🐙 GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
