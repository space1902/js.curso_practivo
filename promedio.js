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
    htmlValbutton = htmlValbutton + '<button  class="form__buttont" type="button" onclick="calcularPromedio()">Obtener promedio</button>';
    var htmlInfoReq = '';
    htmlInfoReq = htmlInfoReq + '<div class="modal-body" style="text-align: end;">' + htmlNomCampos + '</div>';
    htmlInfoReq = htmlInfoReq + '<div class="modal-body">' + htmlValCampos + htmlValbutton + '</div> ';
    $('#info_requerida').html(htmlInfoReq);
    //$('#info_requerida').append(htmlInfoReq);

}

function calcularPromedio() {
  var numero1 = document.getElementById('Cuadrado').value;
  const prom = [];
  for(var i = 0; i < numero1; i++){
  var inputV = document.getElementById('input'+[i+1]).value;
  var umer = parseInt(inputV, 10);
  prom.push(umer);
  }
  console.log(prom);
  /*   
  let sumaPromedio = 0;
  
  for (let i = 0; i <lista.length; i++) {
      sumaPromedio = sumaPromedio + lista[i];
  }
  */
  const sumaLista = prom.reduce(
      function (valorAcumulado = 0, elemento){
              return valorAcumulado + elemento;
      }
  );
  
  let promedio = sumaLista / prom.length;
  alert ("El area del cuadrado mide " + promedio);
  return promedio;
  
  }

