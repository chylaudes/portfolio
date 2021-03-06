var bt = "images/bt/";
var style = "images/stylem/";
var one = "images/oneApp/";
var fj = "images/friendsJ/";
var port = "images/port/";

var projectData = [
  {
    name: "Boutiq.travel",
    github: "",
    website: "https://boutiq-travel.herokuapp.com/",
    currentProj: true,
    intro: "Boutiq.Travel is a ROR web application that allows a user to write a review of all the traveling destinations he/she has been to.  I was the sole developer of the application, and architected the database.  The application has a news feed that retrieves the latest reviews from your Facebook Friends and uses the Google Places library to find the places they've reviewed.  The application can filter your friends' reviews through tags, and can save your favorite places to check out later.",
    coverImage: bt+"bt_cove.svg",
    images: [
      {
        img: bt+"bt_iphone_home.svg",
        size:"img_small",
        captionDiv:"caption-bt",
        caption: "Home Page",
        subCaption: "Landing Page for Boutiq.Travel.  One click to Log in to Facebook Authentication",
      },
      {
        img: bt+"bt_iphone2.svg",
        size:"img_small",
        captionDiv:"caption-bt",
        caption:"New Feed",
        subCaption:"New Feed has the latest reviews of your friends from Facebook. Instagram-like functionality.  You can like each review that has been posted",
      },
      {
        img: bt+"bt_iphone3.svg",
        size:"img_small",
        captionDiv:"caption-bt",
        caption: "Post A Review Form",
        subCaption: "Posting a review for all your friends to see.  Includes GoogleMaps Autocomplete, and GoogleMaps Api to find all the Places you want to review for your travels.",
      },
      {
        img: bt+"bt_iphone4_profile.svg",
        size:"img_small",
        captionDiv:"caption-bt",
        caption: "User's Profile Page",
        subCaption:"Profile Page that includes all your reviews, ordered by the Latest review.  Your facebook friends can also post a comment on the Review you posted.",
      },
      {
        img: bt+"bt_iphone5_search.svg",
        size:"img_small",
        captionDiv:"caption-bt",
        caption: "Searching for Places to check on?",
        subCaption:"When you're traveling to a particular place, search for it and filter the results by TAGs; Where to Eat/ Drink/ Sleep/ Do.",
      },
      {
        img: bt+"bt_search_iphone.svg",
        size:"img_small",
        captionDiv:"caption-bt",
        caption: "Filtered!",
        subCaption:"Filtered by the 'Eat' tag, and how many reviews your friends already Reviewed",
      },
//Add the Place Profile page, and the Likes feature
    ],
  responsibilities: ["Sole Full Stack Engineer of the Application, and worked with a Senior Dev to pair program with to best optimize the code base", "Developed the entire REST-ful backend API for react developers to use for the native application", "Built social network functionality such as following users, blocking users, reporting content, etc.", "Programmed the front-end and the application's mobile-responsiveness, using jquery, bootstrap, css, and ajax", "Responsible for developing Facebook authentication feature, the forms using the Google Maps Library, the Likes feature, and the news feed", "Configured the admin interface using the RailsAdmin gem"],
  futureFeatures: [],
  technologies: ["Ruby on Rails", "JQUERY", "HTML5", "CSS", "AJAX", "SVG", "Bootstrap", "PostgreSQL", "Heroku"],
  api: []
  }, // End of Boutiq.travel

  {
    name: "Style Me",
    github: "https://github.com/chylaudes/StyleMe",
    website:"https://stylem.herokuapp.com/",
    currentProj: true,
    intro: "Style Me is a Ruby on Rails application that combines a weather API and a Shopping API to populate suggested clothing items based on the temperature and user’s gender. I collaborated with a partner to build a platform where a user can style their outfits and record their past outfits.",
    coverImage: style + "stylem_imac1.svg",
    images: [
      {
        img: style + "style_female.jpg",
        size:"img_cover-st",
        captionDiv:"caption-st",
        caption: "Styling Platform",
        subCaption: "Given the User's current location, we get the current temperature and get a randomized selection of clothes based on how hot or how cold it is.  The User gets to choose the items she can style",
      },
      {
        img: style + "style_men1.jpg",
        size:"img_cover-st",
        captionDiv:"caption-st",
        caption: "Style Page for Men",
        subCaption:"We also designed an algorithm to curate outfits with the latest men styles",
      },
      {
        img: style + "style_1.svg",
        size:"img_cover-st",
        captionDiv:"caption-st",
        caption: "Styled Outfits",
        subCaption:"Saving your outfits that you curated for each day, this page shows the temperature, the date, and the pictures of the outfits you kept",
      },
      {
        img: style + "styleme_1.svg",
        size:"img_cover-st",
        captionDiv:"caption-st",
        caption: "Show Info",
        subCaption:"Clicking on the button will gives you information on what brands and stores you can find these items",
      },
    ],
    responsibilities: ["Designed and programmed the front-end, and the user flow of the application", "Helped draw out the algorithm to append the right clothes for different weather conditions", "Responsible for the Authentication and Authorization of the application with the Devise User gem."],
    futureFeatures: ["Optimize the algorithm, so it isn't a bunch of `if` and `else` statements", "Update the algorithm with better keywords to get the latest styles", "Change it from a Rails Application into a Rangular application", "Fixed the links to directly go to the store of the product that has been clicked on", "Add an outerwear style"],
    technologies: ["Ruby on Rails", "JQUERY", "HTML5", "CSS", "AJAX", "Bootstrap", "PostgreSQL", "Heroku"],
    api: ["Google Maps", "ShopSense", "wunderground", "Devise User"]
  }, // End of StyleMe

  {
    name: "ONE APP",
    github: "https://github.com/chylaudes/OneApp",
    website: "https://calm-sea-3644.herokuapp.com/",
    currentProj: false,
    intro: "The One App is a Ruby on Rails web application that sells one-of-a-kind art pieces to its exclusive customers.  The e-commerce store has gorgeous art pieces,  that is categorized by artist or by medium.  The artwork is bought with using the Stripe API, and the Redis database to time the checkout operation.  The website also has a place to collect pieces that they love, so they can admire later.",
    coverImage: one + "one_app_cover.svg",
    images: [
      {
        img: one+"one_app_full.jpg",
        size:"img_cover-st",
        captionDiv:"caption-st",
        caption: "By Catagory or Artist",
        subCaption:"The Artwork is catagorized by Medium, or by the Artist themselves.  Here we have it organized by Illustration",
      },
      {
        img: one+"one_app_full2.svg",
        size:"img_cover-st",
        captionDiv:"caption-st",
        caption: "Art Piece",
        subCaption:"Each piece of art can be added your cart and be added to your collection.",
      },
      {
        img: one+"one_app_full3.svg",
        size:"img_cover-st",
        captionDiv:"caption-st",
        caption: "Collection",
        subCaption:"The Collection feature was built to save a user's favorites and admire the pieces that the love.  They can remove it by hovering a piece and pressing the remove button.",
      },
      {
        img: one + "one_app_2.svg",
        size: "img_cover-st",
        captionDiv:"caption-st",
        caption: "Shopping Cart",
        subCaption: "Shopping cart for all purchases",
      },
      {
        img: one + "one_app_1.svg",
        size: "img_cover-st",
        captionDiv:"caption-st",
        caption: "Stripe API",
        subCaption: "Buying a piece(s) has never been easier!  Add the pieces into your cart and the Stripe API will check each customer out.",
      }
    ],
  responsibilities: ["Integrated the Stripe API into the web application","Programmed the Front-end from a design from the designer", "Built out the `Add to Collection` feature and the space to store the user's collection", "Collaborated with 3 other developers using the git workflow"],
  futureFeatures: [],
  technologies: ["Ruby on Rails", "JQUERY", "HTML5", "CSS", "AJAX", "Bootstrap", "PostgreSQL", "Heroku"],
  api: ["Stripe API", "Redis", "Devise User"]
},// END OF ONEAPP OBJ

  {
    name: "Friends Jeopardy",
    github:"https://github.com/chylaudes/friendsAngular",
    website: "http://chylaudes.github.io/angularFriends/",
    currentProj: false,
    intro: " A Jeopardy game that quizzes teams on how well they know the TV Show Friends.  It's made to be projected on a screen with a game show host to coordinate the scores of the teams.  The static website was first built on HTML5/CSS/JS, but I refactored it with Angular.js.",
    coverImage: fj+"friendsJcover2.svg",
    images: [
      {
        img: fj+"old.png",
        size:"img_med",
        captionDiv:"caption-fj",
        caption: "Friends Jeopardy 1.0",
        subCaption:"The older version of the game and with only HTML/CSS/Bootstrap/jquery.",
      },
      {
        img: fj+"friendsJ4.svg",
        size:"img_med-fl",
        captionDiv:"caption-fj",
        caption: "Friends Game Board",
        subCaption:"New remake with using the front-end framework, Angular.js. Features include a game cards that reveal questions and answers.  Answered questions and current team's turn are highlighted.",
      },
      {
        img: fj+"friendsJ_1.svg",
        size:"img_med",
        captionDiv:"caption-fj",
        caption: "Question Modal",
        subCaption:"Each question has a Catagory and points, the question, and a time limit for the team to answer the question.  Some questions have videos to make the game more interactive.",
      },
      {
        img: fj+"friendsJ2.svg",
        size:"img_med-fl",
        captionDiv:"caption-fj",
        caption: "Question Modal 2",
        subCaption:"Another example of a question modal, but with the iconic scene of the female Friends in wedding dresses",
      },
      {
        img: fj+"friendsJ3.svg",
        size:"img_med",
        captionDiv:"caption-fj",
        caption: "Answer Modal",
        subCaption:"After a team has Answered the Question, the show Modal can subtract points or add points to a team.  The green adds points to the team and also dismisses the Modal",
      },
      {
        img: fj+"friends_cover3.svg",
        size:"img_med-fl",
        captionDiv:"caption-fj",
        caption: "Answer Modal 2",
        subCaption:"Another example of answer Modal",
      },
      {
        img: fj+"friends_cover4.svg",
        size:"img_cover-st",
        captionDiv:"caption-st",
        caption: "Winner Winner!",
        subCaption:"At the end of the game, the web application will congradulate the winner of the game! YAY!",
      }
    ],
  responsibilities: ["Use of controllers, dependicies, directives, services, and $scope.$watch to watch the scores change as the game progresses",
  "Designed and programmed the front-end to look like Cards of Humanity", "Has Youtube videos that feature iconic scenes from the tv show", "Used the gulp.js for the front-end workflow, as well as compressing and minifying code"],
  futureFeatures: [],
  technologies: ["Angular.js", "Underscore.js", "Javascript", "HTML5", "CSS", "Bootstrap", "Gulp"],
  api: []
},// END OF FriendsJeopardy

  {
    name: "Portfolio",
    github: "https://github.com/chylaudes/portfolio",
    website: "index.html",
    currentProj: true,
    intro: "My porfolio site!  Self explanatory, but it's a place where I can show off my work and projects I've been working on.  I've been using a mix of jquery and javascript plugins to accomplish the design and feel of the site.",
    coverImage: port+"port3.png",
    images: [],
    responsibilities: ["Developed a Gulp workflow with BrowserSync, and gulp dependecies to minify code and compress images","Used underscore.js library","Used a combination of jquery plugins like mmenu, scrollReveal.js, parallax.js", "Added css stylesheets from hover.css, and animate.css",  "Design was created with love by me!"],
    futureFeatures: ["Making it mobile responsive"],
    technologies: ["Underscore.js", "Javascript", "HTML5", "CSS", "Bootstrap", "SVG", "Gulp"],
    api: []

  }
];// end of projectData
