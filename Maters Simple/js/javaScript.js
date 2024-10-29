// FORMULARIO...
// Creo objetos para los eventos de los Imput y Textarea
const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}
// Creo las Variables

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('#formulario');

// Eventos

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Validar el formulario

    const { nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarError('Todos los campos son obligatorios')
        
        return; // Corta la ejecución del código
    } 
    
    // Enviar el formulario
    mostrarEnviado('Se ha enviado correctamente el formulario')
});
function leerTexto(e) {
    datos[e.target.id] = e.target.value;
}
function mostrarError(mensaje){

    // Verifica si ya exitste un mensaje de error
    const existeError = document.querySelector('.error');
    
    if(!existeError) {
        // Si no existe, creamos uno nuevo
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('error');
        
        formulario.appendChild( error );
        
        // Desaparezca despues de 5 segundos
        
        setTimeout(() => {
            error.remove();
        }, 4000);
    }
}
function mostrarEnviado(mensaje){
    const existeEnviado = document.querySelector('.enviado');
    
    if(!existeEnviado) {
        // Si no existe, creamos uno nuevo
        const enviado = document.createElement('P');
        enviado.textContent = mensaje;
        enviado.classList.add('enviado');
        
        formulario.appendChild( enviado );
        
        // Desaparezca despues de 5 segundos
        
        setTimeout(() => {
            enviado.remove();
        }, 4000);
    }
}