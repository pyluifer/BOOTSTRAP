
/****Funcion que Consume una API******/
async function getCharacters(){
    /****Conectar con la api*******/
const peticion = await fetch("https://futuramaapi.herokuapp.com/api/v2/characters");
console.log("peticion");
console.log("-------------");
const personajes = await peticion.json();
console.log(personajes);
} 