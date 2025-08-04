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
const cerrarModal = document.getElementById('cerrarModal');
if (cerrarModal) {
  cerrarModal.addEventListener('click', function () {
    document.getElementById('modalImagen').style.display = 'none';
  });
}

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener('click', function(event) {
  const modal = document.getElementById('modalImagen');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
// Script para manejar el botón "Ver más" en las tarjetas de tours
document.addEventListener('DOMContentLoaded', function () {
  console.log("Script tours.js cargado ✅");

  document.querySelectorAll('.ver-mas').forEach(boton => {
    boton.addEventListener('click', function () {
      const card = this.closest('.card-body');
      const texto = card.querySelector('.text-limit');
      texto.classList.toggle('expandido');
      this.textContent = texto.classList.contains('expandido') ? 'Ver menos' : 'Ver más';
    });
  });
});
