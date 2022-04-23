const PrecioOriginal = 120;
const Descuento = 18;
const PorcentajePrecioConDesc = 100 - Descuento;
const precioDescuento = (PrecioOriginal * PorcentajePrecioConDesc)/100;
/*
console.log({
    PrecioOriginal,
    Descuento,
    PorcentajePrecioConDesc,
    precioDescuento
})
*/
var cuponer = ["cupon1", "cupon2", "cupon3"];
function calcularDescuento (prec1,desc1 ){
    
    const PorcentajePrecioConDesc = 100 - desc1;
    const precioDescuento = (prec1 * PorcentajePrecioConDesc)/100;
    return precioDescuento;
}

function prueba(){
const prec = document.getElementById("Precio");
const prec1 = prec.value;
const desc = document.getElementById("Descuento");
const desc1 = desc.value;
for(const i = 0, tam = cuponer.length; tam < i; i++){

if(desc1 == cuponer[i]){
    const d1 = 10;
}else if(desc1 == cuponer[i]){
    
    const d1 = 20;
}else if(desc1 == cuponer[i]){
    
    const d1 = 30;
}
const pri = calcularDescuento (prec1,d1 );
const res = document.getElementById("resultP");
res.innerText = "El precio con descuento es: " + pri;
}

}
