document.addEventListener('DOMContentLoaded', function () {

// hamburger
  const hamburger = document.getElementById('hamburgerButton');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      hamburger.classList.toggle('is-active');
      navLinks.classList.toggle('show');
    });

    // Optional: Close menu when clicking a nav link (for better mobile UX)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function () {
        hamburger.classList.remove('is-active');
        navLinks.classList.remove('show');
      });
    });
  }


// resources
  const slider = document.querySelector('.resources-slider');
  if (slider) {
    let scrollInterval = null;

    slider.addEventListener('mousemove', (e) => {
      const bounds = slider.getBoundingClientRect();
      const x = e.clientX - bounds.left; // Mouse X position inside slider

      const leftZone = bounds.width * 0.2;
      const rightZone = bounds.width * 0.8;

      clearInterval(scrollInterval);

      if (x < leftZone) {
        scrollInterval = setInterval(() => {
          slider.scrollLeft -= 5;
        }, 10);
      } else if (x > rightZone) {
        scrollInterval = setInterval(() => {
          slider.scrollLeft += 5;
        }, 10);
      }
    });

    slider.addEventListener('mouseleave', () => {
      clearInterval(scrollInterval);
    });
  }

});

