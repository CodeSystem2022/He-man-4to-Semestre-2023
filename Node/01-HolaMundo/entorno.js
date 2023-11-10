let nombre = process.env.NOMBRE || 'Valor por default, Emir';
let web = process.env.WEB || 'No tengo web'

console.log('Hola '+nombre);
console.log('Mi web es: '+web);