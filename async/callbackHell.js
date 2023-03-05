/* 
Los callback Hell se dan cuando empiezo a pasar una función como parámetro que a su vez llama a otra función como parámetro, y así hasta n.
Una estrategia para trabajar con estas estructuras lógicas tan monolíticas es usar estructuras de control y funciones recursivas.

Las funciones recursivas se llaman así mismas y mediante la estructura de control le digo cuantas veces voy a necesitar llamar la función así misma.
 */
function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("hola, " + nombre);
    miCallback(nombre);
  }, 1000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Bla bla bla...");
    callbackHablar();
  }, 500);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("adios " + nombre);
    otroCallback();
  }, 1000);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log("iniciando proceso... ");

/* hola("Noti", function (nombre) {
  hablar(function () {
    hablar(function () {
      hablar(function () {
        hablar(function () {
          adios(nombre, function () {
            console.log("terminando proceso");
          });
        });
      });
    });
  });
}); */

hola("Moti", function (nombre) {
  conversacion(nombre, 10, function () {
    console.log("proceso terminado");
  });
});
