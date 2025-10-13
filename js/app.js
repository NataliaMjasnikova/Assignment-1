/* Ersätt/lägg till denna kod i din js/main.js */

// VG-krav: Dynamisk interaktion med DOM
const addItemButton = document.getElementById('addItemButton');
const dynamicList = document.getElementById('dynamicList');
let itemCounter = 2;

// Nytt för Pokémon-temat: Interaktion med bilden
const pokemonImage = document.getElementById('pokemonCardImage');

// Lägg till en interaktivitet för bilden (Hovring/mus över)
pokemonImage.addEventListener('mouseover', function() {
  // Ändrar texten när musen hovrar över bilden
  console.log("Musen är över kortet!");
  pokemonImage.alt = "Charizard (Hovered)";
});

pokemonImage.addEventListener('mouseout', function() {
  // Återställer texten när musen lämnar bilden
  pokemonImage.alt = "Ett Charizard-kort";
});


// Händelselyssnare för knappen (Från Uppgift 1)
addItemButton.addEventListener('click', function() {

  // VG-krav: Generera HTML-element från JavaScript
  const newListItem = document.createElement('li');
  const itemText = document.createTextNode(`Nytt kort loggat: ${new Date().toLocaleDateString()} kl ${new Date().toLocaleTimeString()}`);

  newListItem.appendChild(itemText);

  // Modifiera element i DOM (lägger till nytt listobjekt)
  dynamicList.appendChild(newListItem);

  itemCounter++;

  /* Förklaring av Kodflödet (VG-kravet) finns som kommentarer i din index.html-fil. */
});
