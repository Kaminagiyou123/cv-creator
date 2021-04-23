import React from "react";

const OtherForm = ({ item, key }) => {
  const { id, content } = item;
  return (
    <>
      <div className='education-form' key={key}>
        <ul>
          {content.split("\n").map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default OtherForm;
