import React from "react";
import { useProductsContext } from "./Context";
const CvForm = () => {
  const { personal } = useProductsContext();
  const { first_name, last_name, phone, title, email, address } = personal;
  return (
    <div>
      <div className='heading-container'>
        <h3>
          {first_name + " " + last_name}, <span>{title}</span>
        </h3>
        <div>{address + "|" + phone + "|" + email}</div>
      </div>
    </div>
  );
};

export default CvForm;
