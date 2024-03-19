<!DOCTYPE html>
<html>
  <meta charset="utf-8">
  <?php
  ?>
<head>
  <title>Página Soporte del Grupo 2</title>
  
  <!-- Fuentes de Google -->
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap" rel="stylesheet">
  
  <!-- CSS -->
  <link rel="stylesheet" href="estilos.css">

</head>

<body>
  
  <header>
    <img src="https://cdn-icons-png.flaticon.com/512/2593/2593341.png" alt="Mi logo">
    <h1>Soporte Técnico</h1>
    <nav>
      <ul>
        <li>
          <a href="Página piezas de repuesto.html" class="nav-link">Página Piezas de Respuesto</a>
          <a href="Página protocolo.html" class="nav-link">Protocolos de Averías</a>
          <a href="videos.html" class="nav-link">Videos</a>
        </li>
      </ul>  
    </nav>
  </header>

  <script src="Dinamica de la página.js"></script>
  <main class="container">

    <section id="intro">
      <h2>¿En qué podemos ayudarte?</h2>
      <p>Cuéntanos tu problema técnico y nuestro equipo se pondrá en contacto contigo lo antes posible.</p>  
      <div class="soporte"></div>

    </section>

    <section id="formulario" class="formulario">
      <h2>Formulario de Soporte</h2>
      <form>
        <div class="campo">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre">
        </div>

        <div class="campo">
            <label for="apellido">Apellidos:</label>  
            <input type="text" id="apellido" name="apellido">
          </div>

        <div class="campo">
          <label for="email">Email:</label>  
          <input type="email" id="email" name="email">
        </div>

        <div class="campo">
          <label for="telefono">Teléfono:</label>  
          <input type="tel" id="telefono" name="telefono">
        </div>

        <div class="campo">
          <label for="problema">Descripción del problema:</label>
          <textarea id="problema" name="problema"></textarea>
        </div>

        <div class="enviar">
          <input type="submit" value="Enviar Solicitud">
        </div>
        
      </form>
    </section>

  </main>
  
  <footer>
    <p>© 2024 Suportazo S.L.</p>
  </footer> 
</body>
</html>