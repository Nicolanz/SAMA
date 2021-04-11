var prevScrollpos = window.pageYOffset;
var firstScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-170px";
  }
  if (currentScrollPos > firstScrollpos  + 150 ){
    document.getElementById("navbar").style.backgroundColor = "#D6EEF4";
  } else if (currentScrollPos == firstScrollpos){
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.transition = "0.5s ease-in";
  }
  prevScrollpos = currentScrollPos;
}
