// Selecciona todas las tarjetas que tengan la clase 
const tarjetas = document.querySelectorAll('.tarjeta');

// Guarda el fondo original del body para poder cambiarlo
const fondoOriginal = getComputedStyle(document.body).backgroundImage;

// Recorre cada tarjeta encontrada
tarjetas.forEach(tarjeta => {

    // Cuando el mouse entra sobre una tarjeta
    tarjeta.addEventListener('mouseenter', () => {

        // Obtiene la ruta de la imagen desde el atributo data-bg de la tarjeta
        const img = tarjeta.getAttribute('imagen');

        // Cambia el fondo del body usando la imagen obtenida
        document.body.style.backgroundImage = `url('${img}')`;
    });

    // Cuando el mouse sale de la tarjeta
    tarjeta.addEventListener('mouseleave', () => {

        // Restaura el fondo original del body
        document.body.style.backgroundImage = fondoOriginal;
    });
});