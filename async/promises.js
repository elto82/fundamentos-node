function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("hola, " + nombre);
      resolve(nombre);
    }, 1000);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Bla bla bla...");
      resolve(nombre);
      //reject("hay un error");
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("adios " + nombre);
      resolve();
    }, 1000);
  });
}

//--
console.log("iniciando proceso...");

hola("moti")
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(hablar)
  .then(adios)
  .then(() => {
    console.log("terminado el proceso");
  })
  .catch((error) => {
    console.log("ha habido un error");
    console.log(error);
  });
