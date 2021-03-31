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
    smartBackspace: true,
    loop: true,
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
})

window.addEventListener('resize', function(){
    if(screen.width > 750){
        contador=0;
        enlaces.classList.remove('dos');
        enlaces.className = ('enlaces uno');

    }
})



// window.addEventListener('scroll', function(){
//     let head = document.getElementById('head').offsetTop;
//     let info = document.getElementById('info').offsetTop;
//     let proyectos = document.getElementById('proyectos').offsetTop;
//     let contacto = document.getElementById('contacto').offsetTop;
//     let ventana = window.pageYOffset;

//     console.log(head,info,proyectos,contacto)
//     console.log(ventana)

//     if(ventana==head && ventana < info){
//         document.getElementById('link-inicio').classList.add('active')
//         document.getElementById('link-info').classList.remove('active')
//         document.getElementById('link-proyectos').classList.remove('active')
//         document.getElementById('link-contacto').classList.remove('active')
//     }
//     else if(ventana>=info && ventana < proyectos){
//         document.getElementById('link-info').classList.add('active')
//         document.getElementById('link-inicio').classList.remove('active')
//         document.getElementById('link-proyectos').classList.remove('active')
//         document.getElementById('link-contacto').classList.remove('active')
//     }
//     else if(ventana>=proyectos){
//         document.getElementById('link-proyectos').classList.add('active')
//         document.getElementById('link-inicio').classList.remove('active')
//         document.getElementById('link-info').classList.remove('active')
//         document.getElementById('link-contacto').classList.remove('active')
//     }
//     else if(ventana>proyectos){
//         document.getElementById('link-contacto').classList.add('active')
//         document.getElementById('link-inicio').classList.remove('active')
//         document.getElementById('link-info').classList.remove('active')
//         document.getElementById('link-proyectos').classList.remove('active')
//     }

// });