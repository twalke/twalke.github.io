$("#aboutTag").click(function() {
    $('html,body').animate({
        scrollTop: $("#aboutScreen").offset().top},
        'slow');
});
$("#projectsTag").click(function() {
    $('html,body').animate({
        scrollTop: $("#projectsScreen").offset().top},
        'slow');
});
$("#resumeTag").click(function() {
    $('html,body').animate({
        scrollTop: $("#resumeScreen").offset().top},
        'slow');
});
$(".contactTag").click(function() {
    $('html,body').animate({
        scrollTop: $("#contactScreen").offset().top},
        'slow');
});

function onDownloadClick() {
  window.open("Resume_Tyler_Walke.pdf");
}
