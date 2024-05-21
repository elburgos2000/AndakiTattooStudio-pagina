<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    // Configura los detalles del correo electrónico
    $destinatario = "motocrossloco@gmail.com"; // Cambia esto por tu dirección de correo electrónico
    $asunto = "Nuevo mensaje de contacto";

    // Construye el cuerpo del correo electrónico
    $contenido = "Nombre: $nombre\n";
    $contenido .= "Correo: $correo\n";
    $contenido .= "Teléfono: $telefono\n";
    $contenido .= "Mensaje:\n$mensaje\n";

    // Envía el correo electrónico
    if (mail($destinatario, $asunto, $contenido)) {
        echo "¡El mensaje ha sido enviado con éxito!";
    } else {
        echo "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
} else {
    // Si el método de solicitud no es POST, muestra un mensaje de error
    echo "Acceso denegado.";
}
?>
