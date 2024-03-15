// Cambiar a tonos pasteles aleatorios al hacer click
const body = document.querySelector('body');

body.addEventListener('click', function() {

  // Tonos más claros
  const r = Math.floor(Math.random() * 128) + 128; 
  const g = Math.floor(Math.random() * 128) + 128;
  const b = Math.floor(Math.random() * 128) + 128;

  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

});


// Array con los textos a mostrar en las burbujas
const bubbleTexts = [
    "Error 404",
    "Página no encontrada", 
    "Servidor no disponible",
    "Contraseña incorrecta",
    "Sesión expirada",
    "Error de conexión",
    "Error de sintaxis",
    "Error de compilación",
    "Lentitud del equipo",
    "Pantalla azul de la muerte (BSOD)",
    "Fallo del disco duro",
    "Infección por virus/malware",
    "Pérdida de datos",
    "Sobrecalentamiento",
    "Error del sistema operativo",
    "Congelamiento/bloqueo del equipo",
    "Problemas de drivers",
    "Error de actualización de Windows",
    "Equipo que no enciende",
    "Rendimiento lento de internet",
    "Correo electrónico no funciona",
    "Impresora no imprime",
    "Contraseñas olvidadas",
    "Spam y phishing",
    "Falta de espacio en disco",
    "Pantalla en negro",
    "Ventanas que no responden",
    "Error al instalar programas",
    "WiFi desconectándose",
    "Actualizaciones fallidas",
    "Teclado que no funciona",
    "Ratón que no funciona",
    "Audio que no funciona",
    "Webcam que no funciona",
    "Puertos USB dañados",
    "Batería se agota rápido",
    "Sobrecalentamiento de la CPU",
    "Pantalla con píxeles quemados",
    "Error de compatibilidad de hardware",
    "Disco duro que hace ruido",
    "Equipo que no detecta USB",
    "Equipo super lento",
    "Ventanas que se congelan",
    "Equipo que se reinicia solo",
    "Pantalla con líneas o parpadeos",
    "No enciende la pantalla",
    "Se apaga solo",
    "Date y hora incorrectas",
    "No puede conectarse a internet",
    "Sin sonido en los altavoces",
    "Teclado con teclas que no funcionan",
    "Touchpad que no funciona",
    "Error de partición de disco",
    "Sistema super lento",
    "Programas que fallan al abrir",
    "Pantalla azul al iniciar",
    "Sin imagen, solo sonido",
    "Cuelgues y pantallazos azules"
  ];
  
  // Función para generar una posición aleatoria
  function randomPosition() {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    };
  }
  
  // Clase para las burbujas
  class Bubble {
    constructor(text) {
      this.element = document.createElement("div");
      this.element.className = "bubble";
      this.element.innerText = text;
  
      const pos = randomPosition();
      this.element.style.left = pos.x + "px";
      this.element.style.top = pos.y + "px";
  
      this.element.addEventListener("click", () => {
        this.element.remove(); // Explotar burbuja al hacer clic
      });
  
      document.body.appendChild(this.element);
  
    }
  }
  
  // Generar nueva burbuja cada segundo
  setInterval(() => {
    const text = bubbleTexts[Math.floor(Math.random() * bubbleTexts.length)];
    new Bubble(text);
  }, 4000);