// Script para el modal de reserva
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.querySelector('.modal-reserva-container');
  const btnAbrir = document.getElementById('abrirModal');
  const btnCerrar = document.querySelector('.cerrar-reserva');
  const form = document.getElementById('formReserva');
  const mensajeExito = document.getElementById('mensajeExito');
  const tituloReserva = document.getElementById('tituloReserva'); 
  btnAbrir.onclick = function () {
    modal.classList.add('activo');
  };

  btnCerrar.onclick = function () {
    modal.classList.remove('activo');
    mensajeExito.style.display = 'none';
    form.style.display = 'block';
    tituloReserva.style.display = 'block';
    form.reset();
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.classList.remove('activo');
      mensajeExito.style.display = 'none';
      form.style.display = 'block';
      tituloReserva.style.display = 'block';
      form.reset();
    }
  };

  form.onsubmit = function (e) {
    e.preventDefault();
    form.style.display = 'none';
    tituloReserva.style.display = 'none'; // Ocultar el título al enviar
    mensajeExito.style.display = 'block';
  };
});
document.getElementById('cerrarModal').addEventListener('click', function() {
  document.getElementById('modalImagen').style.display = 'none';
});
// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener('click', function(event) {
  const modal = document.getElementById('modalImagen');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
//Función para el collage de fotos, esta es una opción de que salga en modo
//de modal al hacer click en las imágenes
// Galería con zoom al hacer clic
document.querySelectorAll('.galeria-collage img').forEach(function(img) {
  img.addEventListener('click', function() {
    const modal = document.getElementById('modalImagen');
    const modalImg = document.getElementById('imagenAmpliada');
    modal.style.display = 'block';
    modalImg.src = this.src;
  });
});

 // Cierra el menú al hacer clic en un enlace
  menuUsuario.addEventListener("click", function (e) {  
    if (e.target.tagName === "A") {
      menuUsuario.style.display = "none";
    }
  });
///Funcion para el menú cuando es responsive

  const toggleMenu = document.getElementById('toggleMenu');
  const navLinks = document.getElementById('navLinks');

  toggleMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

//Función para el panel de administración
    // JS para cambiar entre secciones
    const enlaces = document.querySelectorAll('[data-section]');
    const secciones = document.querySelectorAll('.seccion-admin, .seccion-activa');

    enlaces.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        secciones.forEach(s => s.classList.add('d-none'));
        document.getElementById(link.dataset.section).classList.remove('d-none');
      });
    });