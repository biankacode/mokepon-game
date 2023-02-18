let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3 

function iniciarJuego() {

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none' // ocultar secciones de html que no ocupemos hata despues

    let sectionReiniciar = document.getElementById('reiniciar') // se oculta el boton de reiniciar
    sectionReiniciar.style.display = 'none'

    let selecionarMascota = document.getElementById('seleccionar-mascota');
    selecionarMascota.addEventListener('click', seleccionarMascotaJugador);

    let botonFuego = document.getElementById('btnFuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('btnAgua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('btnTierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar  = document.getElementById('buttonReiniciar')
    botonReiniciar.addEventListener('click', reiciarJuego)
}

function seleccionarMascotaJugador() {

    let sectionSeleccionarMascota = document.getElementById('mascotas')
    sectionSeleccionarMascota.style.display = 'none' 

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'// aqui reaparece la seccion que se desaparecio al inicio
   

   let inputhHipodoge = document.getElementById('hipodoge');
   let inputCapipepo = document.getElementById('capipepo');
   let inputRatigueya = document.getElementById('ratigueya');
  
   let spanMascotaJugador = document.getElementById('mascotaJugador');
   
    if  ( inputhHipodoge.checked) {
            spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked){
            spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked){
            spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert('....✺SELECCIONA UNA MASCOTA✺....')
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge '

    }else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo '

    }else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya '
    }
}

function ataqueFuego () {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua () {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra () {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}


function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    /* console.log(ataqueAleatorio, 'Si sirve'); */

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    }
    else if(ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    }
    else {
        ataqueEnemigo = 'TIERRRA'
    }
  
    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidasJugador')
    let spanVidasEnemigo = document.getElementById('vidasEnemigo')

    if(ataqueEnemigo == ataqueJugador ){
        crearMensaje(' ☾ EMPATE ☽ ')
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('★ GANE ★')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('★ GANE ★')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('★ GANE ★')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje(' ♒︎ PERDISTE ♒︎ 😝')
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}


function revisarVidas() {
    if (vidasEnemigo == 0) {
        mensajeFinal('GANASTE ESTA PARTIDA YEEEEiii!!!')
    } else if( vidasJugador == 0){
        mensajeFinal('PERDISTE, SUERTE PARA LA PROXIMA!!!!')
    }

}
function crearMensaje(resultado) {
    let sectionMensaje = document.getElementById('mensajes'
    )
    let parrafo = document.createElement('p');
    parrafo.innerHTML ='Tu mascota ataco con ' + ataqueJugador + ' La mascota del enemigo ataco con ' + ataqueEnemigo + ' '+ resultado;
    sectionMensaje.appendChild(parrafo)
}

function mensajeFinal(resultadoFinal) {
    let sectionMensaje = document.getElementById('mensajes'
    )
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal

    sectionMensaje.appendChild(parrafo)

    let botonFuego = document.getElementById('btnFuego')
    botonFuego.disabled = true
 
    let botonAgua = document.getElementById('btnAgua')
    botonAgua.disabled  = true

    let botonTierra = document.getElementById('btnTierra')
    botonTierra.disabled  = true // desabilita el boton

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block' // se muestra el boton de reiniciar 
}

function reiciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)