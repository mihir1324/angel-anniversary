document.getElementById("ribbonCutBtn").addEventListener("click", () => {
  const sound = new Audio("https://www.soundjay.com/button/sounds/button-4.mp3");
  sound.play();

  // Ribbon animation
  const ribbon = document.getElementById("ribbonLine");
  ribbon.style.width = "0";
  ribbon.style.transition = "width 1s ease-out";

  // Hide button
  document.getElementById("ribbonCutBtn").style.display = "none";

  // Show cloud message
  setTimeout(() => {
    document.getElementById("catMessage").classList.remove("hidden");
    document.getElementById("balloons").classList.remove("hidden");
  }, 1200);

  // Show love letter
  setTimeout(() => {
    document.getElementById("loveLetter").classList.remove("hidden");
  }, 2500);

  // Show angel pic
  setTimeout(() => {
    document.getElementById("angelPic").classList.remove("hidden");
  }, 5500);
});


