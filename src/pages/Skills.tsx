// import React from 'react';
// import Footer from './components/Footer';
import './Skills.css';

const skillsData = [
  {
    category: 'Frontend',
    description: 'Building interactive and responsive user interfaces using modern web technologies.',
    skills: [
      { name: 'HTML', icon: '🌐' },
      { name: 'CSS', icon: '🎨' },
      { name: 'JavaScript', icon: '📜' },
      { name: 'React', icon: '⚛️' },
      { name: 'Bootstrap', icon: '🅱️' },
      { name: 'TypeScript', icon: '🧩' },
    ]
  },
  {
    category: 'Backend',
    description: 'Developing and maintaining server-side logic and databases for scalable applications.',
    skills: [
      { name: 'Node.js', icon: '🟩' },
      { name: 'Express.js', icon: '🚀' },
      { name: 'PHP', icon: '🐘' },
      { name: 'Laravel', icon: '🌺' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'MySQL', icon: '🗃️' },
    ]
  },
  {
    category: 'Tools',
    description: 'Using modern tools and environments for efficient development and collaboration.',
    skills: [
 
      { name: 'GitHub', icon: '🐙' },
      { name: 'VS Code', icon: '🖥️' },
    ]
  }
];

const SkillsSection = () => {
  return (
    <div>
    <section className="skills-section">
      <h2>My Skills</h2>
      <p>I do all kinds of neat stuff</p>
      <div className="skills-row">
        {skillsData.map((category) => (
          <div className="skills-category" key={category.category}>
            <h3>{category.category}</h3>
            <p className="category-description">{category.description}</p>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-name">{skill.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
      {/* <Footer/> */}
</div>

  );
};

export default SkillsSection;