import React from "react";
import { useProductsContext } from "./Context";
import EdcuationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
const CvForm = () => {
  const { personal, education, experience } = useProductsContext();
  const { first_name, last_name, phone, title, email, address } = personal;
  return (
    <div>
      <div className='heading-container'>
        <h3>
          {first_name + " " + last_name}, <span>{title}</span>
        </h3>
        <div>{address + "|" + phone + "|" + email}</div>
      </div>
      <div className='education-section'>
        <h5>EDUCATION</h5>
        <div className='education-container'>
          {education?.map((item) => {
            return <EdcuationForm item={item} key={item.id} />;
          })}
        </div>
      </div>
      <div className='education-section'>
        <h5>EXPERIENCE</h5>
        <div className='education-container'>
          {experience?.map((item) => {
            return <ExperienceForm item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CvForm;
