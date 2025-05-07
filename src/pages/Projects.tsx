// import React from 'react';
import './ProjectPage.css';
// import Footer from './components/Footer';

const projectData = [
  {
    title: 'University Management System',
    description:
    'web-based application designed to streamline and manage academic and administrative tasks of a university. It handles student records, course registrations, faculty details, attendance, and grading efficiently.',
     image: 'images/university.png',
    techStack: ['Html', 'NodeJs', 'MongoDB']
  },
  {
    title: 'NGO Website for Prema Ananda',
    description:
      'A dynamic and responsive website created to digitally represent the Prema Ananda Spiritual Society. The website provides information about the organization, events, and donation options. It was developed using React for a modern frontend experience and PHP with SQL for backend data handling. Key features include routing, user interaction components, and secure form handling for volunteer registration and donations.',
    image: '/images/ngo-website.png',
    techStack: ['React', 'PHP', 'SQL', 'Bootstrap']
  },
  {
    title: 'Sales Dashboard System',
    description:
      'A web-based dashboard developed using Laravel to streamline sales operations and data analytics for small to medium businesses. The application includes modules for sales tracking, real-time analytics, PDF report generation, and user authentication with role-based access control. Built-in visualization tools like Chart.js offer graphical insights into sales performance over time, helping businesses make informed decisions.',
    image: '/images/sales-dashboard.png',
    techStack: ['Laravel', 'Blade', 'MySQL', 'Chart.js']
  }
];

const ProjectPage = () => {
  return (
    <div>
    <section className="project-page">
      <h2>Projects</h2>
      {projectData.map((project, index) => (
        <div className="project-container" key={index}>
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech) => (
                <span className="tech-item" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </section>

    </div>
  );
};

export default ProjectPage;