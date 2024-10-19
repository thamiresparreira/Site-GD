
  let slideIndex = 0;
  const gallery = document.getElementById('gallery');
  const slides = gallery.children;
  const totalSlides = slides.length;

  function moveSlide(n) {
    slideIndex += n;

    // Se passar do último slide, volta para o primeiro
    if (slideIndex >= totalSlides) {
      slideIndex = 0;
    }

    // Se passar do primeiro slide, vai para o último
    if (slideIndex < 0) {
      slideIndex = totalSlides - 1;
    }

    // Move a galeria para o slide atual
    const offset = slideIndex * -160; // 150px (imagem) + 10px (margem)
    gallery.style.transform = `translateX(${offset}px)`;
  }

  const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

