const lista1 = [1,2,4,5,7,33,4,5,6,6,6,9,7,7,7,88,3,9,9,9];

const lista2 = {};

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
   htmlValbutton = htmlValbutton + '<button  class="form__buttont" type="button" onclick="moda()">Obtener promedio</button>';
   var htmlInfoReq = '';
   htmlInfoReq = htmlInfoReq + '<div class="modal-body" style="text-align: end;">' + htmlNomCampos + '</div>';
   htmlInfoReq = htmlInfoReq + '<div class="modal-body">' + htmlValCampos + htmlValbutton + '</div> ';
   $('#info_requerida').html(htmlInfoReq);
   //$('#info_requerida').append(htmlInfoReq);

}

function moda(){
  const lista2 = {};
  var numero1 = document.getElementById('Cuadrado').value;
  const prom = [];

  for(var i = 0; i < numero1; i++){
  var inputV = document.getElementById('input'+[i+1]).value;
  var umer = parseInt(inputV, 10);
  prom.push(umer);
  }
  
  prom.map(
    function(elemento){
        if(lista2[elemento]){
            lista2[elemento] += 1;
        }else{
            lista2[elemento] = 1;   
        }
    }
);

const listaArray = Object.entries(lista2).sort(
    function(a, b){return a[1] - b[1];}
);

const moda = listaArray[listaArray.length - 1]

const moda1 = moda[0];
console.log(moda1)
alert ("La moda es " + moda1);
return false;
}