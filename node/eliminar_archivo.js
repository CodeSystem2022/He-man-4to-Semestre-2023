// tercero eliminamos el archivo1.txt
function borrar(ruta, cb){

	fs.unlink(ruta, cb); // elimina de manera asincrona
}

borrar('${__dirname}/archivo1.txt', console.log);