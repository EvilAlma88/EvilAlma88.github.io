const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    }) 
}

if (close) {
    close.addEventListener('click',() => {
        nav.classList.remove('active')
    })
}

var Slider =document.querySelector(".slider");
var IconoDerecho = document.querySelector(".icono-derecho");
var IconoIzquierdo = document.querySelector(".icono-izquierdo");
var Imagenes = document.querySelectorAll(".img-slider").length;
var Contador = 0;

function MoverDerecha()
 {
    Contador++;
    if(Contador > Imagenes - 1)
     {
        Contador = 0;
     }
    Slider.style.transition = "all 1s ease";
    Slider.style.marginLeft = `-${Contador * 100}%`
}
IconoDerecho.addEventListener("click", MoverDerecha);

function MoverIzquierda()
 {
    Contador--;
    if(Contador < 0)
     {
        Contador = Imagenes - 1;
     }
    Slider.style.transition="all 1s ease";
    Slider.style.marginLeft= `-${Contador * 100}%`;
 }
IconoIzquierdo.addEventListener("click", MoverIzquierda)