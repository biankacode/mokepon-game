const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar') 
const selecionarMascota = document.getElementById('seleccionar-mascota');
const botonReiniciar  = document.getElementById('buttonReiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('mascotas')
const spanMascotaJugador = document.getElementById('mascotaJugador');

const spanMascotaEnemigo = document.getElementById('mascotaEnemigo')

const spanVidasJugador = document.getElementById('vidasJugador')
const spanVidasEnemigo = document.getElementById('vidasEnemigo')
  
const sectionMensaje = document.getElementById('resultado')
const ataquesJugador = document.getElementById('ataquesJugador')
const ataquesEnemigo = document.getElementById('ataquesEnemigo') 
const tarjetasContenedor = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

let mokepones = []
let ataqueJugador 
let ataqueEnemigo
let opcionDeMokepones
let inputhHipodoge
let inputCapipepo
let inputRatigueya 
let mascotaJugador
let ataquesMokepon
let botonFuego  
let botonAgua 
let botonTierra
let vidasJugador = 3
let vidasEnemigo = 3 

class Mokepon {
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

     inputhHipodoge = document.getElementById('Hipodoge');
     inputCapipepo = document.getElementById('Capipepo');
     inputRatigueya = document.getElementById('Ratigueya');

    })

    selecionarMascota.addEventListener('click',                 seleccionarMascotaJugador);
    
    botonReiniciar.addEventListener('click', reiciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none' 
    sectionSeleccionarAtaque.style.display = 'flex'// aqui reaparece la seccion que se desaparecio al inicio
    if  ( inputhHipodoge.checked) {
            spanMascotaJugador.innerHTML = inputhHipodoge.id
            mascotaJugador = inputhHipodoge.id
    } else if (inputCapipepo.checked){
            spanMascotaJugador.innerHTML = inputCapipepo.id
            mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked){
            spanMascotaJugador.innerHTML = inputRatigueya.id
            mascotaJugador = inputRatigueya.id
    } else {
        alert('....✺SELECCIONA UNA MASCOTA✺....')
    }
    estraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function estraerAtaques(mascotaJugador) {
    let ataques 
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques          
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
        ataques.forEach((ataque) => {
            ataquesMokepon = `
            <button id=${ataque.id} class="boton-ataques">
            ${ataques.nombre}
        </button>
            `
            contenedorAtaques.innerHTML += ataquesMokepon
        })
         botonFuego = document.getElementById('btnFuego')
         botonAgua = document.getElementById('btnAgua')
         botonTierra = document.getElementById('btnTierra')
      

         botonFuego.addEventListener('click', ataqueFuego)
         botonAgua.addEventListener('click', ataqueAgua)
         botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
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