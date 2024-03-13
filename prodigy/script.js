document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.getElementById('navbar');
  var sections = document.querySelectorAll('section');
  var navbarLinks = document.querySelectorAll('#navbar a');

  window.addEventListener('scroll', function () {
      // Change background color of the navbar on scroll
      if (window.scrollY > 20) {
          navbar.style.backgroundColor = "#555";
      } else {
          navbar.style.backgroundColor = "#333";
      }

      // Change text color of the navbar links on scroll
      navbarLinks.forEach(function (link) {
          if (window.scrollY > 20) {
              link.style.color = "#fff";
          } else {
              link.style.color = "#fff";
          }
      });

      // Highlight the active section in the navbar
      var currentSectionId = '';
      sections.forEach(function (section) {
          var sectionTop = section.offsetTop - navbar.clientHeight;
          var sectionBottom = sectionTop + section.clientHeight;
          if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
              currentSectionId = section.id;
          }
      });

      navbarLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === currentSectionId) {
              link.classList.add('active');
          }
      });
  });

  // Smooth scroll for navbar links
  navbarLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          var targetSectionId = link.getAttribute('href').substring(1);
          var targetSection = document.getElementById(targetSectionId);

          window.scrollTo({
              top: targetSection.offsetTop - navbar.clientHeight + 1,
              behavior: 'smooth'
          });
      });
  });
});
