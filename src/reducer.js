const reducer = (state, action) => {
  if (action.type === "CHANGE_CONTENT") {
    const { name, value } = action.payload;
    return { ...state, personal: { ...state.personal, [name]: value } };
  }
  if (action.type === "CHANGE_CONTENT_EDU") {
    const { id, name, value } = action.payload;
    let edu = state.education.filter((item) => item.id !== id);
    let newItem = state.education.find((item) => item.id === id);
    newItem = { ...newItem, [name]: value };
    return {
      ...state,
      education: [...edu, newItem].sort((a, b) => {
        return a.id - b.id;
      }),
    };
  }
  if (action.type === "REMOVE_CONTENT_EDU") {
    let newEdu = state.education.filter((item) => item.id !== action.payload);
    return { ...state, education: [...newEdu] };
  }
  if (action.type === "ADD_CONTENT_EDU") {
    let newItem = {
      id: state.education.length,
      school: "",
      degree: "",
      graduation_time: "",
      city: "",
      tasks: "",
    };
    let newEdu = [...state.education, newItem];
    return { ...state, education: [...newEdu] };
  }

  if (action.type === "CHANGE_CONTENT_EX") {
    const { id, name, value } = action.payload;
    let ex = state.experience.filter((item) => item.id !== id);
    let newItem = state.experience.find((item) => item.id === id);
    newItem = { ...newItem, [name]: value };
    return {
      ...state,
      experience: [...ex, newItem].sort((a, b) => {
        return a.id - b.id;
      }),
    };
  }

  if (action.type === "REMOVE_CONTENT_EX") {
    let newEx = state.experience.filter((item) => item.id !== action.payload);
    return { ...state, experience: [...newEx] };
  }

  if (action.type === "ADD_CONTENT_EX") {
    let newItem = {
      id: state.experience.length,
      start_time: "",
      end_time: "",
      company: "",
      city: "",
      title: "",
      tasks: "",
    };
    let newEx = [...state.experience, newItem];
    return { ...state, experience: [...newEx] };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
