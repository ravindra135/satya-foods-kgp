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
    strings: ['Joy,', 'Yummy,', 'Tasty,', 'Experience.'],
    typeSpeed: 120,
    backSpeed: 75,
    fadeOut: true,
    loop: true
});

// Whatsapp Code
let wa_btnSetting = {"btnColor":"#2bee62","ctaText":"Order On The Go","cornerRadius":40,"marginBottom":20,"marginLeft":20,"marginRight":20,"btnPosition":"left","whatsAppNumber":"918697034671","welcomeMessage":"Hey,\nI Want to Order ","zIndex":3,"btnColorScheme":"light"};
window.onload = () => {
  _waEmbed(wa_btnSetting);
};
  
// Slider
// let img_slider = $('.hero-img');
// for (i = 0; i < img_slider.length; i++) {
    
// }

$('#auto').bbslider({
    auto: true,
    timer: 2500,
    loop: true
});