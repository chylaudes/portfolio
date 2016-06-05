$(document).ready(function(){
  $('.parallax-window').parallax({imageSrc: 'images/gingham1.svg', naturalWidth: 2008, naturalHeight: 1267});
  $('.parallax-window1').parallax({imageSrc: 'images/gingham1.svg', naturalWidth: 2008, naturalHeight: 1267});
  $("#my-menu").mmenu({
    "extensions": [
      "pagedim-black", "theme-white"
      ],
    offCanvas: {
      position: "left",
      zposition: "next"
      }
  });
  //HAMBURGER MENU
  var API = $("#my-menu").data("mmenu");
  $('#hamburger').click(function(){
    API.open();
  });
//UNDERSCORE TO INTERATE EACH MODAL WITH projectDATA
_.each([0 , 1 , 2 , 3 , 4], function(el, i){
  var modalOptions = {
    modalTarget: "aModal" + i,
    color: "#FFFFFF",
    animatedIn: "bounceInUp",
    animatedOut: "bounceOutDown",
    animationDuration: "1s",
    overflow: "scroll"
  };
  $('#modal'+ i).animatedModal(modalOptions);
  var modalTemplate = _.template($('#modal-template').html());
  var resultingModal = modalTemplate({projects: projectData, project: projectData[i]});
  $('#aModal'+i).append(resultingModal);
});
//SMOOTH SCROLL:
$('.scrll').click(function(e) {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500, function(){
          API.close();
        });
        return false;
      }
    }
  });
//scroll reveal.js
  window.sr = ScrollReveal();
  sr.reveal('.profile', { duration: 800 });
  sr.reveal('.who', { duration: 1000 }, 300);
  sr.reveal('.ski-scroll', { duration: 1000 }, 200);
  sr.reveal('.contact-scroll', { duration: 1000 }, 200);
  sr.reveal('figure', {duration: 500, viewFactor: 0.1});
});//END OF document.ready
