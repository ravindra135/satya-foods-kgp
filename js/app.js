$("#navOpen").click(function() {
    console.log('hamberger clicked');
    $("#nav").toggleClass("active");
    $("#menuOverlay").toggleClass("hidden");
});

$("#navClose").click(function() {
    $("#nav").toggleClass("active");
    $("#menuOverlay").toggleClass("hidden");
});

let typed = new Typed('#typed', {
    strings: ['Joy,', 'Yummy,', 'Tasty', 'Experience.'],
    typeSpeed: 120,
    backSpeed: 75,
    fadeOut: true,
    loop: true
  });