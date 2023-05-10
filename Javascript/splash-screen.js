var myVar;

function splashScreen() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("splash-screen").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}