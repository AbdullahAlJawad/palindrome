var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
colorDisplay.textContent = pickedColor;
init();
function init(){
setupModeButton();
setupSquares();
reset();
}
//defining the setupModeButton function
function setupModeButton(){
for (var i = 0; i < modeButtons.length; i++) {
modeButtons[i].addEventListener("click",function(){
modeButtons[0].classList.remove("selected");
modeButtons[1].classList.remove("selected");
this.classList.add("selected");
this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
reset();
});
}
}
//defining the setupSquares function
function setupSquares(){
//Coloring the squares
for(var i=0;i<colors.length;i++){
//add click listeners to squares
squares[i].addEventListener("click",function(){
//grab color of clicked square
var clickedColor = this.style.backgroundColor;
//compare color to picked color
if(clickedColor === pickedColor){
messageDisplay.textContent = "Correct!!";
resetButton.textContent = "Play Again?";
changeColor(clickedColor);
h1.style.backgroundColor = clickedColor;
}
else{
this.style.backgroundColor = "#232323";
messageDisplay.textContent = "Try Again!!!";
}
});
}
}
//reset button to reset the colors
resetButton.addEventListener("click",function(){
//generate all new colors
colors = generateRandomColors(numSquares);
//pick a new random color from array
pickedColor = pickColor();
//change colorDisplay to match picked color
colorDisplay.textContent = pickedColor;
//
for(var i=0;i<colors.length;i++){
//add colors to squares
squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor = "steelblue";
messageDisplay.textContent = "";
this.textContent = "New Colors";
});
function reset(){
//generate all new colors
colors = generateRandomColors(numSquares);
//pick a new random color from array
pickedColor = pickColor();
//change colorDisplay to match picked color
colorDisplay.textContent = pickedColor;
resetButton.textContent = "New Colors";
messageDisplay.textContent = "";
//change colors of squares
for(var i=0;i<squares.length;i++){
if(colors[i]){
squares[i].style.display = "block";
squares[i].style.backgroundColor = colors[i];
}
else{
squares[i].style.display = "none";
}
}
h1.style.backgroundColor = "steelblue";
}
function changeColor(color){
//loop through all squares
for (var i = 0; i < colors.length; i++) {
squares[i].style.backgroundColor = color;
}
}
function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}
function generateRandomColors(num){
//make an array
var arr = [];
//add num random colors to array
for(var i=0;i<num;i++){
//get random color and push them into an array
arr.push(randomColor());
}
//return that array
return arr;
}
function randomColor(){
//pick a 'red' from 0 - 255
var r = Math.floor(Math.random() * 256);
//pick a 'green' from 0 - 255
var g = Math.floor(Math.random() * 256);
//pick a 'blue' from 0 - 255
var b = Math.floor(Math.random() * 256);
return "rgb(" + r + ", " + g + ", " + b + ")";
}