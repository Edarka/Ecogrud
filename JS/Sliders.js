document.addEventListener('DOMContentLoaded', () => {
    const slidesContainer = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);

    // Автопрокрутка (опционально)
    // setInterval(showNextSlide, 5000);
});
