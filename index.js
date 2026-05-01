const runawaybutton = document.getElementById("demo");

document.getElementById("demo").onmouseover = function () {
  mouseOver();
};
document.getElementById("demo").onmouseout = function () {
  mouseOut();
};

function mouseOver() {
  document.getElementById("demo").innerHTML = "No touchy";
  runawaybutton.style.left = Math.floor(Math.random() * 800) + "px";
  runawaybutton.style.top = Math.floor(Math.random() * 800) + "px";
}

function mouseOut() {
  document.getElementById("demo").innerHTML = "Click me";
}

const notouchbutton = document.getElementById("demo");
const notouchyvideo = document.getElementById("notouchyvid");

notouchbutton.addEventListener("click", notouchsound);

function notouchsound() {
  notouchyvideo.play();
}
