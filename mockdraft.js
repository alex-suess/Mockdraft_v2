function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

    var player = document.getElementById(data);
    var playerChildren = player.childNodes;
    var playerSpan = playerChildren[1]
    var text = playerSpan.innerHTML;
    newText = text.replace(/ /g,'')
    openCard(newText);
}

function showList(id){
    var position = document.getElementById(id);
    position.classList.toggle("inactive");
}

function druckAnsicht(){
  var left = document.getElementById("left-column");
  var right = document.getElementById("right-column");
  var backGround = document.getElementById("body");
  left.classList.toggle("inactive");
  right.classList.toggle("inactive");
  closeAllCards();
  var testClass = left.className;
  switch(testClass){
    case "inactive": window.setTimeout(printAlert(), 1500);
  }
}

function moveBack(thisPos, thisId){
  var position = document.getElementById(thisPos);
  var player = document.getElementById(thisId);
  position.appendChild(player);
}

function printAlert() {
    alert("Great! Press Strg + P to print or to save as .pdf-File!");
}

function openCard(player){
  closeAllCards();
  var card = document.getElementById('card'+ player);
  card.classList.toggle("inactive");
  card.classList.toggle("active");
}
function closeAllCards(){
  var activeCards = document.getElementsByClassName("active");
  for (i = 0; i < activeCards.length; i++) {
        activeCards[i].classList.toggle("inactive");
        activeCards[i].classList.toggle("active");
  }
}

function anleitung(){
  alert("Anleitung \n ------- \n 1. Gesuchte Position anklicken \n 2. Gesuchten Spieler per Drag and Drop auf gewuenschte Position im Draftboard ziehen \n 3. Falls die Auswahl fehlerhaft oder versehentlich erfolgt ist, klicke auf das rote 'X' \n 4. Klick auf den Spieler oeffnet eine Profil-Karte");
}
