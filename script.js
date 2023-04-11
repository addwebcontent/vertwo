function revealOnScroll() {
    const boxes = document.querySelectorAll('.box');
    const windowHeight = window.innerHeight;
    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;
      if (boxTop < windowHeight) {
        box.classList.add('visible');
      } else {
        box.classList.remove('visible');
      }
    });
  }
  
  window.addEventListener('scroll', revealOnScroll);