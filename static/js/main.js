// === CAMBIAR ENTRE MENÚS ===
document.querySelectorAll('.menu-item').forEach(item => {
	item.addEventListener('click', e => {
		e.preventDefault();

		// Quitar clase activa de todos los items
		document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'));

		// Agregar clase activa al clicado
		item.classList.add('active');

		// Ocultar todas las secciones
		document.querySelectorAll('.section-content').forEach(section => {
			section.style.display = 'none';
		});

		// Mostrar la sección correspondiente
		const target = item.getAttribute('data-section');
		const sectionToShow = document.getElementById(target);
		if (sectionToShow) {
			sectionToShow.style.display = 'block';
		}
	});
});

// === MOSTRAR DASHBOARD POR DEFECTO AL CARGAR ===
window.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('.section-content').forEach(sec => sec.style.display = 'none');
	document.getElementById('dashboard').style.display = 'block';
});

// === TOGGLE SIDEBAR ===
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
});

// === TOGGLE SEARCH EN MÓVIL ===
const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if (window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if (searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
});

// === AJUSTES INICIALES SEGÚN EL TAMAÑO DE PANTALLA ===
if (window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}

window.addEventListener('resize', function () {
	if (this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
});
// Enlaces desde el dashboard (íconos grandes)
document.querySelectorAll('.dashboard-link').forEach(link => {
	link.addEventListener('click', () => {
		// Ocultar todas las secciones
		document.querySelectorAll('.section-content').forEach(sec => sec.style.display = 'none');

		// Mostrar la sección deseada
		const section = link.getAttribute('data-section');
		const targetSection = document.getElementById(section);
		if (targetSection) targetSection.style.display = 'block';

		// Activar el menú lateral correspondiente
		document.querySelectorAll('.menu-item').forEach(i => {
			i.classList.remove('active');
			if (i.getAttribute('data-section') === section) {
				i.classList.add('active');
			}
		});
	});
});
