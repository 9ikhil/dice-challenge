var dice1 = Math.floor(Math.random()*6) + 1;
var imgname1 = "dice" + dice1 + ".png";

var dice2 = Math.floor(Math.random()*6) + 1;
var imgname2 = "dice" + dice2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , imgname1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , imgname2);

var headElement = document.getElementById('headElement');
if (dice1 > dice2){
  headElement.innerHTML = "🚩 Player 1 win";

} else if (dice1 < dice2){
  headElement.textContent = "Player 2 win 🚩";
} else {
  headElement.textContent = "Draw!";
}

