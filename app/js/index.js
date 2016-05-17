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

$('nav li a').click(function(){
  console.log("YOO");
});
//

//SMOOTH SCROLL:
$('a[href*="#"]:not([href="#"])').click(function() {
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


});
