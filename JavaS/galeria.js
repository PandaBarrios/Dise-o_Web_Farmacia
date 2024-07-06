
 fetch('https://hijosdepanda.github.io/personas.Json/')
    .then(response => response.json())
    .then(data => {
        const contenedor = document.getElementById('galeria');

        data.personas.forEach(persona => {
            const cuadroPersona = document.createElement('div');
            cuadroPersona.classList.add('cuadro-persona');

            const imagen = document.createElement('img');
            imagen.src = persona.imagen;
            imagen.alt = persona.nombre;
            cuadroPersona.appendChild(imagen);

            const nombre = document.createElement('p');
            nombre.textContent = persona.nombre;
            cuadroPersona.appendChild(nombre);

            const correo = document.createElement('p');
            correo.textContent = persona.correo;
            cuadroPersona.appendChild(correo);

            const comentario = document.createElement('p');
            comentario.textContent = persona.comentario;
            cuadroPersona.appendChild(comentario);

            contenedor.appendChild(cuadroPersona);
        });
    })
.catch(error => console.error('Error al obtener los datos:', error));


async function buscarPersona() {
    const input = document.getElementById('inputBuscar').value.toLowerCase(); // Obtener el valor del input y convertirlo a minúsculas
    const response = await fetch('https://hijosdepanda.github.io/personas.Json/'); // Cargar el JSON
    const data = await response.json(); // Convertir la respuesta en JSON
    const personas = data.personas;

    // Filtrar el JSON en función del nombre o correo
    const resultado = personas.find(persona => persona.nombre.toLowerCase() === input || persona.correo.toLowerCase() === input);

    // Mostrar el resultado en la página
    const resultadoDiv = document.getElementById('resultado');
    if (resultado) {
        resultadoDiv.innerHTML = `
            <p>ID: ${resultado.id}</p>
            <p>Nombre: ${resultado.nombre}</p>
            <p>Correo: ${resultado.correo}</p>
            <p>Comentario: ${resultado.comentario}</p>
            <img src="${resultado.imagen}" alt="Imagen del cliente">
        `;
    } else {
        resultadoDiv.innerHTML = 'No se encontró ninguna persona con ese nombre o correo.';
    }
}