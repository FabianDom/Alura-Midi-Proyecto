// creamos una funcion para el sonido de las teclas y le agregamos un parametro que vamos hacer dinamico para cada sonido.

function sonidoTecla(audioTeclaId) {
  document.getElementById(audioTeclaId).play();
}
// obtener lista de la clase tecla
const listaTeclas = document.querySelectorAll(".tecla");
// recorrer la lista mediante un bucle While
for (let index = 0; index < listaTeclas.length; index++) {
        let audioId = `sonido_${listaTeclas[index].classList[1]}`
        listaTeclas[index].onclick = function () {
          sonidoTecla(audioId);
  }  
        
}
  
