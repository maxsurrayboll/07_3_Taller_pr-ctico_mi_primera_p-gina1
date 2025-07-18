document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío si hay errores

        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let contraseña = document.getElementById("contraseña").value.trim();

        // Validaciones básicas
        if (nombre === "" || correo === "" || contraseña === "") {
            alert("Todos los campos son obligatorios.");
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(nombre)) {
            alert("El nombre solo puede contener letras.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(correo)) {
            alert("Introduce un correo válido.");
            return;
        }

        if (contraseña.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        alert("Registro exitoso!");
        form.submit(); // Envía el formulario si todo es válido
    });
});
