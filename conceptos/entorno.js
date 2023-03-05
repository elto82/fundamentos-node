//Veremos como desde cualquier sitio fuera del entorno podemos meter información adentro.

//let ejemplo = "Alejandro-sin"; //Esta variable la declaré aquí y puedo llamarla aquí.

//¿Qué ocurre cuando quiero llamar un valor que no va dentro del software, si quiereo llamar una API, o que necesito una clave, o un token?

//+ El código no  debería guardar este tipo de valores credenciales y por esto existen las variables de entorno. Si grabasemos estos datos estaríamos obligados a cambiar el código del programa cada vez que se ejecutan en lugares diferentes, dificultando el despliegue.

//+ Por buenas prácticas heredadas de Linux las variables de entorno que vengan desde fuera (process.env.VARIABLE ) se ponen en mayúscula y se separan mediante guion bajo en vez de espacio.

////+  Desde la terminal asignarle las variables antes del codigo: < NOMBRE:"Alejandro" MI_WEB"123QWERTY"  node conceptos/entorno.js >

//Nodemon: para usar en desarrollo  PM2: Para usar en producción. pm2 start y el achivo

let nombre = process.env.Nombre || "katty";
let web = process.env.Web || "sin web";
console.log("hola " + nombre);
console.log("mi web es " + web);
console.log("prueba con nodemon");
