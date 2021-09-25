/****FUNCION PARA MANIPULAR EL DOM */
function cambiarImagen(){
    let alt= document.getElementById("img1").alt;
    if(alt=="img1"){
        document.getElementById("img1").src="https://image.goat.com/750/attachments/product_template_pictures/images/060/411/170/original/FY0650.png.png"
        document.getElementById("img1").alt="img2"
    }else{
        document.getElementById("img1").src="https://image.goat.com/750/attachments/product_template_pictures/images/058/792/283/original/CW3985_401.png.png"
        document.getElementById("img1").alt="img1"
    }
    
}


/***VARIABLES***** */
const numero_5 = 5;
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