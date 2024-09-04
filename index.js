const randomTexts = [
  "5 seconds shots!",
  "Hino imo crush?",
  "E hatag ha imo sapit",
  "Take two sips!",
  "Do a shot!",
  "Make a rule for the next round!",
  "Skip your next turn!",
  "Exchange drinks with another player!",
  "Choose someone to take a drink!",
  "Say a funny toast!",
  "Tingug hin baka o kanding!",
  "Pili hin usa nga mag-inom!",
  "Kanta an chorus han imo paborito nga kanta!",
   "Himoa an 10 ka jumping jacks o push-ups!",
   "Kumanta tulad ng isang hayop!"

];
function getRandomText() {
  const randomIndex = Math.floor(Math.random() * randomTexts.length); // Get a random index
  return randomTexts[randomIndex]; // Return the random text
}

function showModal(title, message) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalText").textContent = message;
  document.getElementById("customAlert").style.display = "block";
}

function closeModal() {
  document.getElementById("customAlert").style.display = "none";
}



var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  const randomMessage = getRandomText(); // Get random message
  showModal('Player 1 Wins!', randomMessage);

}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
 
  const randomMessage = getRandomText(); // Get random message
    showModal('Player 2 Wins!', randomMessage);

}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

document.getElementById('refreshButton').addEventListener('click', function() {
  var button = this;
  
  // Add a loading class
  button.classList.add('loading');

  // Refresh the page after a delay to see the animation
  setTimeout(function() {
    location.reload();
  }, 1000); // Adjust the delay as needed
});
