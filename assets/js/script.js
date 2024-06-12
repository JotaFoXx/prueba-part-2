//valor recatado
let titulo = "" 
let contenido = ""

const btnform = document.getElementById('btnForm')
const title = document.getElementById('tituloNvo')
const content = document.getElementById('contenidoNvo')
function guardarDatos(){
    titulo = title.value;
    contenido = content.value;
}
btnform.addEventListener('click', function(event) {
    event.preventDefault();
    guardarDatos();
      alert('Datos guardados');
  });


//alerta
const miVentanaEmergente = document.getElementById('ventanaEmergente')
const modal = document.getElementById('modalAlert')
modal.addEventListener('click', function(){

    const contenidoAlerta = document.getElementById('titleJohn')
    const tituloAlerta = miVentanaEmergente.querySelector('.modal-body')
    
    contenidoAlerta.textContent = contenido;
    tituloAlerta.textContent = titulo;

})


//OffCanvas
const miventanaOffcanvas = document.getElementById('ventanaOffcanvas');
const offcanvas = document.getElementById('accion')
offcanvas.addEventListener('click' , function(){

  const contenidoCanvas = miventanaOffcanvas.querySelector('.offcanvas-body')
  const tituloCanvas = miventanaOffcanvas.querySelector('.offcanvas-title')

  contenidoCanvas.textContent = contenido;
  tituloCanvas.textContent = titulo;



})


//Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
// Obtener elementos del Dom
const miPopover = document.getElementById('popover');
let popoverInstance = new bootstrap.Popover(miPopover);

//Crear instancia
miPopover.addEventListener('click', function () {
  miPopover.setAttribute('data-bs-content' , contenido);

  popoverInstance.dispose();
  popoverInstance = new bootstrap.Popover(miPopover);
})

//toast
let toast = document.querySelectorAll('.toast')
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}

let liveToastBtn = document.getElementById('liveToastBtn');
liveToastBtn.addEventListener('click', function(){
  const conetenidoToast = toastLiveExample.querySelector('.toast-body') 
  const tituloToast = document.getElementById('titleToast')

  conetenidoToast.textContent = contenido;
  tituloToast.textContent = titulo;
})