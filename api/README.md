# User
## Changes
### Controllers
-   Restructurado el codigo de Users.
-   Añadiendo el filtrado en el select -> `Filtra por campos (country, premium, state, authorization)`.
-   Añadiendo metodo `confirm` para confirma el cambio de contraseña.
-   Corriendo errores.
### Models
-   Cambiando por default en el campo `authorization` como `User`.
### Routes
-   Restructurado el codigo de `users` y `login`.
-   Añadiendo nueva ruta *Email*
-   Añadiento la ruta *Email* en el index.
-   Añadiendo el envio de correos en las rutas `Post` y `Put` de `user`.
-   Añadiendo el filtro de usuarios en las rutas `Get` de `user`.
### Tools
-   Añadiendo la clase `Email` para el envio de correos.
## Others
### User
-   Modificado el index: añadiendo un parametro `Pro-Admin` al crear el administrador.

> _GET:_ *localhost:3001/User/*
-   Al enviar como datos `all` se omiten los filtros y trae todos los usuarios sin filtrar.
-   No se filtrara si lo buscas por id.
-   Si se desea filtrar solo ciertos campos, se ingresan los datos respectivos y los que no se usaran se puede colocar por el dato `all` por defecto.
*Todos los datos omitidos*
```json
{
    "country": "all",
    "premium": "all",
    "state": "all",
    "authorization": "all"
}
```
*Filtrando datos*
```json
{
    "country": "peru",
    "premium": "all",
    "state": "all",
    "authorization": "user"
}
```

> _POST:_ *localhost:3001/User/*
- Los datos `username, password y email` no pueden estar vacios.
- Se pueden modificar los datos.
- El id siempre debe ser ingresado.
- Cuando se agrega el usuario se envia a su correo una confirmación de que se registro.
```json
{
    "username": "qrow22",
    "password": "1234",
    "email": "qrow.studio2021@gmail.com"
}
```
- Los datos opcionales pueden registrarse por defaul, pero evitar enviar otro tipo de dato.
Ejm:

_*Incorrecto*_
```json
{
    "premium": "true",
    "points": "",
}
```
_*Correcto*_
```json
{
    "premium": true,
    "points": "2",
}
```

> _PUT_ *localhost:3001/User/*
- Los datos `id, username, password y email` no pueden estar vacios.
- Se pueden modifcar los datos.
- Cuando se agrega el usuario se envia a su correo una confirmación de que se actualizo.
```json
{
    "id": "2",
    "username": "qrow22",
    "password": "1234",
    "email": "qrow.studio2021@gmail.com"
}
```
- Los datos opcionales no se actualizan por defecto, solo se actualizan siempre y cuando el dato que actualizaras sea diferente de lo registrado.
1.  Ejm 1:
-   *Se actualiza* ->
`Registrado en la bd: username -> sebas |`
`Actualizar la bd: username -> andres`
2.  Ejm 2:
-   *No se actualiza* ->
`Registrado en la bd: username -> sebas |`
`Actualizar la bd: username -> sebas`

> Recordar que si no se agrega o no se actualiza, puede ser por las validaciones en caso ya este registrado el mismo `username` u otro dato.
### Email
> _POST_ *localhost:3001/Email*
- Envias al correo con el dato email.
```json
{
    "email": "qrow.studio2021@gmail.com"
}
```

> _PUT_ *localhost:3001/Email*
- Actualizas la contraseña y envias un correo de confirmación.
```json
{
    "id": "1",
    "password": "1234",
    "email": "qrow.studio2021@gmail.com"
}
```