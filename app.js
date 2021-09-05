function colour() {
  var red = document.getElementById("red").value;
  var green = document.getElementById("green").value;
  var blue = document.getElementById("blue").value;
  var color = "rgba(" + red + "," + green + "," + blue + ")";

  document.getElementById("colorValue").value = color;
  document.getElementById("colorContainer").style.backgroundColor = color;
}
document.getElementById("red").addEventListener("input", colour);
document.getElementById("green").addEventListener("input", colour);
document.getElementById("blue").addEventListener("input", colour);
