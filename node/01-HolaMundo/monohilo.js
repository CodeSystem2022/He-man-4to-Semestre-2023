console.log("Hola a toda la cohorte 2022")


var i = 0;
setInterval(function() {
    console.log(i);
    i++;
//
//if (i===5){
//    console.log("Forzamos un error");
//    var a = 3 + z;
// }

},1000);

console.log("Segunda instruccion");

//En este punto se instala PM2
//con el comando "npm install -g pm2"

//Ahora con el comando pm2 start monohilo.js
//iniciamos la app de nodejs