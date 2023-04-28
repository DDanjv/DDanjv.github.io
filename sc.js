
function menuu() {
    var x = document.getElementsByClassName("navbar");
    if (x[0].style.display === "flex") {
      x[0].style.display = "none";
    } else {
      x[0].style.display = "flex";
    }
  }
