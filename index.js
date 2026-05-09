const notouchybutton = document.querySelector(".homepagebutton");
const notouchything = document.getElementById("demo");

let audioPlaying = false;

document.getElementById("demo").onmouseover = function () {
  mouseOver();
};
document.getElementById("demo").onmouseout = function () {
  mouseOut();
};

function mouseOver() {
  notouchything.innerHTML = "No touchy";
  notouchyvid.play();
  console.log("Playing audio");
  audioPlaying = true;
  notouchybutton.style.left = Math.floor(Math.random() * 800) + "px";
  notouchybutton.style.top = Math.floor(Math.random() * 800) + "px";
}

function mouseOut() {
  if (audioPlaying) {
    notouchything.innerHTML = "No touchy";
  } else {
    notouchything.innerHTML = "Click me";
  }
  do {
    notouchything.innerHTML = "No touchy";
    audioPlaying = !notouchyvid.paused; // If it's NOT paused, it's playing
  } while (audioPlaying);
}
