export default function validateAdd(input) {
    let errors = {};
    
    if (!input.authorization) errors.authorization = "Select authorization level";
  
    return errors;
  }
  
