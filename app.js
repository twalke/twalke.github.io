$(document).ready(function() {
   $(".about").hide();
   $(".projects").hide();
   $(".resume").hide();
   $(".hobbies").hide();
   $(".email").hide();
 });

function onAboutClick() {
  $(".about").toggle();
  $(".projects").hide();
  $(".resume").hide();
  $(".hobbies").hide();
  $(".email").hide();
}

function onResumeClick() {
  $(".resume").toggle();
  $(".about").hide();
  $(".projects").hide();
  $(".hobbies").hide();
  $(".email").hide();
}

function onProjectsClick() {
  $(".projects").toggle();
  $(".about").hide();
  $(".resume").hide();
  $(".hobbies").hide();
  $(".email").hide();
}

function onHobbiesClick() {
  $(".hobbies").toggle();
  $(".about").hide();
  $(".projects").hide();
  $(".resume").hide();
  $(".email").hide();
}

function onEmailClick() {
  $(".email").toggle();
  $(".about").hide();
  $(".projects").hide();
  $("table").hide();
  $(".hobbies").hide();
}

function onDownloadClick() {
  window.open("Resume_Tyler_Walke.pdf");
}
