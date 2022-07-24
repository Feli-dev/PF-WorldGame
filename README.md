# NO MERGEAR Y NO BORRAR:

Acá subí los cambios realizados hasta el momento al componente register. Ya hay una función validadora de los campos, y el botón despacha la acción de crear un usuario, y esto funciona optimamente.

Cosas que hay que hacerle al corto plazo :
-Que deshabilite el botón si hay errores
-Que rediriga a login luego de crear al usuario
-Revisar estilos

Cosas que hacerle a mediano plazo (no necesario para esta demo):
-Que compruebe si el username no está siendo usado por otro usuario actualmente.
-Cambiar el dropdown por un input.

EN CASO DE ERRORES al intentar crear el usuario:

1-Puede ser porque el formulario de registro no considera el campo "name" (no se confunda con "username"), por lo que este va vacío. Actualmente el back pide que el name sea único, y si ya hay otro user con el "name" vacío, la ruta rechaza la creación del usuario. Este requerimiento de que el "name" sea único será modificada, dado que no es necesario que sea único (el username sí debe ser único)

2- Puede ser la interacción emulador-backend. Leer la nota que se encuentra en actions/index.js en la acción PostUser para resolverlo.
 
