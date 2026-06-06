document.querySelectorAll('nav a').forEach(anchor => {
       anchor.addEventListener('click', function(e) {
              e.preventDefault();

              const targetId = this.getAttribute('href').substring(1);
              const targetElement = document.getElementById(targetId);

              if (targetElement) {
              window.scrollTo({
                     top: targetElement.offsetTop - 70, // Ajuste para o header fixo
                     behavior: 'smooth'
              });
              }
       });
});

       // Mudança de cor do header ao rolar
window.addEventListener('scroll', function() {
       const header = document.querySelector('header');
       if (window.scrollY > 50) {
              header.style.padding = '0.5rem 0';
       } else {
              header.style.padding = '1rem 0';
       }
});