function o(name) {
  var i;
  var x = document.getElementsByClassName("mp");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(name).style.display = "block";
}
