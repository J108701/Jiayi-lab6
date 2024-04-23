document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
  
      header.addEventListener('click', () => {
        item.classList.toggle('open');
      });
    });
  
    const images = document.querySelectorAll('.gallery img');
    images.forEach(image => {
      image.addEventListener('click', function () {
        alert('You clicked on ' + this.alt);
      });
    });
  });
  