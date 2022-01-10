
let time = new Date();

let hora = time.getHours();
let dia = time.getDate();
let mes = time.getMonth()+1;

let currentMes = 12;

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

menuUno = [4,10];
menuDos = [5,11];
menuTres = [6];
menuCuatro = [7];
menuCinco = [10];
menuSeis = [11];
menuSiete = [3,12];

var m4= document.getElementById('m4');

if(menuUno.includes(dia) && mes === currentMes && (hora >= 8 && hora <=17)){
  console.log("menu 1")
  document.addEventListener("DOMContentLoaded", function show(){

document.getElementById('m1').style.display = 'block'; 
});

}else if (menuDos.includes(dia) && mes === currentMes && (hora >= 8 && hora <=17)){
  console.log("menu 2")
  document.addEventListener("DOMContentLoaded", function show(){

document.getElementById('m2').style.display = 'block'; 
});
}else if (menuTres.includes(dia) && mes === currentMes && (hora >= 8 && hora <=17)){
  console.log("menu 3")
  document.addEventListener("DOMContentLoaded", function show(){

document.getElementById('m3').style.display = 'block'; 
});
}else if(menuCuatro.includes(dia) && mes === currentMes && (hora >= 8 && hora <=17)){
    console.log("menu 4")
document.addEventListener("DOMContentLoaded", function show(){

document.getElementById('m4').style.display = 'block'; 
});
}else if (menuCinco.includes(dia) && mes === currentMes && (hora >= 8 && hora <=17)){
    console.log("menu 5")
  document.addEventListener("DOMContentLoaded", function show(){

document.getElementById('m5').style.display = 'block'; 
});
}else if ((menuSeis.includes(dia)) && (mes === currentMes) && (hora >= 8 && hora <=17)){
    console.log("menu 6")
  document.addEventListener("DOMContentLoaded", function show(){

document.getElementById('m6').style.display = 'block'; 
});
}else if (menuSiete.includes(dia) && mes === currentMes && (hora >= 8 && hora <=17)){
    console.log("menu 7")
  document.addEventListener("DOMContentLoaded", function show(){

document.getElementById('m7').style.display = 'block'; 
});
}else{
  document.addEventListener("DOMContentLoaded", function show(){
    console.log("menu 8")

document.getElementById('m8').style.display = 'block';
});}
