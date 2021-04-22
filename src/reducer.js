const reducer = (state, action) => {
  if (action.type === "CHANGE_CONTENT") {
    const { name, value } = action.payload;
    return { ...state, personal: { ...state.personal, [name]: value } };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default reducer;
