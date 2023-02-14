


function iniciarJuego() {
    let selecionarMascota = document.getElementById('seleccionar-mascota');
selecionarMascota.addEventListener('click', seleccionarMascotaJugador);

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
}

window.addEventListener('load', iniciarJuego)