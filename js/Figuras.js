//Cuadrado
console.group("Cuadrados")
const lado = 5;
console.log("Los lados del cuadrado miden: "  + lado + "cm");

function perimetroCuadrado(lado){
    return lado * 4 ;
    
console.log("El perimetro del cuadrado es: "  + perimetroCuadrado(lado) + "cm");
} 

function areaCuadrado (lado){
return lado * lado;

console.log("El area del cuadrado es: "  + areaCuadrado(lado) + "cm^2");
} 
console.groupEnd();

//Triangulo
console.group("Cuadrados")
//const ladoTriangulo = 6;
//const ladoTriangulo2 = 6;
//const ladoTriangulo3 = 6;
//const alturaTriangulo = 5.5;
/*console.log(
    "Los lados del cuadrado miden: "  
    + ladoTriangulo + "cm, " 
    + ladoTriangulo2 + "cm, "
    + ladoTriangulo3 + "cm"
    );
*/
//console.log("La altura del triangulo es: "  + alturaTriangulo + "cm");

function perimetroTriangulo(ladoTriangulo ,ladoTriangulo2 , ladoTriangulo3){
    //console.log("El perimetro del cuadrado es: "  + perimetroTriangulo(ladoTriangulo ,ladoTriangulo2 , ladoTriangulo3) + "cm");
    var suma = ladoTriangulo + ladoTriangulo2 +  ladoTriangulo3 ;
   return  suma;
} 

function areaTriangulo (ladoTriangulo3, alturaTriangulo){  ;
    return (ladoTriangulo3 * alturaTriangulo)/2
}

function alturaTriangulo(ladoTriangulo ,ladoTriangulo2 , ladoTriangulo3){
    var altura;
    if(ladoTriangulo == ladoTriangulo2){
    altura =  Math.sqrt ((ladoTriangulo*ladoTriangulo) - ((ladoTriangulo3*ladoTriangulo3)/2));
}
if (ladoTriangulo == ladoTriangulo3){
altura =  Math.sqrt ((ladoTriangulo*ladoTriangulo) - ((ladoTriangulo2*ladoTriangulo2)/2));
}
if (ladoTriangulo2 == ladoTriangulo3){
altura =  Math.sqrt ((ladoTriangulo2*ladoTriangulo2) - ((ladoTriangulo*ladoTriangulo)/2));
}
return altura;
}
console.groupEnd();

//circulos
/*console.group("Circulos")
const radioCirculo = 4;
console.log("El radio del circulo es: "  + radioCirculo + "cm");
const diametroCirculos =  radioCirculo *  2;
console.log("El diametro del circulo es: "  + diametroCirculos + "cm");
const PI = Math.PI;
console.log("PI es: "  + PI);
const perimetroCirculos = diametroCirculos * PI;
console.log("El perimetro del circulo es: "  + perimetroCirculos + "cm");
const areaCirculos = PI * (radioCirculo * radioCirculo);
console.log("El area del circulo es: "  + areaCirculos + "cm^2");
*/
function diametroCirculos (radioCirculo){
return radioCirculo *  2;
}  
function perimetroCirculos (diametroCirculos){
    const pi = 3.1416;
return diametroCirculos * pi;
} 
function areaCirculos (radioCirculo){
    const prub = 3.1416 * (radioCirculo * radioCirculo);
return prub;
} 
console.groupEnd();

//Funciones html
function CalcularPerimetroCuadrado(){
 const valueC  = document.getElementById("Cuadrado").value;
 const PerimC = perimetroCuadrado(valueC);
 alert ("El perimetro del cuadrado mide " + PerimC);
}

function CalcularAreaCuadrado(){
    const valueC  = document.getElementById("Cuadrado").value;
    const areaC = areaCuadrado(valueC);
    alert ("El area del cuadrado mide " + areaC);
}

function CalcularPerimetroTriangulo(){
    const valueT1  = document.getElementById("Triangulo1").value;
    const valueT2  = document.getElementById("Triangulo2").value;
    const valueT3  = document.getElementById("Triangulo3").value;
    if((valueT1 == valueT2 && valueT3 != valueT2) || (valueT3 == valueT2 && valueT1 != valueT2) || (valueT1 == valueT3 && valueT3 != valueT2)){
        const areaT1 = alturaTriangulo(valueT1, valueT2, valueT3);
    alert ("Es un triangulo isoseles, La altura es: " + areaT1 );
}
    
    const PerimT = perimetroTriangulo(valueT1, valueT2, valueT3);
    alert ("El perimetro del triangulo es: " + PerimT);

   }
   
   function CalcularAreaTriangulo(){
    const valueT1  = document.getElementById("Triangulo1").value;
    const valueT2  = document.getElementById("Triangulo2").value;
    const valueT3  = document.getElementById("Triangulo3").value;
    if((valueT1 == valueT2 && valueT3 != valueT2) || (valueT3 == valueT2 && valueT1 != valueT2) || (valueT1 == valueT3 && valueT3 != valueT2)){
        const areaT1 = alturaTriangulo(valueT1, valueT2, valueT3);
    alert ("Es un triangulo isoseles, La altura es: " + areaT1);
}
       const areaT = areaTriangulo(valueT1, valueT2, valueT3);
       alert ("El area del cuadrado mide " + areaT);
   }

   
function CalcularPerimetroCirculo(){
    const valueO  = document.getElementById("Circulo").value;
    const PerimO = perimetroCirculos(valueO);
    alert ("El perimetro del cuadrado mide " + PerimO);
   }
   
   function CalcularAreaCirculo(){
       const valueO  = document.getElementById("Circulo").value;
       const areaO = areaCirculos(valueO);
       alert ("El area del cuadrado mide " + areaO);
   }