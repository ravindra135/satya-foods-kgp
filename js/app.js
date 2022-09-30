$("#navOpen").click(function() {
    console.log('hamberger clicked');
    $("#nav").toggleClass("active");
    $("#menuOverlay").toggleClass("hidden");
});

$("#navClose").click(function() {
    $("#nav").toggleClass("active");
    $("#menuOverlay").toggleClass("hidden");
});


// Auto Typing
let typed = new Typed('#typed', {
    strings: ['Joy,', 'Yummy,', 'Tasty,', 'Experience...'],
    typeSpeed: 125,
    backSpeed: 75,
    fadeOut: true,
    loop: true
});
  
// Slider
$('#auto').bbslider({
    auto: true,
    timer: 2500,
    loop: true
});