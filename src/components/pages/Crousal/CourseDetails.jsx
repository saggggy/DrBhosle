import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const CourseDetails = () => {
  const location = useLocation();
  const { courseInfo } = location.state;

  return (
    <div className="container">
      <h1>{courseInfo.title}</h1>
      <p><strong>Course Duration:</strong> {courseInfo.duration}</p>
      <p><strong>Eligibility:</strong> {courseInfo.eligibility}</p>
      <p><strong>Medium of Instruction:</strong> {courseInfo.medium}</p>
      <p><strong>Available Courses:</strong></p>
      <ul>
        {courseInfo.courses.map((course, idx) => (
          <li key={idx}>{course}</li>
        ))}
      </ul>
      <Button variant="primary" onClick={() => alert('Open form here')}>Apply Now</Button>
    </div>
  );
};

export default CourseDetails;
