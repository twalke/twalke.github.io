$(document).ready(function() {
   $(".about").hide();
   $(".projects").hide();
   $(".resume").hide();
   $(".hobbies").hide();
   $(".email").hide();

	 $("#menuwrap").click(function() {
     $("#menu").addClass(function(index, currentClass) {
       if (currentClass === "hid")
         $("#menu").removeClass("hid").addClass("active");
       else
         $("#menu").removeClass("active").addClass("hid");
     });
     $("#menuwrap").addClass(function(index, currentClass) {
       if (currentClass === "hid2")
         $("#menuwrap").removeClass("hid2").addClass("active2");
       else
         $("#menuwrap").removeClass("active2").addClass("hid2");
     });
     $("#text").addClass(function(index, currentClass) {
       if (currentClass === "hidtext")
         $("#text").removeClass("hidtext").addClass("shotext");
       else
         $("#text").removeClass("shotext").addClass("hidtext");
       });
     })

     function myFunction(x) {
      if (x.matches) {
        setTimeout(function(){
          $("body").css("background-image", "url(tyler-paint-small.jpeg)");
        }, 500);
      } else {
        setTimeout(function(){
          $("body").css("background-image", "url(tyler-paint-left.jpeg)");
        }, 500);
      }
    }

    var x = window.matchMedia("(max-width: 700px)")
    myFunction(x)
    x.addListener(myFunction)
 });

function onAboutClick() {
  $(".about").show();
  $(".projects").hide();
  $(".resume").hide();
  $(".hobbies").hide();
  $(".email").hide();
	$("#title").hide();
	$("#subTitle").hide();
	$("#menu").removeClass("active").addClass("hid");
  $("#menuwrap").removeClass("active2").addClass("hid2");
  $("#text").removeClass("shotext").addClass("hidtext");
  $("body").css("background-image", "url(canvas.jpeg)");
}

function onResumeClick() {
  $(".resume").show();
  $(".projects").hide();
  $(".about").hide();
  $(".hobbies").hide();
  $(".email").hide();
	$("#title").hide();
	$("#subTitle").hide();
  $("#menu").removeClass("active").addClass("hid");
  $("#menuwrap").removeClass("active2").addClass("hid2");
  $("#text").removeClass("shotext").addClass("hidtext");
	$("body").css("background-image", "url(canvas.jpeg)");
}

function onProjectsClick() {
  $(".projects").show();
  $(".about").hide();
  $(".resume").hide();
  $(".hobbies").hide();
  $(".email").hide();
	$("#title").hide();
	$("#subTitle").hide();
	$("#menu").removeClass("active").addClass("hid");
  $("#menuwrap").removeClass("active2").addClass("hid2");
  $("#text").removeClass("shotext").addClass("hidtext");
	$("body").css("background-image", "url(canvas.jpeg)");
}

function onHobbiesClick() {
  $(".hobbies").show();
  $(".about").hide();
  $(".projects").hide();
  $(".resume").hide();
  $(".email").hide();
	$("#title").hide();
	$("#subTitle").hide();
	$("#menu").removeClass("active").addClass("hid");
  $("#menuwrap").removeClass("active2").addClass("hid2");
  $("#text").removeClass("shotext").addClass("hidtext");
	$("body").css("background-image", "url(canvas.jpeg)");
}

function onEmailClick() {
  $(".email").show();
  $(".about").hide();
  $(".projects").hide();
  $(".resume").hide();
  $(".hobbies").hide();
	$("#title").hide();
	$("#subTitle").hide();
	$("#menu").removeClass("active").addClass("hid");
  $("#menuwrap").removeClass("active2").addClass("hid2");
  $("#text").removeClass("shotext").addClass("hidtext");
	$("body").css("background-image", "url(canvas.jpeg)");
}

function onDownloadClick() {
  window.open("Resume_Tyler_Walke.pdf");
}
