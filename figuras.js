//Código del cuadrado

console.group("cuadrado")
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm")

function perimetroCuadrado(lado){
return lado * 4;
}
// console.log("el perimetro del cuadrado es: "+ perimetroCuadrado +"cm")

function areaCuadrado(lado){
return lado*lado;
}

// console.log("el area del cuadrado es: "+ areaCuadrado+ "cm2")
console.groupEnd();

//Código del triángulo
console.group("Triángulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("los lados del triángulo miden: "
// + ladoTriangulo1 + "cm, "
// + ladoTriangulo2 + "cm, "
// + baseTriangulo + "cm"
// );

// function alturaTriangulo(altura) {
// return altura;
// }
// console.log("la altura del triángulo es de : "+ alturaTriangulo+ "cm")

function perimetroTriangulo(lado1,lado2,base){
 return   lado1 + lado2 + base;
} 
// console.log("el perímetro del triángulo es: "+ perimetroTriangulo+ "cm")

function areaTriangulo(base,altura){
    
return  (base*altura)/2;
} 
// console.log("el area del triángulo es: "+ areaTriangulo+ "cm2")

function validarLados(lado1,lado2){
    if(lado1==lado2)
    {return true;}
    else
    {alert("los lados no son iguales");return false;}
}
console.groupEnd();

function calcularAlturaTriangulo(ladoa, ladob, base){
    if (validarLados(ladoa,ladob))
    {const h = Math.sqrt((ladoa * ladoa)-((base*base)/4));
    return h;}   
    else return false;
}

//Código círculo

console.group("círculo");

//Radio
// const radioCirculo = 4;
// console.log("el radio del círculo es "+ radioCirculo + "cm");

//Diámetro
function diametroCirculo(radio){
    return radio*2;
}
// console.log("el diametro del círculo es "+ diametroCirculo + "cm");

//PI
const PI = Math.PI; 
console.log("PI es "+ PI + "cm");

//Circunferencia
function perimetroCirculo(radio)
{    
    return  diametroCirculo(radio) * PI;
} 
// console.log("el perímetro del círculo es "+ perimetroCirculo + "cm");

//Area
function areaCirculo(radio){
return (radio*radio)*PI;
} 
// console.log("el area del círculo es "+ areaCirculo + "cm2");

console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const valor = input.value;
    const perimetro = perimetroCuadrado(valor);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const valor = input.value;
    const area = areaCuadrado(valor);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const ladoa = +document.getElementById("inputTrianguloLadoA").value;
    const ladob = +document.getElementById("inputTrianguloLadoB").value;
    const base = +document.getElementById("inputTrianguloBase").value;    
    const perimetro = perimetroTriangulo(ladoa,ladob,base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = +document.getElementById("inputTrianguloBase").value;
    const altura = +document.getElementById("inputTrianguloAltura").value;    
    const area = areaTriangulo(base,altura);
    alert(area);
}

function calcularAlturaTrianguloIsosceles(){
    const ladoa = +document.getElementById("inputTrianguloLadoA").value;
    const ladob = +document.getElementById("inputTrianguloLadoB").value;    
    const base = +document.getElementById("inputTrianguloBase").value;    
    if(!calcularAlturaTriangulo(ladoa,ladob,base))
    {}
    else{
        const altura = calcularAlturaTriangulo(ladoa,ladob,base);
    alert(altura);
    }
    
}

function calcularAreaCirculo(){
    const radio= +document.getElementById("inputCirculoRadio").value;
    const area = areaCirculo(radio);
    alert(area);
}

function calcularDiametroCirculo(){
    const radio= +document.getElementById("inputCirculoRadio").value;
    const diametro = diametroCirculo(radio);
    alert(diametro);
}
function calcularPerimetroCirculo(){
    const radio= +document.getElementById("inputCirculoRadio").value;
    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}