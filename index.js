document.getElementById("demo").onmouseover = function () {
  mouseOver();
};
document.getElementById("demo").onmouseout = function () {
  mouseOut();
};

function mouseOver() {
  document.getElementById("demo").innerHTML = "No touchy";
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
