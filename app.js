
    let botonPom = document.getElementsByClassName('.tecla_pom')
    let audioPom = document.querySelectorById('sonido_tecla_pom')

  botonPom.addEventListener('click', function() {
    audioPom.currentTime = 0;
   audioPom.play()
  });
