var socket = io();

// Escuchar
socket.on('connect', function() {

    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdida conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Yamil',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);
});