const catImage = document.getElementById("cat-image");
const catSound = document.getElementById("cat-sound");

function speakMeow() {
  const utterance = new SpeechSynthesisUtterance(
    "baby shark do do do do do do",
  );
  window.speechSynthesis.speak(utterance);
}

function playCatSound() {
  if (catSound && catSound.src) {
    catSound.currentTime = 0;
    catSound.play().catch(() => speakMeow());
  } else {
    speakMeow();
  }
}

if (catImage) {
  catImage.style.cursor = "pointer";
  catImage.addEventListener("click", playCatSound);
}
