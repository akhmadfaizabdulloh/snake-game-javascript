const cvs = document.getElementById("snake");
const ctx = csv.getContext("2d");

// import image
const ground = new Image();
ground.src = "img/ground.png";

const imgFood = new Image();
imgFood.src = "img/food.png";

// import audio
const belok = new Audio();
belok.src = "audio/belok.mp3";

const makan = new Audio();
makan.src = "audio/makan.mp3";

const gameOver = new Audio();
gameOver.src = "audio/gameover.mp3";