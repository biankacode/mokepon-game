


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

   
    if  ( inputhHipodoge.checked) {
            alert('Seleccionaste a HIPODOGE');
    } else if (inputCapipepo.checked){
            alert('Seleccionaste a CAPIPEPO')
    } else if (inputRatigueya.checked){
            alert('Seleccionaste a RATIGUEYA')
    } else if (inputLangostevis.checked){
            alert('Seleccionaste a LANGOSTELVIS')
    } else if (inputTucapalma.checked){
        alert('Seleccionaste a TUCAPALMA')
    } else if (inputPydos.checked){
        alert('Seleccionaste a PYDOS')
    } else {
        alert('....✺SELECCIONA UNA MASCOTA✺....')
    }
}

window.addEventListener('load', iniciarJuego)