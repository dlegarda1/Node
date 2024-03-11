const fs=require('fs');

console.log("Inicio del programa");

//Lectura de un archivo

const archivo=fs.readFileSync('index.html', 'utf8'); 
console.log(archivo);
fs.renameSync("index.html", "main.html");
fs.writeFileSync("copia.txt","Este es un archivo de copia");
fs.appendFileSync("copia.txt"," con contenido adicional");
fs.unlinkSync("copia.txt");



/*fs.readFile('index.html', 'utf8', (err, contenido) => {
  if (err){
    throw err;
  }else{
    console.log(contenido);
    }
    console.log("Lectura de archivo finalizada");
});
/*
console.log("despues de leer archivo");
//Renombrar un archivo
fs.rename("index.html", "main.html", (err) => {
    if (err){
        throw err;
    }console.log("Archivo renombrado");    
    });
  
console.log("despues de renombrar archivo");
//Agregar contenido a un archivo 
fs.appendFile("index.html",'<p>Hola Mundo</p>', (err) => {
    if (err){
        throw err;
    }console.log("Archivo modificado");
    });

    console.log("despues de agregar contenido");
//Crear un archivo
fs.writeFile("texto.txt", "Hola Mundo", (err) => {
        if (err){
            throw err;
        }console.log("Archivo creado");
        });
console.log("despues de crear archivo");
//Eliminar un fichero o carpeta
fs.unlink("texto.txt", (err) => {
    if (err) throw err;
    console.log("El archivo se ha eliminado");
});
console.log("despues de eliminar archivo");
*/