import './Skills.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const skillGroups = [
  {
    label: 'Languages',
    skills: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'Python', icon: '🐍' },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    skills: [
      { name: 'React', icon: '⚛️' },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Git', icon: '🔧' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'VS Code', icon: '💻' },
    ],
  },
];

function Skills() {
  const ref = useScrollAnimation();

  return (
    <div id="skills" className="skills-wrapper">
      <div className="skills-inner">
        <div ref={ref} className="skills-card glass fade-up">
          <h2>Skills</h2>
          {skillGroups.map((group) => (
            <div key={group.label} className="skills-group">
              <p className="skills-group-label">{group.label}</p>
              <div className="skills-pills">
                {group.skills.map((skill) => (
                  <span key={skill.name} className="skill-pill">
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
