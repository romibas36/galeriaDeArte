let nombre= "Romina";
let apellido= "Lopez";
const espacio="";

let nombreCompleto= nombre+ espacio+ apellido;
console.log ("Nombre"+ espacio+ nombreCompleto);

let usuario= prompt ("Ingrese su Nombre");
console.log ("Nombre ingresado: " +usuario);
alert ("Hola " +usuario);

let producto= parseInt (prompt ("Elija el tipo de cuadro: \n 1)Paisaje\n 2)Glaciar\n 3)Monte\n4)Atardecer"));

  if (producto >3){
    console.log ("Gracias por la compra");
  }
  else {
    console.log ("abona 200 dolares")
  }

function precioCuadro (cuadro) {
  let precioPaisaje;
  let precioGlaciar;
  let precioMonte;
  let precioAtardecer;
  switch (cuadro) {
      case"Paisaje": 
          precioPaisaje = 1000; 
          return precioPaisaje;
          break;
      case "Glaciar":
          precioGlaciar = 500;
          return precioGlaciar;
          break;
      case "Monte":
          precioMonte=750;
          return precioMonte;
          break;
      case "Atardecer":
          precioAtardecer= 1400;
          return precioAtardecer;
          break;
      default: 
        return "No existe este cuadro";
  }
}
function entradaAlaGaleria () {
  let iniciar = confirm ("Quieres ver los precios de los cuadros? ");
  while (iniciar) {
      let cuadro = prompt ("Ingresa el cuadro que quieres comprar, los cuadros disponibles son :\n Paisaje \n Glaciar \n Monte \n Atardecer" );
      let valorCuadro= precioCuadro ( cuadro);
      if ((valorCuadro==1000) ||  (valorCuadro == 500) || (valorCuadro ==750 ) || (valorCuadro== 1400)) {
          alert ("el cuadro que quieres comprar es " + cuadro + " y el precio es $" + valorCuadro);
      }
      else if (valorCuadro == "No existe este cuadro"){
          alert ("Cuadro no valido");
      }
      iniciar = confirm ("Quieres seguir  viendo los precios de los cuadros?");
  }
}
entradaAlaGaleria()

//array push
const listaCuadro= ["Paisaje","Glaciar","Monte","Atardecer"]
console.log (listaCuadro);

listaCuadro.push ("Serranias del Hornacal");
console.log (listaCuadro);

//metodo join
let cadenaJoin= listaCuadro.join ("-");
console.log (cadenaJoin);


const cuadros= [
  {
    codigo:"2345",
    titulo: "Paisaje",
    lugar: "Desconocido",
    precio:1000
  },
  {
    codigo:"9099",
    titulo:"Glaciar",
    lugar: "Glaciar Perito Moreno",
    precio: 500
  },
  {
    codigo:"1212",
    titulo:"Monte",
    lugar: "Monte Fitz Roy",
    precio: 750
  },
  {
    codigo:"3333",
    titulo: "Atardecer",
    lugar: "San Martin de los Andes",
    precio: 1400
  },
];

cuadros.forEach ((cuadro)=> console.log(cuadro.lugar));

let encontrado= cuadros.find ((cuadro)=> cuadro.titulo == "Monte");
console.log (encontrado);
encontrado= cuadros.find ((cuadro)=> cuadro.titulo== "Atardecer");
console.log (encontrado);

if (encontrado != undefined){
  console.log ("El cuadro se encuentra en stock");
  console.log (encontrado);
}else{
  console.log ("No se encuentra en stock");
}

//sumar los precios de los cuadros

const preciosCuadros= [1000,500,750,1400];

let total=0;
function sumarTotal (precio) {total+= precio;}
function Realizar (operacion,lista){
  for (const elemento of lista) {
    operacion (elemento);
  }
}

Realizar (sumarTotal, preciosCuadros);
console.log ("La suma de todos los cuadros que compraste es $"+total);

//map

const cuadrosConIva= cuadros.map ((cuadro)=>{
  return{
    codigo: cuadro.codigo,
    titulo: cuadro.titulo,
    lugar: cuadro.lugar,
    precio: cuadro.precio *1.21
  }
});
console.table (cuadrosConIva);

//reduce

const totalPrecios= cuadrosConIva.reduce ((acumulador,cuadro)=>acumulador+cuadro.precio,0);
console.table ("Precio total :$"+ totalPrecios);


//DOM

let seccionSuperior= document.getElementsByClassName("abajo");
seccionSuperior.style.background= "pink";
