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
$("#contactTag").click(function() {
    $('html,body').animate({
        scrollTop: $("#contactScreen").offset().top},
        'slow');
});

function onDownloadClick() {
  window.open("Resume_Tyler_Walke.pdf");
}


//
// var stickySidebar = $('#resumeTitle');
//
// if (stickySidebar.length > 0) {
//   var stickyHeight = stickySidebar.height(),
//       sidebarTop = stickySidebar.offset().top;
// }
//
// // on scroll move the sidebar
// $(window).scroll(function () {
//   if (stickySidebar.length > 0) {
//     var scrollTop = $(window).scrollTop();
//
//     if (sidebarTop < scrollTop) {
//       stickySidebar.css('top', scrollTop - sidebarTop);
//
//       // stop the sticky sidebar at the footer to avoid overlapping
//       var sidebarBottom = stickySidebar.offset().top + stickyHeight;
//       var stickyStop = $('container').offset().top + $('container').height();
//       if (stickyStop < sidebarBottom) {
//         var stopPosition = $('container').height() - stickyHeight;
//         stickySidebar.css('top', stopPosition);
//       }
//     }
//     else {
//       stickySidebar.css('top', '0');
//     }
//   }
// });
//
// $(window).resize(function () {
//   if (stickySidebar.length > 0) {
//     stickyHeight = stickySidebar.height();
//   }
// });
