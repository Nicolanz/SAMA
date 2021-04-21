var prevScrollpos = window.pageYOffset;
var firstScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
var navElements = document.getElementsByClassName("navbar")
  if (prevScrollpos > currentScrollPos) {
      navElements[0].style.top = "0";
  } else {
      navElements[0].style.top = "-170px";
  }
  if (currentScrollPos > firstScrollpos  + 150 ){
      navElements[0].style.backgroundColor = "#D6EEF4";
  } else if (currentScrollPos == firstScrollpos){
      navElements[0].style.backgroundColor = "transparent";
      navElements[0].style.transition = "0.5s ease-in";
  }
  console.log(navElements);
  prevScrollpos = currentScrollPos;
}
