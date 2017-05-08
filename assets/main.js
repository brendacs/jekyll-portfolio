$(document).ready(function(){
    $(".fade-in-short").hide(0).delay(500).fadeIn(500);
    $(".fade-in").hide(0).delay(1000).fadeIn(1000);
    $(".fade-in-long").hide(0).delay(1500).fadeIn(1500);
    $(".slide-in").animate({"left": "0px"}, 2500);
});
