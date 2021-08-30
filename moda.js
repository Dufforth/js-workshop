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


function calcularModa(){    
    const lista1Count ={};
    lista1.map(
        function(elemento){
            if(lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }
            else{
                lista1Count[elemento]= 1;
            }
        
        }
    );
    const lista1Array = Object.entries(lista1Count).sort(
        function(elementoA, elementoB){
        return elementoA[1]-elementoB[1];
        }
    );
    const moda = lista1Array[lista1Array.length-1];
        alert(moda);
}

