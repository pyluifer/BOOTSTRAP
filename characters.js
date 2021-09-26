
/*
*Funcion que Consume una API
async -> Convierte la funcion a una funcion asincronica
*/
async function getCharacters(){
    /****Conectar con la api*******/
    //await -> convierte la funcion fetch a una funcion sincronica
const peticion = await fetch("https://futuramaapi.herokuapp.com/api/v2/characters");
console.log("peticion");
console.log("-------------");
/***optiene los datos de la peticion******/
const personajes = await peticion.json();
console.log(personajes);

let contenedor = document.getElementById("contImg");
//LISTAR LOS PERSONAJES 
personajes.forEach(element => {
    //console.log(element.Name);
    let strPersonaje="<div class='card' style='width: 18rem;'>";
    strPersonaje += "<img id='img1'";
    strPersonaje += "src='"+element.PicUrl+"'class='card-img-top'alt='"+element.Name+"' >";
    strPersonaje += "<div class='card-body'>";
    strPersonaje += "<h5 class='card-title'>"+element.Name+"</h5>";
    strPersonaje += "<p class='card-text'></p>";
    strPersonaje += "</div> </div>";
// Agrega codigo html al elemento div
    contenedor.innerHTML += strPersonaje;
});
   
    
} 