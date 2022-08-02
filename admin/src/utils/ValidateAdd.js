export default function validateAdd(input) {
  let errors = {};
  
  
  if (!/^[a-zA-Z\s]+$/.test(input.name)) {
    errors.name = "Only letters are accepted";
  }


  if (input.username.length > 20) errors.username = "Too long username";
  if (!/^[a-z\s0-9._]+$/.test(input.username)) {
    errors.username = "Invalid username (only lowercase)";
  }
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.email)) {
    errors.email = "A valid email is required";
  }
  if (input.email.length > 80) {
    errors.email = "That email is too long";
  }
  //por qué hasta 80 y no menos? respuesta: https://stackoverflow.com/q/386294/19410517


  if (input.password.length > 50)
    errors.password = "Password max 50 characters";
  if (!/^(?=.*[A-Za-z])(?=.*\d).{4,}$/.test(input.password)) {
    errors.password = "Minimum 4 characters, one letter and a number";
  }

  if (input.repeatPassword.length < 1)
    errors.repeatPassword = "Enter your password";
  if (input.password !== input.repeatPassword)
    errors.repeatPassword = "Passwords dont match";

  if (!input.country) errors.country = "Select your country";
  if (!input.authorization) errors.authorization = "Select authorization level";

  return errors;
}
