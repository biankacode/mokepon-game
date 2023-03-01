const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar') 
const selecionarMascota = document.getElementById('seleccionar-mascota');
const botonTierra = document.getElementById('btnTierra')
sectionReiniciar.style.display = 'none'
const botonFuego = document.getElementById('btnFuego')
const botonAgua = document.getElementById('btnAgua')
const botonReiniciar  = document.getElementById('buttonReiniciar')

const sectionSeleccionarMascota = document.getElementById('mascotas')
const inputhHipodoge = document.getElementById('hipodoge');
const inputCapipepo = document.getElementById('capipepo');
const inputRatigueya = document.getElementById('ratigueya');
const spanMascotaJugador = document.getElementById('mascotaJugador');

const spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

const spanVidasJugador = document.getElementById('vidasJugador')
const spanVidasEnemigo = document.getElementById('vidasEnemigo')
  
const sectionMensaje = document.getElementById('resultado')
const ataquesJugador = document.getElementById('ataquesJugador')
const ataquesEnemigo = document.getElementById('ataquesEnemigo') 
const tarjetasContenedor = document.getElementById('contenedorTarjetas')

let mokepones = []
let ataqueJugador 
let ataqueEnemigo
let opcionDeMokepones
let vidasJugador = 3
let vidasEnemigo = 3 

class Mokepon{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
       this.ataques = []
    }
}

let hipodoge = new Mokepon('Hipodoge','./imagenes/hipodoge_attack.png',5)

let capipepo = new
Mokepon('Capipepo','./imagenes/capipepo_attack.png',5)

let ratigueya = new Mokepon('Ratigueya','./imagenes/ratigueya_attack.png',5)

hipodoge.ataques.push( //Se inyecta la info de los ataques en sus arreglo de ataques  
    {nombre:'💧', id: 'btnAgua'},
    {nombre:'💧', id: 'btnAgua'},
    {nombre:'💧', id: 'btnAgua'},
    {nombre:'🔥', id: 'btnFuego'},
    {nombre:'🌱', id: 'btnTierra'},
)

capipepo.ataques.push(
    {nombre:'🌱', id: 'btnTierra'},
    {nombre:'🌱', id: 'btnTierra'},
    {nombre:'🌱', id: 'btnTierra'},
    {nombre:'🔥', id: 'btnFuego'},
    {nombre:'💧', id: 'btnAgua'},
)

ratigueya.ataques.push(
    {nombre:'🔥', id: 'btnFuego'},
    {nombre:'🔥', id: 'btnFuego'},
    {nombre:'🔥', id: 'btnFuego'},
    {nombre:'💧', id: 'btnAgua'},
    {nombre:'🌱', id: 'btnTierra'},
)

// arreglo 
    mokepones.push(hipodoge, capipepo, ratigueya)
        // se genera el push de cada unode los mokepones de cada arreglo q se trabajo anteriormente
function iniciarJuego() { 
    sectionSeleccionarAtaque.style.display = 'none' // ocultar secciones de html que no ocupemos hasta despues // se oculta el boton de reiniciar
    //Por cada uno de los elementos del arreglo has algo!
    mokepones.forEach((mokepon) =>{
    opcionDeMokepones =`
    <input type="radio" name="mascotas" id=${mokepon.nombre} />
    <label class="tarjeta-mokepon" for=${mokepon.nombre}>
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto} alt=${mokepon.nombre}>
    </label>
    `
tarjetasContenedor.innerHTML += opcionDeMokepones


    })

    selecionarMascota.addEventListener('click',                 seleccionarMascotaJugador);
   
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    
    botonReiniciar.addEventListener('click', reiciarJuego)
}

function seleccionarMascotaJugador() {

    sectionSeleccionarMascota.style.display = 'none' 
    sectionSeleccionarAtaque.style.display = 'flex'// aqui reaparece la seccion que se desaparecio al inicio
   
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
    

    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'hipodoge'

    }else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'capipepo'

    }else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
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
        crearMensaje('EMPATE')
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje('GANASTE')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
        crearMensaje('GANASTE')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        crearMensaje('GANASTE')
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje('PERDISTE')
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
    let nuevoAtaqueJugador = document.createElement('p');
    let nuevoAtaqueEnemigo = document.createElement('p');

        sectionMensaje.innerHTML = resultado
        nuevoAtaqueJugador.innerHTML = ataqueJugador
        nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

   
    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function mensajeFinal(resultadoFinal) {
    
    sectionMensaje.innerHTML = resultadoFinal

    botonFuego.disabled = true
 
    botonAgua.disabled  = true

    botonTierra.disabled  = true // desabilita el boton

    sectionReiniciar.style.display = 'block' // se muestra el boton de reiniciar 
}

function reiciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


window.addEventListener('load', iniciarJuego)