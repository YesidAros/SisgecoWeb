// Menú Hamburguesa
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.querySelector('.menu');


    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

});

// Slider Automático y con Puntos de Navegación
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}

// Cambio automático cada 5 segundos
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}
setInterval(nextSlide, 5000);

// Navegación con puntos
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        currentIndex = index;
        showSlide(currentIndex);
    });
});
