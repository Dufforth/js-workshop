const lista1= [];
function agregarElemento(){
    let dato = document.getElementById("inputDato").value;
    lista1.push(dato);
}
function MostrarDatos(){
    let resultado = document.getElementById("resultado");
    resultado.innerHTML="";
    for(const dato of lista1){
        datoParrafo = document.createElement("p");
        datoParrafo.innerHTML = dato;
        resultado.appendChild(datoParrafo);
    }
    
}

function CalcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado=0,nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;
    return promedioLista;
}

function esPar(numero){
    if(numero % 2){
     return true;   
    }
    else{return false;}
}
function calcularMediana(){
    lista1.sort();
    const mitadLista1 = parseInt(lista1.length/2);
    let mediana;
        if (esPar(lista1.length)){
            const elemento1= lista1[mitadLista1-1];
            const elemento2= lista1[mitadLista1];
            const promedioelemento1y2 = CalcularMediaAritmetica([elemento1,elemento2]);
            mediana = promedioelemento1y2;
        }
        else{
            mediana = lista1[mitadLista1];
        }
        alert(mediana);
}
