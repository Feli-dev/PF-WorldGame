export default function validateInput(input, isSpanish) {
  let errors = {};

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(input.email)) {
    errors.email = isSpanish? "Se requiere un correo electrónico válido" : "A valid email is required";
  }
  if (input.email.length > 80) {
    errors.email = isSpanish? "El correo es demasiado largo": "That email is too long";
  }
  //por qué hasta 80 y no menos? respuesta: https://stackoverflow.com/q/386294/19410517

  if (input.username.length > 20) errors.username = isSpanish? "Nombre de usuario demasiado largo":"Too long username";
  if (!/^[a-zA-Z\s0-9._]+$/.test(input.username)) {
    errors.username =isSpanish?"Nombre de usuario invalido": "Invalid username";
  }

  if (input.password.length > 50)
    errors.password = isSpanish? "Maximo 50 caracteres":"Password max 50 characters";
  if (!/^(?=.*[A-Za-z])(?=.*\d).{4,}$/.test(input.password)) {
    errors.password =isSpanish?"Mínimo 4 caracteres, una letra y un número": "Minimum 4 characters, one letter and a number";
  }

  if (input.repeatPassword.length < 1)
    errors.repeatPassword = isSpanish ?"Introduzca la contraseña":"Enter your password";
  if (input.password !== input.repeatPassword)
    errors.repeatPassword = isSpanish?"Las contraseñas no coinciden":"Passwords dont match";

  if (!input.country) errors.country =isSpanish?"Selecciona tu país": "Select your country";

  return errors;
}
