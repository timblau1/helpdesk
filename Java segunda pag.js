// Cambiar color de fondo aleatorio al hacer click
const body = document.querySelector('body');
body.addEventListener('click', function() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256); 
  const b = Math.floor(Math.random() * 256);
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});