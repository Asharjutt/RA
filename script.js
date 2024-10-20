// Toggle the navigation menu on mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});








  let currentSlide = 0;

  function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = slides.length - 1;
    } else {
      currentSlide = index;
    }

    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === currentSlide) {
        slide.classList.add('active');
      }
    });

    const offset = -currentSlide * 100; // Calculate the offset
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Automatic slide show (optional)
  setInterval(nextSlide, 5000); // Change slide every 5 seconds

