let time = new Date();

let hora = time.getHours();
let dia = time.getDate();
let mes = time.getMonth();

let currentMes = mes;

//  console.log(hora);
//  console.log(dia);
//  console.log(time);
//  console.log(mes)


// if(time >= 1 && time <= 5){
//   console.log('Mostrar');
// }

// if (hora >= 13 && hora <=17){
//   console.log('Mostrar')
// }else{
//   console.log('No mostrar');
// }

let menuUno,menuDos,menuTres,menuCuatro,menuCinco,menuSeis,menuSiete;

menuUno = [24,4,13];
menuDos = [27,5,14];
menuTres = [28,6,17];
menuCuatro = [29,7,18];
menuCinco = [21,30,10,19];
menuSeis = [22,31,11,20];
menuSiete = [23,3,12,21];

var m4= document.getElementById('m4');

if(menuUno.includes(dia) && mes == currentMes && (hora >= 8 && hora <=17)){
  console.log("menu 1")
  document.addEventListener("DOMContentLoaded", function show(){
var m1 = document.getElementById("m1");
document.getElementById('m1').style.display = 'block'; 
});

}else if (menuDos.includes(dia) && mes == currentMes && (hora >= 8 && hora <=17)){
  console.log("menu 2")
  document.addEventListener("DOMContentLoaded", function show(){
var m2 = document.getElementById("m2");
document.getElementById('m2').style.display = 'block'; 
});
}else if (menuTres.includes(dia) && mes == currentMes && (hora >= 8 && hora <=17)){
  console.log("menu 3")
  document.addEventListener("DOMContentLoaded", function show(){
var m3 = document.getElementById("m3");
document.getElementById('m3').style.display = 'block'; 
});
}else if(menuCuatro.includes(dia) && mes == currentMes && (hora >= 8 && hora <=17)){

document.addEventListener("DOMContentLoaded", function show(){
var m4 = document.getElementById("m4");
document.getElementById('m4').style.display = 'block'; 
});
}else if (menuCinco.includes(dia) && mes == currentMes && (hora >= 8 && hora <=17)){
  document.addEventListener("DOMContentLoaded", function show(){
var m5 = document.getElementById("m5");
document.getElementById('m5').style.display = 'block'; 
});
}else if (menuSeis.includes(dia) && mes == currentMes && (hora >= 8 && hora <=17)){
  document.addEventListener("DOMContentLoaded", function show(){
var m6 = document.getElementById("m6");
document.getElementById('m6').style.display = 'block'; 
});
}else if (menuSiete.includes(dia) && mes == currentMes && (hora >= 8 && hora <=17)){
  document.addEventListener("DOMContentLoaded", function show(){
var m7 = document.getElementById("m7");
document.getElementById('m7').style.display = 'block'; 
});
}else{
  document.addEventListener("DOMContentLoaded", function show(){
var m8 = document.getElementById("m8");
document.getElementById('m8').style.display = 'block';
});}