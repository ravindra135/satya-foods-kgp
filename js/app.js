$("#navOpen").click(function() {
    console.log('hamberger clicked');
    $("#nav").toggleClass("active");
    $("#menuOverlay").toggleClass("hidden");
});

$("#navClose").click(function() {
    $("#nav").toggleClass("active");
    $("#menuOverlay").toggleClass("hidden");
});