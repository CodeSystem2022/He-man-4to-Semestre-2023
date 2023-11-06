//Sebastian Barros
function soyAsincrona(miCallback){
    setTimeout(function(){
        console.log('Hola, soy una funcion asincrona');
    }, 1000);
//Sebastian Barros
    
//Agustin Loyola
}
console.log('Iniciando el proceso...');
soyAsincrona(function(){
    console.log('Terminando el proceso...');
});
//Agustin Loyola
