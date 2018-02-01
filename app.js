

  function onAboutClick() {
    $(".about").toggleClass("visible");
    if($("#projects2").hasClass("visible")) {
      $(".projects").toggleClass("visible");
    } else if($("#resume2").hasClass("visible")) {
      $(".resume").toggleClass("visible");
    } else if($("#email2").hasClass("visible")) {
      $(".email").toggleClass("visible");
    }
  }

  function onProjectsClick() {
    $(".projects").toggleClass("visible");
    if($("#about2").hasClass("visible")) {
      $(".about").toggleClass("visible");
    } else if($("#resume2").hasClass("visible")) {
      $(".resume").toggleClass("visible");
    } else if($("#email2").hasClass("visible")) {
      $(".email").toggleClass("visible");
    }
  }

  function onResumeClick() {
    $(".resume").toggleClass("visible");
    if($("#about2").hasClass("visible")) {
      $(".about").toggleClass("visible");
    } else if($("#projects2").hasClass("visible")) {
      $(".projects").toggleClass("visible");
    } else if($("#email2").hasClass("visible")) {
      $(".email").toggleClass("visible");
    }
  }

  function onEmailClick() {
    $(".email").toggleClass("visible");
    if($("#about2").hasClass("visible")) {
      $(".about").toggleClass("visible");
    } else if($("#projects2").hasClass("visible")) {
      $(".projects").toggleClass("visible");
    } else if($("#resume2").hasClass("visible")) {
      $(".resume").toggleClass("visible");
    }
  }

//$("button").click(onAboutClick()) {
//  $("#title").slideUp();
//});

//  $("button").click(onAboutClick()) {
//    $("title").animate({left:'50px'});
//  }



  /*function nameHeight() {
    var elem = document.getElementById("title");
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }

  }*/


  /*if($("#about2").hasClass("visible")||$("#projects2").hasClass("visible")||$("#resume2").hasClass("visible")||$("#email2").hasClass("visible")) {
    clearInterval(id);
  } else {
    $("#landingPage h1")margin-top: 30vh;
  }*/
