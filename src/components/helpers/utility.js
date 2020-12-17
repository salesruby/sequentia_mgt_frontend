export const updateObject = (oldObject, updatedData) => {
  return {
    ...oldObject,
    ...updatedData,
  };
};

export const formFieldChangeHandler = (event, values, setValues) => {
  event.preventDefault();
  if (event.target.type === "checkbox") {
    setValues({ ...values, [event.target.name]: !values[event.target.name] });
  } else setValues({ ...values, [event.target.name]: event.target.value });
};
