function hola(nombre, miCallback){
    setTimeout(function (){
        console.log("Hola"+nombre);
        miCallback(nombre);
    }, 1000);  
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

//--Proceso principal
console.log("Iniciando el proceso...");
hola("Carlos",function() {
    adios(nombre, function() {
        console.log("Terminando el proceso...");
    });   
});
