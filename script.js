// Función para calcular diferencia en días considerando UTC
function dateDiffInDays(a, b) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

// Variables globales
const btnAbrirRegalo = document.getElementById('btnAbrirRegalo');
const btnRecuerdos = document.getElementById('btnRecuerdos');
const btnRegresar = document.getElementById('btnRegresar');
const principal = document.getElementById('principal');
const galeria = document.getElementById('galeria');
const header = document.querySelector('header');

btnAbrirRegalo.addEventListener('click', () => {
  header.classList.add('fade-out');
  btnAbrirRegalo.classList.add('fade-out');
  document.getElementById('intro-image-container').classList.add('fade-out'); // Agregar fade-out a la imagen

  setTimeout(() => {
    header.classList.add('hidden');
    btnAbrirRegalo.classList.add('hidden');
    document.getElementById('intro-image-container').classList.add('hidden'); // Ocultar la imagen
    document.getElementById('sorpresa').classList.remove('hidden');
    document.getElementById('sorpresa').classList.add('visible');

    escribirCarta();
    iniciarContador();
    lanzarCorazones();
  }, 1000);
});


btnRecuerdos.addEventListener('click', () => {
  // Añadir fade-out para animar opacidad
  btnRecuerdos.classList.add('fade-out');
  document.querySelector('.message').classList.add('fade-out');
  document.querySelector('.counter').classList.add('fade-out');

  // Esperar fin de animación para cambiar secciones
  setTimeout(() => {
    principal.classList.add('hidden');
    principal.classList.remove('visible');

    galeria.classList.remove('hidden');
    galeria.classList.add('visible');

    // Quitar fade-out para volver a usar la animación después
    btnRecuerdos.classList.remove('fade-out');
    document.querySelector('.message').classList.remove('fade-out');
    document.querySelector('.counter').classList.remove('fade-out');
  }, 1000);
});

btnRegresar.addEventListener('click', () => {
  galeria.classList.add('fade-out');

  setTimeout(() => {
    galeria.classList.add('hidden');
    galeria.classList.remove('visible');

    principal.classList.remove('hidden');
    principal.classList.add('visible');

    galeria.classList.remove('fade-out');
  }, 1000);
});

// Texto carta con efecto máquina de escribir
const textoCarta = `
Feliz cumpleaños, mi amor ❤️

Hoy celebramos el día en que nació el amor de mi vida,
mi otra mitad, mi compañera de aventuras,
esa que siempre me impulsa a explorar y descubrir
cosas nuevas.
Gracias por enseñarme a disfrutar cada paseo y cada momento juntos.

Este es otro cumpleaños de muchos más que espero
celebrar a tu lado, acercándonos cada vez más,
hasta que solo sea despertar y decirte
"Feliz cumpleaños, amor" mirándote a los ojos.

Este pequeño esfuerzo es solo un reflejo de lo mucho que te mereces, 
te mereces esto y mucho mas porque eres un amor conmigo espero que nuestra salida del precumpleaños sea de tu agrado y pues este regalo sea el plus para empezar este dia tan especial con una sonrisa asi que amor no tengo nada mas que decir que 🎉feliz cumpleaños al amor de mi vida🎉

Te amo con todo mi corazón, hoy y siempre 💕
`;
let i = 0;
function escribirCarta(){
  if(i < textoCarta.length){
    document.getElementById("carta").innerHTML += textoCarta.charAt(i);
    i++;
    setTimeout(escribirCarta, 50);
  }
}

// Contador exacto considerando UTC
const inicio = new Date(2020, 2, 7); // 7 de marzo de 2020
function iniciarContador(){
  function actualizar(){
    const ahora = new Date();
    const dias = dateDiffInDays(inicio, ahora);
    document.getElementById("contador").innerText = dias + " días juntos 💕";
  }
  actualizar(); // actualización inmediata
  setInterval(actualizar, 1000); // actualización cada segundo
}

// Corazones animados
function lanzarCorazones(){
  setInterval(()=>{
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤';
    heart.style.left = Math.random()*100 + 'vw';
    heart.style.fontSize = (Math.random()*20 + 10) + 'px';
    document.getElementById('hearts').appendChild(heart);
    setTimeout(()=>{heart.remove();},6000);
  }, 500);
}
