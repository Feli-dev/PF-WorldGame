let validate = (type, event) => {
  let reg = new RegExp(/(?!.*[\.\-\_]{5,})^[a-zA-Z0-9\.\-\_]{0,20}$/);
  if (type === "username") {
    if (reg.test(event) === false) {
      return "Invalid User";
    }
    return "";
  } else {
    if (event.length < 4) {
      return "Enter your password";
    } else if (event.length > 50) {
      return "there's only passwords whit less than 50 characters";
    }
    return "";
  }
};

export default validate;
