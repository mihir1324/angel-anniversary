document.addEventListener("DOMContentLoaded", function() {
  // Get elements from the page
  const ribbonCutBtn = document.getElementById("ribbonCutBtn");
  const catMessage   = document.getElementById("catMessage");
  const loveLetter   = document.getElementById("loveLetter");
  const angelPic     = document.getElementById("angelPic");
  const balloons     = document.getElementById("balloons");

  // When the ribbon is cut (button clicked)
  ribbonCutBtn.addEventListener("click", function() {
    // Hide the ribbon button
    ribbonCutBtn.style.display = "none";

    // Show cat message and balloons immediately
    catMessage.classList.remove("hidden");
    balloons.classList.remove("hidden");

    // After 30 seconds, show the love letter
    setTimeout(function() {
      loveLetter.classList.remove("hidden");
    }, 30000); // 30000 milliseconds = 30 sec

    // After 40 seconds, show Angel's picture with her caption
    setTimeout(function() {
      angelPic.classList.remove("hidden");
    }, 40000); // 40000 milliseconds = 40 sec
  });
});

