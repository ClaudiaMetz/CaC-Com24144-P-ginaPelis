// Esperando que se cargue el DOM antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("api-container");

  //le pego a la API
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      // Manipulo los datos recibidos de la API y elijo cuáles usar
      data.results.forEach((result) => {
        const contenedorCreado = document.createElement("div");
        contenedorCreado.innerHTML = `
            <h4>${result.name.first} ${result.name.last}</h4>
            <img src="${result.picture.large}" alt="Foto de perfil">
            <p>${result.email}</p>
          `;
        contenedor.appendChild(contenedorCreado);
      });
    })
    .catch((error) => {
      console.error("Error al hacer la solicitud:", error);
    });
});
