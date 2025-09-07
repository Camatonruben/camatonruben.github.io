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
const textoCarta = "xxxxxxxxxxxxxxxxxxxxxxxxx";
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
