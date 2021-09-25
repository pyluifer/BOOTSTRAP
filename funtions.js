/****FUNCION PARA MANIPULAR EL DOM */
function cambiarImagen(){
    document.getElementById("img1").src="https://image.goat.com/750/attachments/product_template_pictures/images/060/411/170/original/FY0650.png.png"
}


/***VARIABLES***** */
const numero_5 = 5;
var cadena ="Hola Mundo"
let numero_decimal = 10.2

/*****FUNCIONES*****/
function saludar() {
    alert("Hola Mundo");
} 

function operacion(){
    sumar(5,2)
}

function sumar(num1, num2){
return num1 + num2
}

let funcionFlecha=()=>{
    console.log("esto es una funcion felcha");
}

/*******CICLOS****** */
for(let i= 0; i<10; i++){
    console.log(i);
}

let personas =["juan","pedro","maria","camilo"]
for(i=0;i<personas,length; i++ ){
    console.log(personas[i]);
}
console.log("--------FOREACH--------");
personas.forEach(element => {
    console.log(element);
});

console.log("--------WHILE--------");
let contador =0;
while(contador < personas.length){
console.log(personas[contador])
++contador;
if(contador ==2){
    console.log("TERMINANDO RECORRIDO")
}
}

/***ESTRUCTURAS DE DESICION*****/
if(5<2){

}