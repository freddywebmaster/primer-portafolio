const url = "js/data.json";
const rutaImg = 'img/ProyectosDestacados/';
fetch(url)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    let box = document.querySelector("#api-pro");
    console.log(datos.projects);
    for(let i=0; i<datos.projects.length; i++){
        console.log(datos.projects[i].title);
        box.innerHTML += `
        <div class="carta">
                    <div class="imagen">
                        <img src="${rutaImg}${datos.projects[i].img}" alt="proyecto-freddy">
                    </div>
                    <div class="info-proyecto">
                        <div class="title-proyect">
                            <h3 class="title-w">${datos.projects[i].title}</h3>
                            <i class="far fa-plus-square"></i>
                        </div>
                        <div class="fecha-proyecto">
                            ${datos.projects[i].category} / ${datos.projects[i].date}
                        </div>
                        <div class="botones-proyectos">
                            <a target="_blank" class="btn btn-secundario m-top" href="${datos.projects[i].visit}"><i
                                    class="fas fa-globe-americas"></i> Visitar</a>
                            <a target="_blank" class="btn btn-tres m-top" href="${datos.projects[i].code}"><i
                                    class="fas fa-code"></i> Codigo</a>
                        </div>
                    </div>
                </div>
        `
    }
  });
