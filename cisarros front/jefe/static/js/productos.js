var API_URL = 'http://localhost:8000/api/producto/';

async function productosLeer() {
    alert('leyendo');
    
    try {
        const response = await fetch(API_URL, {
            method: 'GET',      // Método GET
            cache: 'no-cache',  // No cachear la solicitud
            headers: {
                'Content-Type': 'application/json',  // Formato de envío
            }
        });

        // Verificar si la respuesta es correcta
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }

        // Convertir la respuesta a JSON
        const data = await response.json();

        console.log('Success', data);

        // Mostrar los datos en el HTML
        mostrarDatosProducto(data);

    } catch (error) {
        console.error('Error:', error);
        alert('Error: ' + error.message);
    }
}

function mostrarDatosProducto(producto) {
    const productDetailsDiv = document.getElementById('productDetails');
    
    // Construir el HTML con los datos del producto
    productDetailsDiv.innerHTML = `
        <h2>${producto.productoName}</h2>
        <p><strong>ID:</strong> ${producto.id}</p>
        <p><strong>Descripción:</strong> ${producto.productoDescription}</p>
        <p><strong>Precio:</strong> ${producto.productoPrice}</p>
        <img src="${producto.productoImage || 'placeholder.jpg'}" alt="Imagen del producto">
    `;
}
