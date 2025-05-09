async function segurLogin() {
    const formData = new FormData();
    formData.append('username', document.getElementById('txEmail').value);
    formData.append('password', document.getElementById('txPassword').value);

    // URL de la API
    const url = 'http://localhost:8000/apix/token/';

    try {
        // Ejecutar fetch
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
            cache: 'no-cache',
            credentials: 'same-origin'
        });

        // Verificar si la respuesta es correcta
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        console.log("Login=>", data);

        // Verificar si se obtuvieron los tokens
        if (data.access) {
            // Guardar los tokens en localStorage
            localStorage.setItem("url_token_access", data.access);
            localStorage.setItem("url_token_refresh", data.refresh);

            alert("Usuario y contraseña correctos: " + data.access);
            // Redirigir a la página de productos
            document.location.href = "/cliente/productoslogin";
        } else {
            alert("Error: Usuario y/o contraseña incorrectos");
        }
    } catch (error) {
        console.error('Tenemos problemas Houston', error);
        alert("Error: " + error.message);
    }
}

