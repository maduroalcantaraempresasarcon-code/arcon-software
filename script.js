// ==========================================================
// ARCON SOFTWARE DEVELOPMENT
// ENVÍO DE SOLICITUDES
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formProyecto");
    const mensaje = document.getElementById("mensajeFormulario");

    if (!formulario) {
        console.error("ARCON: No se encontró el formulario.");
        return;
    }

    formulario.addEventListener("submit", function () {

        mensaje.textContent =
            "Enviando solicitud a ARCON SOFTWARE DEVELOPMENT...";

        // IMPORTANTE:
        // No usamos event.preventDefault()
        // porque ahora permitimos que FormSubmit envíe el formulario.

    });

});