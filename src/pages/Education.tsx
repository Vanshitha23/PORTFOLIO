// import React from 'react';
import './EducationPage.css';


const educationData = [
  {
    title: 'Bachelor of Technology in Computer Science and Engineering',
    institution: 'Lovely Professional University',
    duration: '2022 - Present',
    performance: 'CGPA: 7.4 (up to date)',
    location: 'Phagwara, Punjab'
  },
  {
    title: 'Senior Secondary Education (Science Stream)',
    institution: 'Sri Chaitanya Junior College',
    duration: '2020 - 2022',
    performance: 'Percentage: 93%',
    location: 'Hyderabad, Telangana'
  },
  {
    title: 'Secondary School Education',
    institution: 'Aryabhatta group of Schools',
    duration: '2019 - 2020',
    performance: 'GPA: 10.0',
    location: 'Warangal, Telangana'
  }
];

const EducationPage = () => {
  return (
    <div> {/* This wraps both the section and footer */}
      <section className="education-page">
        <h2>Education</h2>
        {educationData.map((edu, index) => (
          <div className="education-container" key={index}>
            <div className="education-info">
              <h3>{edu.title}</h3>
              <p><strong>Institution:</strong> {edu.institution}</p>
              <p><strong>Duration:</strong> {edu.duration}</p>
              <p><strong>Performance:</strong> {edu.performance}</p>
              <p><strong>Location:</strong> {edu.location}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EducationPage;
