const lista1 = [
    100,
    200,
    //300,
    800,
    600
];

function obtenerNum(){
    var numero = document.getElementById('Cuadrado').value;
  
    var htmlNomCampos = '';
    var htmlValCampos = '';
    var htmlValbutton = '';
   for (var i = 0; i < numero; i++) {
     htmlNomCampos = htmlNomCampos + '  <label style="font-size:20Px;" > Numero '+ [i+1 ]+ ' </label><br><br>';
   }
   for (var i = 0; i < numero; i++) {
     htmlValCampos = htmlValCampos + '  <input  class="form__input_html" id="input'+[i+1]+'"  type="number"  ></><br><br>';
   }
   htmlValbutton = htmlValbutton + '<button  class="form__buttont" type="button" onclick="calcularProm()">Obtener mediana</button>';
   var htmlInfoReq = '';
   htmlInfoReq = htmlInfoReq + '<div class="modal-body" style="text-align: end;">' + htmlNomCampos + '</div>';
   htmlInfoReq = htmlInfoReq + '<div class="modal-body">' + htmlValCampos + htmlValbutton + '</div> ';
   $('#info_requerida').html(htmlInfoReq);
   //$('#info_requerida').append(htmlInfoReq);

   
   
   
}

//lista1.sort(function (a, b) {return a - b});
function calcularPromedio(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, elemento){
                return valorAcumulado + elemento;
        }
    );
    let promedio1 = sumaLista / lista.length;
    return promedio1;
}
function calcularProm() {
    var numero1 = document.getElementById('Cuadrado').value;
    const prom = [];
    for(var i = 0; i < numero1; i++){
    var inputV = document.getElementById('input'+[i+1]).value;
    var umer = parseInt(inputV, 10);
    prom.push(umer);
    }
    const sumaLista = prom.reduce(
        function (valorAcumulado = 0, elemento){
                return valorAcumulado + elemento;
        }
    );
    
    let promedio = sumaLista / prom.length
    console.log(promedio);
    prom.sort(function (a, b) {return a - b});
    console.log(prom);
    const mitad = parseInt( prom.length/2);

    function esPar(numero){
        if (numero % 2 === 0){
            return true;
        }
        else{
            return false;
        }
    
    }

    let mediana;

    if ( esPar(prom.length)  ){
    
        const elemento1 = prom[mitad - 1];
        
        const elemento2 = prom[mitad];
    
        const promedio1y2 = calcularPromedio([elemento1,elemento2]);
        mediana = promedio1y2;
        alert ("La mediana es mediana" + mediana);
    
    
    }else{
        mediana = prom[mitad];
        alert ("La mediana es mediana " + mediana);
    }
    return prom;
    
    }
    



