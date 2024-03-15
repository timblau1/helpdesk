// Cambiar a tonos pasteles aleatorios al hacer click
const body = document.querySelector('body');

body.addEventListener('click', function() {

  // Tonos más claros
  const r = Math.floor(Math.random() * 128) + 128; 
  const g = Math.floor(Math.random() * 128) + 128;
  const b = Math.floor(Math.random() * 128) + 128;

  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

});
