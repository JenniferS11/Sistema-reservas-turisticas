//Modals  
  const modal = document.getElementById('cotizar');
  const abrir = document.getElementById('abrirModal');
  const cerrar = document.querySelector('.cerrar-modal');
  const form = document.getElementById('formCotizar');

  abrir.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('mostrar');
  });

  cerrar.addEventListener('click', function() {
    modal.classList.remove('mostrar');
  });

  window.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('mostrar');
    }
  });
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Evita el envío real
  form.style.display = 'none'; // Oculta el formulario
  document.getElementById('mensajeExito').style.display = 'block'; // Muestra el mensaje

  // Cierra el modal automáticamente después de 3 segundos
  setTimeout(() => {
    modal.classList.remove('mostrar');
    form.reset(); // Limpia el formulario
    form.style.display = 'block'; // Vuelve a mostrar el formulario
    document.getElementById('mensajeExito').style.display = 'none'; // Oculta el mensaje
  }, 3000);
});