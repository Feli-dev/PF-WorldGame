# User
## Changes
### Controllers
-   Restructurado el codigo de Users.
-   Añadiendo el filtrado en el select -> `Filtra por campos (country, premium, state, authorization)`.
-   Añadiendo metodo `confirm` para confirma el cambio de contraseña.
-   Corriendo errores.
-   Añadiendo función de agregar amigos.
-   Mostrar estado si esta online un usuario o no.
-   Arreglando las funciones de envio de correo.
### Models
-   Cambiando por default en el campo `authorization` como `User`.
-   Añadiendo campo `connect` en `User`.
-   Añadiendo modelo `Friend`.
### Routes
-   Restructurado el codigo de `users` y `login`.
-   Añadiendo nueva ruta *Email*
-   Añadiento la ruta *Email* en el index.
-   Añadiendo el envio de correos en las rutas `Post` y `Put` de `user`.
-   Añadiendo el filtro de usuarios en las rutas `Get` de `user`.
-   Añadiendo rutas (`Get, Post y Put`) para el modelo `Friend`.
### Tools
-   Añadiendo la clase `Email` para el envio de correos.
-   Corrigiendo la clase `Email` para la redirección en caso cambie la contraseña.
## Others
### User
-   Modificado el index: añadiendo un parametro `Pro-Admin` al crear el administrador.

> _GET:_ *localhost:3001/User/*
-   Al enviar como datos `all` se omiten los filtros y trae todos los usuarios sin filtrar.
-   No se filtrara si lo buscas por id
-   Si se desea filtrar solo ciertos campos, se ingresan los datos respectivos y los que no se usaran se puede colocar por el dato `all` por defecto.
*Todos los datos omitidos*
1.  Ruta: `localhost:3001/User?country=all&premium=all&state=all&authorization=all`
*Filtrando datos*
1.  Ruta: `localhost:3001/User?country=peru`


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
### Friend
> _GET_ *localhost:3001/Friend*
- Muestra toda las relaciones con amigos.

```json
{
   "Request": [
    {
      "username": "admin",
      "id": 1,
      "FriendId": 1,
      "name": "sebas",
      "state": "Aceptado",
      "connect": false,
      "UserId": 2
    },
    {
      "username": "qrow",
      "id": 2,
      "FriendId": 2,
      "name": "qrow",
      "state": "Aceptado",
      "connect": true,
      "UserId": 1
    }
  ]
}
```
1.  username -> Usuario del amigo agregado.
2.  id -> el id del registro.
3.  FriendId -> Id del amigo agregado.
4.  name -> Nombre del amigo agregado.
5.  state -> Estado de solicitud de amistad (`Enviado, Recibido o Aceptado`).
6.  connect -> Estado que muestra si el amigo esta conectado o no.
7.  UserId -> Tu id asociado con el modelo usuarios.

> _POST_ *localhost:3001/Friend*

- Para enviar una solicitud de amistad a otro usuario debes enviar tu id y el id del usuario a agregar.

```json
{
    "UserId": "1",
    "FriendId": "2"
}
```
- Cuando envias una solicitud por defecto el `state` estara registrado como `Enviado` en tu registro y del usuario a agregar como `Recibido`.

```json
{
  "Request": [
    {
      "username": "qrow",
      "id": 1,
      "FriendId": 2,
      "name": "",
      "state": "Enviado",
      "connect": true,
      "UserId": 1
    },
    {
      "username": "admin",
      "id": 2,
      "FriendId": 1,
      "name": "sebas",
      "state": "Recibido",
      "connect": true,
      "UserId": 2
    }
  ]
}
```

> _PUT_ *localhost:3001/Friend*
- Este campo es para aceptar una solicitud.
- El usuario que recibe la solicitud que esta como estado `Recibido` debe usar esta ruta.
- Envias el `UserId y FriendId`.

```json
{
    "UserId": "2",
    "FriendId": "1"
}
```

> _DELETE_ *localhost:3001/Friend*
- Para eliminar tanto el usuario como el amigo puede eliminar un amigo o rechazar un solicitud de amistad a traves de esta ruta.
- Se debe enviar el `id` del usuario y del usuario amigo o que envia la solicitud.

```json
{
    "UserId": "2",
    "FriendId": "1"
}
```