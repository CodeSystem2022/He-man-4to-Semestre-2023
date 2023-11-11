const fs = require('fs');
//Primeero leemos el archivo.txt
function leer(ruta, cb){
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}
//Segundo escribimos el archivo.txt creandolo
function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function (err){
        if (err) {
            console.log("No se ha podido escribir", err);
        } else {
            console.log("Se ha escrito correctamente");
        }
    })
}

