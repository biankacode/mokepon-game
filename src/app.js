let ataqueJugador 
let ataqueEnemigo
let resultado


function iniciarJuego() {
    let selecionarMascota = document.getElementById('seleccionar-mascota');
selecionarMascota.addEventListener('click', seleccionarMascotaJugador);

let botonFuego = document.getElementById('btnFuego')
botonFuego.addEventListener('click', ataqueFuego)

let botonAgua = document.getElementById('btnAgua')
botonAgua.addEventListener('click', ataqueAgua)

let botonTierra = document.getElementById('btnTierra')
botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador() {
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
  
    if(ataqueEnemigo == ataqueJugador ){
        crearMensaje(' ☾ EMPATE ☽ ')
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('★ GANE ★')
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('★ GANE ★')
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('★ GANE ★')
    } else {
        crearMensaje(' ♒︎ Perdiste ♒︎ 😝')

    }
}

function crearMensaje(resultado) {
    let sectionMensaje = document.getElementById('mensajes'
    )
    let parrafo = document.createElement('p');
    parrafo.innerHTML ='Tu mascota ataco con ' + ataqueJugador + ' La mascota del enemigo ataco con ' + ataqueEnemigo + ' '+ resultado;
    sectionMensaje.appendChild(parrafo)
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)