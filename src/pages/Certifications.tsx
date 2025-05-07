// import React from 'react';
import './CertificationsPage.css';
// import Footer from './components/Footer';

interface Certification {
  title: string;
  description: string;
  image: string;
  link: string;
}

const certifications: Certification[] = [
  {
    title: 'Programming in C++: A Hands-on Introduction',
    description:
    'Covered core C++ programming fundamentals with practical hands-on coding exercises.',

    image: '/images/c++.png',
    link: 'https://www.coursera.org/account/accomplishments/certificate/4H4K9GAFBQ3Y'
  },
  {
    title: 'Building Web Applications in PHP - Coursera',
    description:
      'Developed secure and scalable PHP applications, understanding web architecture, database integration, and server-side scripting.',
    image: '/images/building.png',
    link: 'https://www.coursera.org/account/accomplishments/certificate/WT7NLEW4BHU5'
  },
  {
    title: 'The Bits and Bytes of Computer Networking',
    description:
    'Gained foundational knowledge of networking concepts, including TCP/IP, DNS, and cloud computing basics.',    image: '/images/bits.png',
    link: 'https://www.coursera.org/account/accomplishments/certificate/GJWSCY9VKUP6'
  }
];

const CertificationsPage = () => {
  return (
    <div>
    <section className="certifications-page">
      <h2>Certifications</h2>
      <div className="certifications-list">
        {certifications.map((cert, index) => (
          <div
            className={`cert-container ${index % 2 === 0 ? 'bg-light' : 'bg-dark'}`}
            key={index}
          >
            <div className="cert-info">
              <h3>{cert.title}</h3>
              <p>{cert.description}</p>
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <button className="view-button">View Certificate</button>
              </a>
            </div>
            <div className="cert-image">
              <img src={cert.image} alt={cert.title} />
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>

  );
};

export default CertificationsPage;
