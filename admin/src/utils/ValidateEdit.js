export default function validateAdd(input) {
    let errors = {};
    
    
    if (!/[a-zA-Z\s]+$/.test(input.name)) {
      errors.name = "Only letters are accepted";
    }
  
  
    if (input.username.length > 20) errors.username = "Too long username";
    if (!/^[a-zA-Z\s0-9._]+$/.test(input.username)) {
      errors.username = "Invalid username";
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.email)) {
      errors.email = "A valid email is required";
    }
    if (input.email.length > 80) {
      errors.email = "That email is too long";
    }
    //por qué hasta 80 y no menos? respuesta: https://stackoverflow.com/q/386294/19410517
   
    if (!input.country) errors.country = "Select your country";
    if (!input.authorization) errors.authorization = "Select authorization level";
  
    return errors;
  }
  
