document.getElementById("ribbonCutBtn").addEventListener("click", () => {
  document.getElementById("ribbonLine").style.width = "0";
  document.getElementById("ribbonCutBtn").style.display = "none";
  setTimeout(() => {
    document.getElementById("catCloud").classList.remove("hidden");
    document.getElementById("balloons").classList.remove("hidden");
  }, 1000);
  setTimeout(() => document.getElementById("loveLetter").classList.remove("hidden"), 3000);
  setTimeout(() => document.getElementById("angelPic").classList.remove("hidden"), 5000);
  setTimeout(() => document.getElementById("comic").classList.remove("hidden"), 8000);
});



