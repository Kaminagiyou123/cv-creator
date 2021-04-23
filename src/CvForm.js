import { useProductsContext } from "./Context";
import EdcuationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import OtherForm from "./OtherForm";
import React from "react";
const CvForm = () => {
  const { personal, education, experience, others } = useProductsContext();
  const { first_name, last_name, phone, title, email, address } = personal;

  return (
    <div>
      <div className='cv-form-container'>
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
        <div className='education-section'>
          <h5>OTHERS</h5>
          <div className='education-container'>
            {others?.map((item) => {
              return <OtherForm item={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvForm;
