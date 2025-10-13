

const dynamicList = document.getElementById('dynamicList');


// Vi väljer alla element som har klassen "clickable-card"
const clickableCards = document.querySelectorAll('.clickable-card');
let logCounter = 2;

// Vi lägger till en klicklyssnare på varje enskilt kort i listan
clickableCards.forEach(card => {
  card.addEventListener('click', function(event) {

    // Här får vi kortets namn från alt-texten eller id.
    // Genom att använda event.target vet vi exakt vilket kort som klickades på.
    const cardName = event.target.alt;

    // 1. Skapa ett nytt <li> element
    const newListItem = document.createElement('li');

    // 2. Skapa textinnehållet
    const itemText = document.createTextNode(`Kort lagt till: ${logCounter} ${cardName} - ${new Date().toLocaleTimeString()}`);

    // 3. Lägg till textinnehållet i <li> elementet
    newListItem.appendChild(itemText);

    // 4. Modifiera DOM (lägg till element)
    dynamicList.appendChild(newListItem);

    logCounter++;


  });
});
