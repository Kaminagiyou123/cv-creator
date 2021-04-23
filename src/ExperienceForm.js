import React from "react";

const ExperienceForm = ({ item, key }) => {
  const { company, title, start_time, end_time, city, tasks } = item;
  return (
    <>
      <div className='education-form' key={key}>
        <div className='header-container'>
          <h5>
            <strong>{company}</strong>
          </h5>
          <div>
            {title},{start_time} to {end_time}
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

export default ExperienceForm;
