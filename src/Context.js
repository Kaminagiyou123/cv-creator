import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
const initialState = {
  personal: {
    first_name: "",
    last_name: "",
    phone: "",
    title: "",
    address: "",
    email: "",
  },
  experience: [
    {
      id: 0,
      start_time: "",
      end_time: "",
      company: "",
      city: "",
      title: "",
      tasks: {},
    },
  ],
  education: [
    {
      id: 0,
      school: "",
      degree: "",
      graduation_time: "",
      city: "",
      tasks: {},
    },
  ],
  others: [
    {
      id: 0,
      content: "",
    },
  ],
  current_experience: {
    id: null,
    start_time: "",
    end_time: "",
    company: "",
    city: "",
    title: "",
    tasks: {},
  },
  current_education: {
    id: null,
    school: "",
    degree: "",
    graduation_time: "",
    city: "",
    tasks: {},
  },
  current_other: {
    id: null,
    content: "",
  },
};

const ProductsContext = React.createContext();
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const changePersonalInfo = ({ name, value }) => {
    dispatch({ type: "CHANGE_CONTENT", payload: { name, value } });
  };
  return (
    <ProductsContext.Provider
      value={{
        ...state,
        changePersonalInfo,
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
