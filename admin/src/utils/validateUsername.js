export default function validateUsername(input) {
    let errors = {};
    
     if (input.username.length > 20) errors.username = "Too long username";
    if (!/^[a-zA-Z\s0-9._]+$/.test(input.username)) {
      errors.username = "Invalid username";
    }
   
    return errors;
  }