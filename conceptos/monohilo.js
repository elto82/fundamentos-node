console.log("hola");

let i = 0;

// Al ser monohilo el peligro recae en que si el código se ejectua y no tenemos cuidado el no asignar una variable de manera correcta me puede arrojar un error.
//Hay que escuchar los errores, es muy imporante de todo lo que pase en el código. Comprobar funciones y revisar lo que posiblmente puede fallar.
//Es clave estar pendiente de todos los errores que pueda cortar la ejecución, lo que se corta corta todo.
// Todo lo que sea asíncrono y lo pueda llevar a ello, pues llevarlo, y todo lo que no, revisar que no corte el programa.

setInterval(function () {
  console.log(i);
  i++;
  //console.log("sigo activo");
  if (i === 5) {
    //var a = 3 + z;
  }
}, 1000);
// se muestra en segunda posicion debido a que lo que esta en setinterval es asincrono
console.log("segunda instruccion");
