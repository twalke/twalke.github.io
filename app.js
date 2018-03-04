// function loadFunction() {
//   $("#hide")
// }

 $(document).ready(function() {
   $(".about").hide();
   $(".projects").hide();
   $("table").hide();
   $(".hobbies").hide();
   $(".email").hide();
 });

function onAboutClick() {
  $(".about").toggle();
  $(".projects").hide();
  $("table").hide();
  $(".hobbies").hide();
  $(".email").hide();
}

function onResumeClick() {
  $("table").toggle();
  $(".about").hide();
  $(".projects").hide();
  $(".hobbies").hide();
  $(".email").hide();
}

function onProjectsClick() {
  $(".projects").toggle();
  $(".about").hide();
  $("table").hide();
  $(".hobbies").hide();
  $(".email").hide();
}

function onHobbiesClick() {
  $(".hobbies").toggle();
  $(".about").hide();
  $(".projects").hide();
  $("table").hide();
  $(".email").hide();
}

function onEmailClick() {
  $(".email").toggle();
  $(".about").hide();
  $(".projects").hide();
  $("table").hide();
  $(".hobbies").hide();
}



  // function onAboutClick() {
  //   $(".about").toggleClass("visible");
  //   if($("#projects2").hasClass("visible")) {
  //     $(".projects").toggleClass("visible");
  //   } else if($("table").hasClass("visible")) {
  //     $("table").toggleClass("visible");
  //   } else if($("#email2").hasClass("visible")) {
  //     $(".email").toggleClass("visible");
  //   } else if($("#hobbies2").hasClass("visible")) {
  //     $(".hobbies").toggleClass("visible");
  //   }
  // }
  //
  // function onProjectsClick() {
  //   $(".projects").toggleClass("visible");
  //   if($("#about2").hasClass("visible")) {
  //     $(".about").toggleClass("visible");
  //   } else if($("table").hasClass("visible")) {
  //     $("table").toggleClass("visible");
  //   } else if($("#email2").hasClass("visible")) {
  //     $(".email").toggleClass("visible");
  //   } else if($("#hobbies2").hasClass("visible")) {
  //     $(".hobbies").toggleClass("visible");
  //   }
  // }
  //
  // function onResumeClick() {
  //   $("table").toggleClass("visible");
  //   if($("#about2").hasClass("visible")) {
  //     $(".about").toggleClass("visible");
  //   } else if($("#projects2").hasClass("visible")) {
  //     $(".projects").toggleClass("visible");
  //   } else if($("#email2").hasClass("visible")) {
  //     $(".email").toggleClass("visible");
  //   } else if($("#hobbies2").hasClass("visible")) {
  //     $(".hobbies").toggleClass("visible");
  //   }
  // }

  function onDownloadClick() {
    window.open("Resume_TylerWalke_January2018_v5.pdf");
  }

  // function onEmailClick() {
  //   $(".email").toggleClass("visible");
  //   if($("#about2").hasClass("visible")) {
  //     $(".about").toggleClass("visible");
  //   } else if($("#projects2").hasClass("visible")) {
  //     $(".projects").toggleClass("visible");
  //   } else if($("table").hasClass("visible")) {
  //     $("table").toggleClass("visible");
  //   } else if($("#hobbies2").hasClass("visible")) {
  //     $(".hobbies").toggleClass("visible");
  //   }
  // }
  //
  // function onHobbiesClick() {
  //   $(".hobbies").toggleClass("visible");
  //   if($("#projects2").hasClass("visible")) {
  //     $(".projects").toggleClass("visible");
  //   } else if($("table").hasClass("visible")) {
  //     $("table").toggleClass("visible");
  //   } else if($("#email2").hasClass("visible")) {
  //     $(".email").toggleClass("visible");
  //   } else if($("#about2").hasClass("visible")) {
  //     $(".about").toggleClass("visible");
  //   }
  // }
