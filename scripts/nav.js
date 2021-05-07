
var prevScrollpos = $(window).scrollTop();
var firstScrollpos = $(window).scrollTop();

$(window).scroll(function(){

    var currentScrollPos = $(window).scrollTop();

    if (prevScrollpos > currentScrollPos) {
        $("#navbar").css("top:", "0");
    } else {
        $("#navbar").css("top:", "-170");
    }
    if (currentScrollPos > firstScrollpos  + 150 ){
        $("#navbar").css("background", "#D6EEF4");
    } else if (currentScrollPos == firstScrollpos){
        $("#navbar").css("background", "transparent");
        $("#navbar").css("transition", "0.5s ease-in");
    }
    prevScrollpos = currentScrollPos;
});