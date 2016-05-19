$(document).ready(function(){
  $('.parallax-window').parallax({imageSrc: 'images/gingham1.svg', naturalWidth: 2008, naturalHeight: 1267});
  $('.parallax-window1').parallax({imageSrc: 'images/gingham1.svg', naturalWidth: 2008, naturalHeight: 1267});
  $("#my-menu").mmenu({
    "extensions": [
     "pagedim-black", "theme-white"
      ],
    offCanvas: {
               position  : "left",
               zposition : "next"
            }
  });

  //HAMBURGER MENU
  var API = $("#my-menu").data("mmenu");
  $('#hamburger').click(function(){
    console.log("CLICKED");
    API.open();
  });

//
var modalOptions = [
  {
    modalTarget: "aModal1",
    color: "#FFFFFF",
    animatedIn: "bounceInUp",
    animatedOut: "bounceOutDown",
    animationDuration: "1s",
    overflow: "scroll"
  },
  {
    modalTarget: "aModal2",
    color: "#FFFFFF",
    animatedIn: "bounceInUp",
    animatedOut: "bounceOutDown",
    animationDuration: "1s",
    overflow: "scroll"
  },
  {
    modalTarget: "aModal3",
    color: "#FFFFFF",
    animatedIn: "bounceInUp",
    animatedOut: "bounceOutDown",
    animationDuration: "1s",
    overflow: "scroll"
  },
  {
    modalTarget: "aModal4",
    color: "#FFFFFF",
    animatedIn: "bounceInUp",
    animatedOut: "bounceOutDown",
    animationDuration: "1s",
    overflow: "scroll"
  },
  {
    modalTarget: "aModal5",
    color: "#FFFFFF",
    animatedIn: "bounceInUp",
    animatedOut: "bounceOutDown",
    animationDuration: "1s",
    overflow: "scroll"
  }

];


$("#modal01").animatedModal(modalOptions[0]);
$("#modal02").animatedModal(modalOptions[1]);
$("#modal03").animatedModal(modalOptions[2]);
$("#modal04").animatedModal(modalOptions[3]);
$("#modal05").animatedModal(modalOptions[4]);


//SMOOTH SCROLL:
$('li a[href*="#"]:not([href="#"])').click(function(e) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000, function(){
          API.close();
        });
        return false;
      }
    }
  });






console.log("READY");


});//END OF document.ready
