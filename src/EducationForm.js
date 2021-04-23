import React from "react";

const EducationForm = ({ item, key }) => {
  const { school, degree, graduation_time, city, tasks } = item;
  return (
    <>
      <div className='education-form' key={key}>
        <div className='header-container'>
          <h5>
            <strong>{school}</strong>
          </h5>
          <div>
            {degree},{graduation_time}
          </div>
        </div>
        <div className='container-right'>{city}</div>
      </div>
      <ul>
        {tasks.split("\n").map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default EducationForm;
