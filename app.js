// var menu = $('.wrapper div');
//
// menu.on('click', function() {
//   var menuNum = $(this).data('menu');
//   $(this).toggleClass('menu-'+ menuNum +'-active');
// })

  function onAboutClick() {
    $(".about").toggleClass("visible");
    if($("#projects2").hasClass("visible")) {
      $(".projects").toggleClass("visible");
    } else if($("table").hasClass("visible")) {
      $("table").toggleClass("visible");
    } else if($("#email2").hasClass("visible")) {
      $(".email").toggleClass("visible");
    } else if($("#hobbies2").hasClass("visible")) {
      $(".hobbies").toggleClass("visible");
    }
  }

  function onProjectsClick() {
    $(".projects").toggleClass("visible");
    if($("#about2").hasClass("visible")) {
      $(".about").toggleClass("visible");
    } else if($("table").hasClass("visible")) {
      $("table").toggleClass("visible");
    } else if($("#email2").hasClass("visible")) {
      $(".email").toggleClass("visible");
    } else if($("#hobbies2").hasClass("visible")) {
      $(".hobbies").toggleClass("visible");
    }
  }

  function onResumeClick() {
    $("table").toggleClass("visible");
    if($("#about2").hasClass("visible")) {
      $(".about").toggleClass("visible");
    } else if($("#projects2").hasClass("visible")) {
      $(".projects").toggleClass("visible");
    } else if($("#email2").hasClass("visible")) {
      $(".email").toggleClass("visible");
    } else if($("#hobbies2").hasClass("visible")) {
      $(".hobbies").toggleClass("visible");
    }
  }

  function onDownloadClick() {
    window.open("Resume_TylerWalke_January2018_v5.pdf");
  }

  function onEmailClick() {
    $(".email").toggleClass("visible");
    if($("#about2").hasClass("visible")) {
      $(".about").toggleClass("visible");
    } else if($("#projects2").hasClass("visible")) {
      $(".projects").toggleClass("visible");
    } else if($("table").hasClass("visible")) {
      $("table").toggleClass("visible");
    } else if($("#hobbies2").hasClass("visible")) {
      $(".hobbies").toggleClass("visible");
    }
  }

  function onHobbiesClick() {
    $(".hobbies").toggleClass("visible");
    if($("#projects2").hasClass("visible")) {
      $(".projects").toggleClass("visible");
    } else if($("table").hasClass("visible")) {
      $("table").toggleClass("visible");
    } else if($("#email2").hasClass("visible")) {
      $(".email").toggleClass("visible");
    } else if($("#about2").hasClass("visible")) {
      $(".about").toggleClass("visible");
    }
  }
