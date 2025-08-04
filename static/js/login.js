// Eventos para los botones de cambiar entre login y registro
document.getElementById("bton__iniciar-sesion").addEventListener("click", inicio_sesion);
document.getElementById("bton__Registrarse").addEventListener("click", registro);
window.addEventListener("resize", ancho_Pag);

// Variables del DOM
var formulario_login = document.querySelector(".formulario__login");
var formulario_registro = document.querySelector(".formulario__registro");
var container_loginR = document.querySelector(".container__loginR");
var caja_traseralogin = document.querySelector(".caja___traseralogin");
var caja_traseraregistro = document.querySelector(".caja__traseraregistro");

// Ajuste visual según ancho de pantalla
function ancho_Pag() {
    if (window.innerWidth > 850) {
        caja_traseralogin.style.display = "block";
        caja_traseraregistro.style.display = "block";
    } else {
        caja_traseraregistro.style.display = "block";
        caja_traseraregistro.style.opacity = "1";
        caja_traseralogin.style.display = "none";
        formulario_login.style.display = "block";
        formulario_registro.style.display = "none";
        container_loginR.style.left = "0px";
    }
}

ancho_Pag(); // Ejecutar al cargar

// Función para mostrar el login
function inicio_sesion() {
    formRecuperar.style.display = "none"; // Ocultar formulario de recuperación si está visible
    if (window.innerWidth > 850) {
        formulario_registro.style.display = "none";
        container_loginR.style.left = "10px";
        formulario_login.style.display = "block";
        caja_traseraregistro.style.opacity = "1";
        caja_traseralogin.style.opacity = "0";
    } else {
        formulario_registro.style.display = "none";
        container_loginR.style.left = "0px";
        formulario_login.style.display = "block";
        caja_traseraregistro.style.display = "block";
        caja_traseralogin.style.display = "none";
    }
}

// Función para mostrar el registro
function registro() {
    formRecuperar.style.display = "none"; // Ocultar formulario de recuperación si está visible
    if (window.innerWidth > 850) {
        formulario_registro.style.display = "block";
        container_loginR.style.left = "410px";
        formulario_login.style.display = "none";
        caja_traseraregistro.style.opacity = "0";
        caja_traseralogin.style.opacity = "1";
    } else {
        formulario_registro.style.display = "block";
        container_loginR.style.left = "0px";
        formulario_login.style.display = "none";
        caja_traseraregistro.style.display = "none";
        caja_traseralogin.style.display = "block";
        caja_traseralogin.style.opacity = "1";
    }
}

// Recuperar contraseña (si existe el formulario)
const formLogin = document.querySelector('.formulario__login');
const formRegistro = document.querySelector('.formulario__registro');
const formRecuperar = document.querySelector('.formulario__recuperar');

// Solo ejecuta si el formulario de recuperación existe
if (formRecuperar) {
    const linkRecuperar = document.getElementById('linkRecuperar');
    const volverLogin = document.getElementById('volverLogin');

    if (linkRecuperar) {
        linkRecuperar.addEventListener('click', function (e) {
            e.preventDefault();
            formLogin.style.display = 'none';
            formRecuperar.style.display = 'block';
        });
    }

    if (volverLogin) {
        volverLogin.addEventListener('click', function (e) {
            e.preventDefault();
            formRecuperar.style.display = 'none';
            formLogin.style.display = 'block';
        });
    }
}
