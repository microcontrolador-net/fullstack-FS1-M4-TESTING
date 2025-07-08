document.getElementById("registroForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const mensaje = document.getElementById("mensaje");

    if (email === "" || password === "" || confirmPassword === "") {
        mensaje.innerText = "Todos los campos son obligatorios.";
        return;
    }

    if (password.length < 6) {
        mensaje.innerText = "La contraseña debe tener al menos 6 caracteres.";
        return;
    }

    if (password !== confirmPassword) {
        mensaje.innerText = "Las contraseñas no coinciden.";
        return;
    }

    mensaje.innerText = "Registro exitoso.";
});
