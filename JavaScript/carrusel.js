document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll('.carrusel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    // Mostrar el primer slide
    mostrarSlide(slideIndex);
    
    // Event listeners para los botones
    prevBtn.addEventListener('click', function() {
        slideIndex--;
        if (slideIndex < 0) {
            slideIndex = slides.length - 1;
        }
        mostrarSlide(slideIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        mostrarSlide(slideIndex);
    });
    
    // Cambiar slide automáticamente cada 5 segundos
    setInterval(function() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        mostrarSlide(slideIndex);
    }, 5000);
    
    function mostrarSlide(index) {
        // Ocultar todos los slides
        slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('fade');
        });
        
        // Mostrar el slide actual
        slides[index].style.display = 'block';
        setTimeout(() => {
            slides[index].classList.add('fade');
        }, 10);
    }
});