$(document).ready(function(){
  $('.parallax-window').parallax({imageSrc: 'images/grid.svg'})
  $('.parallax-window1').parallax({imageSrc: 'images/typewriter.svg'})

  // $(window).scroll(function(){
  //     // The total height of the jumbotron
  //     var scrollTop = $('.jumbotron').outerHeight(true);
  //     // Total height of navbar
  //     var navbar = $('.navbar').outerHeight(true);
  //     // If the user scrolls down
  //     if($(window).scrollTop() >= scrollTop) {
  //       // Fix to top
  //       $( ".navbar" ).addClass( "navbar-fixed-top" );
  //       // And padding-top to the body so the content does not jump up
  //       $("body").css("padding-top", navbar);
  //     }
  //     // If the user scrolls back up
  //     if($(window).scrollTop() < scrollTop){
  //       // Undo
  //       $( ".navbar" ).removeClass( "navbar-fixed-top" );
  //       $("body").css("padding-top","0px");
  //     }
  //   });
  console.log("READY")

});
