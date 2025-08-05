document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    let current = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    nextBtn.addEventListener('click', () => {
        current = (current + 1) % slides.length;
        showSlide(current);
    });

    prevBtn.addEventListener('click', () => {
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
    });

    // Auto slide cada 5 segundos
    setInterval(() => {
        current = (current + 1) % slides.length;
        showSlide(current);
    }, 7000);
});

