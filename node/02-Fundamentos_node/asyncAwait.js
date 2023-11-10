async function main(){
	let nombre = await hola('Ariel');
	await hablar();
	await hablar();
	await hablar();
	await adios(nombre);

}