

  function onAboutClick() {
    $(".about").toggleClass("visible");
    if($("#projects2").hasClass("visible")) {
      $(".projects").toggleClass("visible");
    } else if($("#resume2").hasClass("visible")) {
      $(".resume").toggleClass("visible");
    }
  }

  function onProjectsClick() {
    $(".projects").toggleClass("visible");
    if($("#about2").hasClass("visible")) {
      $(".about").toggleClass("visible");
    } else if($("#resume2").hasClass("visible")) {
      $(".resume").toggleClass("visible");
    }
  }

  function onResumeClick() {
    $(".resume").toggleClass("visible");
    if($("#about2").hasClass("visible")) {
      $(".about").toggleClass("visible");
    } else if($("#projects2").hasClass("visible")) {
      $(".projects").toggleClass("visible");
    }
  }
