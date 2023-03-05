/* 
Funciones Callback
Una funcion callback es una funcion que es pasada como argumento a otra funcion, para ser llamada(called back) en otro momento.
La funcion que recibe como argumento otras funciones es denominada funcion de orden superior (higher-order function), esta contiene la logica correspondiente para ejecutar adecuadamente la funcion callback. 
*/

function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("hola, " + nombre);
    miCallback(nombre);
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("adios " + nombre);
    otroCallback();
  }, 1000);
}

console.log("iniciando proceso ");

hola("Noti", function (nombre) {
  adios(nombre, function () {
    console.log("terminando proceso");
  });
});
