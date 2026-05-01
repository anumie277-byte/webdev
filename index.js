const runawaybutton = document.querySelector(".homepagebutton");

document.getElementById("demo").onmouseover = function () {
  mouseOver();
};
document.getElementById("demo").onmouseout = function () {
  mouseOut();
};

const notouchyvideo = document.getElementById("notouchyvid");

function mouseOver() {
  document.getElementById("demo").innerHTML = "No touchy";
  notouchyvideo.play();
  runawaybutton.style.left = Math.floor(Math.random() * 800) + "px";
  runawaybutton.style.top = Math.floor(Math.random() * 800) + "px";
}

function mouseOut() {
  document.getElementById("demo").innerHTML = "Click me";
}

const notouchbutton = document.getElementById("demo");


