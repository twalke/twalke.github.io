

  function onAboutClick() {
    $(".about").toggleClass("visible");
    if($("#projects2").hasClass("visible")) {
      $(".projects").toggleClass("visible");
    }
  }

  function onProjectsClick() {
    $(".projects").toggleClass("visible");
    $(".about").toggleClass("visible");

  }
