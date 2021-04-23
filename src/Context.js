import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const personal = localStorage.getItem("personal");
const experience = localStorage.getItem("experience");
const education = localStorage.getItem("education");
const others = localStorage.getItem("others");
const initialState = {
  personal: JSON.parse(personal) || {
    first_name: "",
    last_name: "",
    phone: "",
    title: "",
    address: "",
    email: "",
  },
  experience: JSON.parse(experience) || [
    {
      id: 0,
      start_time: "",
      end_time: "",
      company: "",
      city: "",
      title: "",
      tasks: "",
    },
  ],
  education: JSON.parse(education) || [
    {
      id: 0,
      school: "",
      degree: "",
      graduation_time: "",
      city: "",
      tasks: "",
    },
  ],
  others: JSON.parse(others) || [
    {
      id: 0,
      content: "",
    },
  ],
};

// const initialState = {
//   personal: {
//     first_name: "",
//     last_name: "",
//     phone: "",
//     title: "",
//     address: "",
//     email: "",
//   },
//   experience: [
//     {
//       id: 0,
//       start_time: "",
//       end_time: "",
//       company: "",
//       city: "",
//       title: "",
//       tasks: "",
//     },
//   ],
//   education: [
//     {
//       id: 0,
//       school: "",
//       degree: "",
//       graduation_time: "",
//       city: "",
//       tasks: "",
//     },
//   ],
//   others: [
//     {
//       id: 0,
//       content: "",
//     },
//   ],
// };

const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changePersonalInfo = ({ name, value }) => {
    dispatch({ type: "CHANGE_CONTENT", payload: { name, value } });
  };
  const changeEducationInfo = ({ id, name, value }) => {
    dispatch({ type: "CHANGE_CONTENT_EDU", payload: { id, name, value } });
  };
  const removeEducationInfo = (id) => {
    dispatch({ type: "REMOVE_CONTENT_EDU", payload: id });
  };
  const addEducationInfo = () => {
    dispatch({ type: "ADD_CONTENT_EDU" });
  };
  return (
    <ProductsContext.Provider
      value={{
        ...state,
        changePersonalInfo,
        changeEducationInfo,
        addEducationInfo,
        removeEducationInfo,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
