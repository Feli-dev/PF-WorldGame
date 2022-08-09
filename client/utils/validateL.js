let validate = (type, event,isSpanish) => {
  let reg = new RegExp(/(?!.*[\.\-\_]{5,})^[a-zA-Z0-9\.\-\_]{0,20}$/);
  if (type === "username") {
    if (reg.test(event) === false) {
      return isSpanish?"Usuario invalido": "Invalid User";
    }
    return "";
  } else {
    if (event.length < 4) {
      return isSpanish? "Introduzca su contraseña": "Enter your password";
    } else if (event.length > 50) {
      return isSpanish?"Sólo hay contraseñas con menos de 50 caracteres":"There's only passwords whit less than 50 characters";
    }
    return "";
  }
};

export default validate;
