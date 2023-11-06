function hola(nombre){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            console.log("Hola"+nombre);
            miCallback(nombre);
        }, 1000); 
    })
}

function hablar(callbackHablar){
    setTimeout(function() {
        console.log("bla bla bla");
        callbackHablar();
    }, 1000);
}

function adios(nombre, otrocallback) {
    setTimeout(function() {
        console.log("Adios "+ nombre);
        otrocallback();
    }, 1000);
}

console.log("Iniciando el proceso....")
hola('Ariel')
    .then((nombre )=>{
        console.log("terminando el proceso")
    })