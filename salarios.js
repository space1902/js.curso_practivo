//Helpers
function calcularPromedio(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, elemento){
                return valorAcumulado + elemento;
        }
    );
    
    let promedio = sumaLista / lista.length;
    return promedio;
    }

    //mediana
const salaryCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salaryColSort = salaryCol.sort(
    function (a,b){
        return a - b;
    }
);


    //calculadora de mediana
function medianaSalary(lista){
    const mitad = parseInt(lista.length/2);
    if(lista.length % 2){
        
        const pMitad1 = lista[mitad - 1];
        const pMitad2 = lista[mitad];
        const mediana = calcularPromedio([pMitad1,pMitad2]);
        return mediana;
    }else{
        const pMitad = lista[mitad];
        return pMitad;
    }
}
//mdiana del top10%
//medianaSalary

const spliceStart = (salaryColSort.length * 90)/100; 
const spliceCount = salaryColSort.length - spliceStart;

const salary10 = salaryColSort.splice(spliceStart,spliceCount);

const medianaTop10 = medianaSalary(salary10);

console.log(
    medianaSalary,medianaTop10

);