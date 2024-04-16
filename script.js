let cards = [
  { img: "img/Ferdinand.jpg", text: "Ferdinand" },
  { img: "img/Elemental.jpg", text: "Elemental" },
  { img: "img/Frozen_II.jpeg", text: "Frozen" },
  { img: "img/Rango.jpg", text: "Rango" },
  { img: "img/john_wick01.jpg", text: "John Wick 1" },
  { img: "img/john_wick02.jpg", text: "John Wick 2" },
  { img: "img/john_wick03.jpg", text: "John Wick 3" },
  { img: "img/john_wick04.jpg", text: "John Wick 4" },
  { img: "img/soy_leyenda.jpeg", text: "Soy Leyenda" },
  { img: "img/blade_Runner_I.jpg", text: "Blade Runner I" },
  { img: "img/blade_Runner_II.jpg", text: "Blade Runner II" },
  { img: "img/Interestellar.jpg", text: "Interestellar" },
  { img: "img/bajo_la_misma_estrella.jpg", text: "Bajo la misma estrella" },
  { img: "img/el_Diario_de_Noa.jpg", text: "El diario de Noa" },
  { img: "img/la_Ultima_Cancion.jpeg", text: "La última canción" },
  { img: "img/nunca_es_tarde.jpg", text: "Nunca es tarde para enamorarse" },
  { img: "img/", text: "Texto de la tarjeta 1" },
  { img: "img/", text: "Texto de la tarjeta 1" },
  { img: "img/", text: "Texto de la tarjeta 1" },
  { img: "img/", text: "Texto de la tarjeta 1" },
  { img: "img/", text: "Texto de la tarjeta 1" },
  { img: "img/", text: "Texto de la tarjeta 1" },
  { img: "img/", text: "Texto de la tarjeta 1" },
  { img: "img/", text: "Texto de la tarjeta 1" },
]; // Esta es la lista de todas las tarjetas

let currentStart = 0;

function displayCards(start) {
  let end = start + 12;
  if (end > cards.length) end = cards.length;

  let container = document.getElementById("card-container");
  container.innerHTML = "";

  for (let i = start; i < end; i++) {
    let cardData = cards[i];
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.src = cardData.img;
    img.alt = "Imagen";
    img.className = "card-img";
    card.appendChild(img);

    let text = document.createElement("div");
    text.innerText = cardData.text;
    text.className = "card-text";
    card.appendChild(text);

    container.appendChild(card);
  }
}

document.getElementById("adelante").addEventListener("click", function () {
  if (currentStart + 12 < cards.length) {
    currentStart += 12;
    displayCards(currentStart);
  }
});

document.getElementById("atras").addEventListener("click", function () {
  if (currentStart - 12 >= 0) {
    currentStart -= 12;
    displayCards(currentStart);
  }
});

displayCards(currentStart); // Muestra las primeras 12 tarjetas al cargar la página
