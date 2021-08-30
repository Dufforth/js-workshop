// const precioOriginal = 199
// const descuento = 15;
function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio* porcentajePrecioConDescuento)/100;
    return precioConDescuento;
}
function ClickcalcularDescuento(){
    const price = +document.getElementById("InputPrice").value;
    const descuento = +document.getElementById("InputDescuento").value;
    const precioConDescuento = calcularPrecioConDescuento(price,descuento);
    const objetop = document.getElementById("resultado");
    objetop.innerText = "el precio con descuento son: $" + precioConDescuento;
}

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
]
 //const cuponvalue = document.getElementById("InputCoupon").value; 

function ClickCupon(){
    const price = +document.getElementById("InputPrice").value;
    const Cupon = document.getElementById("InputCoupon").value;

    let descuento;
switch(Cupon){
    case "JuanDC_es_Batman":
        descuento = 15;
        break;
    case "pero_no_le_digas_a_nadie":
        descuento=30;
        break;
    case "es_un_secreto":
        descuento = 25;
        break;     
}
const precioConDescuento=  calcularPrecioConDescuento(price,descuento);
const resultado2 = document.getElementById("resultado2");
resultado2.innerText = "El precio con descuento son: $" + precioConDescuento;  
}
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// })