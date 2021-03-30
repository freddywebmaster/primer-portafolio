//NAVEGACION SCROLL
window.addEventListener('scroll', function(){
    var navegacion = document.querySelector('nav');
    navegacion.classList.toggle('nav-scroll',window.scrollY>0);
});

//TYPED INICIACION
var typed3 = new Typed('#typed3', {
    strings: ['Desarrollador Front-End', 'Programador Jr', 'Diseñador Web'],
    typeSpeed: 75,
    backSpeed: 50,
    smartBackspace: true, // this is a default
    loop: true,
  });