const funciones=require('./funciones.js');

setTimeout(funciones.sumar, 2000, 5, 3);
console.log("antes de setImmediate");
setImmediate(funciones.sumar, 10, 3);
console.log("despues de setImmediate");
setInterval(funciones.sumar, 2000, funciones.sumar(funciones.sumar(2,5),5), 3);
// setTimeout y setInterval ejecutan una función después de un tiempo determinado (en milisegundos) desde que
