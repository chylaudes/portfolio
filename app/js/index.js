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
    modalTarget: "aModal0",
    color: "#FFFFFF",
    animatedIn: "bounceInUp",
    animatedOut: "bounceOutDown",
    animationDuration: "1s",
    overflow: "scroll"
  },
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
  }

];

//UNDERSCORE TO INTERATE EACH MODAL WITH projectDATA
_.each(modalOptions, function(el, i){
  console.log(el +"and "+ i);
  $('#modal'+ i).animatedModal(el);
  var modalTemplate = _.template($('#modal-template').html());
  var resultingModal = modalTemplate({project: projectData[i]});
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

//UNDERSCORE JS
  // var artists = ['Pharrel Williams', 'Led Zeppelin', 'Rolling Stones'];
  //
  // _.each(artists, function(artist, index, artists) {
  //   var el = document.createElement('p');
  //   el.innerHTML = artist;
  //   document.body.appendChild(el);
  // });



console.log("READY");


});//END OF document.ready
