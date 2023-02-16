let ataqueJugador 
let ataqueEnemigo


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
   let inputLangostevis = document.getElementById('langostevis');
   let inputTucapalma = document.getElementById('tucapalma');
   let inputPydos = document.getElementById('pydos');
   let spanMascotaJugador = document.getElementById('mascotaJugador')
   
    if  ( inputhHipodoge.checked) {
            spanMascotaJugador.innerHTML = 'Hipodoge';
    } else if (inputCapipepo.checked){
            spanMascotaJugador.innerHTML = 'Capipepo';
    } else if (inputRatigueya.checked){
            spanMascotaJugador.innerHTML = 'Ratigueya';
    } else if (inputLangostevis.checked){
            spanMascotaJugador.innerHTML = 'Langostevis';
    } else if (inputTucapalma.checked){
            spanMascotaJugador.innerHTML = 'Tucapalma';
    } else if (inputPydos.checked){
            spanMascotaJugador.innerHTML = 'Pydos';
    } else {
        alert('....✺SELECCIONA UNA MASCOTA✺....')
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge '

    }else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo '

    }else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya '

    }else if (mascotaAleatoria == 4) {
         spanMascotaEnemigo.innerHTML = 'Langostevis '

    }else if (mascotaAleatoria == 5) {
         spanMascotaEnemigo.innerHTML = 'Tucapalma '

    }else if (mascotaAleatoria == 6) {
         spanMascotaEnemigo.innerHTML = 'Pydos '

    } 
}
function ataqueFuego () {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua () {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra () {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(params) {
    let ataqueAleatorio = aleatorio(1,6)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    }
    else if(ataqueAleatorio == 2){
        ataqueEnemigo == 'AGUA'
    }
    else if(ataqueAleatorio == 3){
        ataqueEnemigo == 'TIERRRA'
    }
    else if(ataqueAleatorio == 4){
        ataqueEnemigo == 'FUEGO & AGUA '
    }
    else if(ataqueAleatorio == 5){
        ataqueEnemigo == 'AGUA & TIERRA'
    }
    else if(ataqueAleatorio == 6){
        ataqueEnemigo == 'TIERRA Y FUEGO'
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)