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
  { img: "img/Boogeyman.jpg", text: "Boogeyman" },
  { img: "img/No_tengas_miedo.jpeg", text: "No tengas miedo a la oscuridad" },
  { img: "img/Secuestro.jpg", text: "Secuestro" },
  { img: "img/Toc_Toc_Toc.jpg", text: "Toc Toc Toc" },
  {
    img: "img/Miss_peregrines.jpg",
    text: "Miss Peregrine's home for peculiar children",
  },
  { img: "img/Beetlejuice.jpg", text: "Beetlejuice 1" },
  {
    img: "img/Charlie_y_la_fabrica.jpg",
    text: "Charlie y la fábrica de chocolate",
  },
  { img: "img/Coraline.jpg", text: "Coraline" },
]; // Esta es la lista para todas las cards cargadas hasta ahora

let currentStart = 0;

//función para mostrar las cards en sección TENDENCIAS

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

displayCards(currentStart);
// Muestra las primeras 12 cards al cargar la página

//------------------------------------------

//función para mostrar las cards en sección ACLAMADAS

function displayFourCards() {
  var container = document.getElementById("cardAclam-container");

  container.innerHTML = "";

  for (var i = 0; i < cards.length; i++) {
    var movieDiv = document.createElement("div");
    movieDiv.className = "movie";

    var img = document.createElement("img");
    img.src = cards[i].img;
    img.alt = cards[i].text;

    /*var p = document.createElement("p");
    p.textContent = cards[i].text;*/

    movieDiv.appendChild(img);
    /*movieDiv.appendChild(p);*/

    container.appendChild(movieDiv);
  }
}

window.onload = function () {
  displayFourCards();
};
// Muestra las primeras 4 cards al cargar la página y se ve el resto corriendo la barra

//--------------------------------
