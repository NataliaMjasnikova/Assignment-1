

const dynamicList = document.getElementById('dynamicList');


//* Lägger alla element som har klassen "clickable-card". document.querySelectorAll gör att man kan välja alla tre kort*//
const clickableCards = document.querySelectorAll('.clickable-card');
let logCounter = 2;

// Tillägg av klicklyssnare på varje enskilt kort i listan
clickableCards.forEach(card => {
  card.addEventListener('click', function(event) {

    // Här får vi kortets namn från alt-texten eller id.
    //  event.target gör så att man vet vilket kort som klickades på.
    const cardName = event.target.alt;

    // skapar ett <li> element och lägger till text som kommer upp
    const newListItem = document.createElement('li');

    const itemText = document.createTextNode(`Kort lagt till: ${logCounter} ${cardName} - ${new Date().toLocaleTimeString()}`);

        newListItem.appendChild(itemText);

    dynamicList.appendChild(newListItem);
   //logcounter räknar hur många gånger hav man klickat på kortet//
    logCounter++;


  });
});
