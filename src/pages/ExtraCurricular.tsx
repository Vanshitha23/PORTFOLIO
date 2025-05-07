import React from 'react';
import './Extracurricular.css';
// import Footer from './components/Footer';

interface Activity {
  title: string;
  description: string;
  date: string;
}

const activities: Activity[] = [
  {
    title: 'Tech Sprint Coordinator',
    description: 'Led a 3-day tech sprint event as the head coordinator of the club Inventix.',
    date: 'October 2023',
  },
  {
    title: 'NGO Awareness Campaign',
    description: 'Worked in an NGO, making pamphlets and distributing them to raise awareness about the constitution.',
    date: 'June 2024',
  },
  {
    title: 'Chess Tournament',
    description: 'Secured the 63rd rank in a state-level open chess competition.',
    date: '9th Grade',
  },
  {
    title: 'Painting and Drawing',
    description: 'Enjoys painting and drawing as a creative hobby.',
    date: 'Ongoing',
  },
];

const ExtraCurricular: React.FC = () => {
  return (
    <div className="activities-container">
      <h1>Extra-Curricular Activities</h1>
      <div className="activities-list">
        {activities.map((activity, index) => (
          <div className="activity-card" key={index}>
            <h2 className="activity-title">{activity.title}</h2>
            <p className="activity-description">{activity.description}</p>
            <p className="activity-date">{activity.date}</p>
          </div>
        ))}
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default ExtraCurricular;
