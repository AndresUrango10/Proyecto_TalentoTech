// Botón hamburguesa
const hamburgerBtn = document.getElementById('hamburger-toggle');
const sidebar = document.querySelector('.sidebar');
const appWrapper = document.querySelector('.app-wrapper');
const overlay = document.getElementById('overlay-mobile');

// Función para alternar menú en móviles
function toggleSidebarMobile() {
    sidebar.classList.toggle('show-mobile');
    overlay.classList.toggle('active');

    // Cambiar icono del botón hamburguesa
    if (sidebar.classList.contains('show-mobile')) {
        hamburgerBtn.textContent = '✖';
        hamburgerBtn.classList.add('active');
    } else {
        hamburgerBtn.textContent = '☰';
        hamburgerBtn.classList.remove('active');
    }
}

// Manejo del botón hamburguesa
hamburgerBtn.addEventListener('click', () => {
    if (window.innerWidth > 768) {
        sidebar.classList.toggle('hidden');
        appWrapper.classList.toggle('sidebar-hidden');
    } else {
        toggleSidebarMobile();
    }
});

// Cerrar sidebar móvil al tocar fuera
overlay?.addEventListener('click', () => {
    sidebar.classList.remove('show-mobile');
    overlay.classList.remove('active');
    hamburgerBtn.textContent = '☰';
    hamburgerBtn.classList.remove('active');
});

// Cerrar sidebar móvil al hacer clic en un enlace
document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            sidebar.classList.remove('show-mobile');
            overlay.classList.remove('active');
            hamburgerBtn.textContent = '☰';
            hamburgerBtn.classList.remove('active');
        }
    });
});

// Modal de desarrolladores
const modal = document.getElementById("developers-modal");
const openBtn = document.getElementById("open-developers-modal");
const closeBtn = document.querySelector(".close-modal");

// Abrir modal
openBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show");
});

// Cerrar modal con botón
closeBtn?.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Cerrar modal haciendo clic fuera
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

// Cerrar modal o menú con tecla Escape
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        if (modal?.classList.contains("show")) {
            modal.classList.remove("show");
        }
        if (sidebar.classList.contains("show-mobile")) {
            sidebar.classList.remove("show-mobile");
            overlay.classList.remove("active");
            hamburgerBtn.textContent = '☰';
            hamburgerBtn.classList.remove('active');
        }
    }
});
