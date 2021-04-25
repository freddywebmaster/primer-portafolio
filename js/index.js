//NAVEGACION SCROLL
window.addEventListener('scroll', function(){
    var navegacion = document.querySelector('nav');
    navegacion.classList.toggle('nav-scroll',window.scrollY>0);
});
//BOTON RETACHAR
window.addEventListener('scroll', function(){
    var retornar = document.querySelector('#return');
    retornar.classList.toggle('mostrar',window.scrollY>0);
});

//TYPED INICIACION
window.addEventListener('load', function(){
    var typed3 = new Typed('#typed3', {
        strings: ['Desarrollador Front-End', 'Programador Jr', 'Diseñador Web'],
        typeSpeed: 75,
        backSpeed: 50,
        smartBackspace: true,
        loop: true,
      });
});

//NAVEGACION JAILOSA

let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click",function(){
    if(contador == 0){
        enlaces.className = ('enlaces dos');
        contador=1;
    }else{
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
});

window.addEventListener('resize', function(){
    if(screen.width > 750){
        contador=0;
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');

    }
});

//SPINNER
let spinner = document.querySelector('#contenedor_carga');
        window.addEventListener('load', function(){
            spinner.style.visibility = 'hidden';
            spinner.style.opacity = '0';
        });