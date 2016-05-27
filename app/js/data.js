var bt = "images/bt/";
var style = "images/stylem/";
var one = "images/oneApp/";
var fj = "images/friendsJ/";
var port = "images/port/";

var projectData = [
  {
    name: "Boutiq.travel",
    github: "",
    website: "",
    currentProj: false,
    intro: "Hello World",
    coverImage: bt+"bt_cove.svg",
    images: [
      {
        img: bt+"bt_iphone_home.svg",
        size:"",
        caption: "Home Page",
        subCaption: "Landing Page for Boutiq.Travel.  One click to Log in to Facebook Authentication",
      },
      {
        img: bt+"bt_iphone2.svg",
        size:"",
        caption:"New Feed",
        subCaption:"New Feed has the latest reviews of your friends from Facebook. Instagram-like functionality.  You can like each review that has been posted",
      },
      {
        img: bt+"bt_iphone3.svg",
        size:"",
        caption: "Post A Review Form",
        subCaption: "Posting a review for all your friends to see.  Includes GoogleMaps Autocomplete, and GoogleMaps Api to find all the Places you want to review for your travels.",
      },
      {
        img: bt+"bt_iphone4_profile_bg.svg",
        size:"",
        caption: "User's Profile Page",
        subCaption:"Profile Page that includes all your reviews, ordered by the Latest review.  Your facebook friends can also post a comment on the Review you posted.",
      },
      {
        img: bt+"bt_iphone5_search.svg",
        size:"",
        caption: "Searching for Places to check on?",
        subCaption:"When you're traveling to a particular place, search for it and filter the results by TAGs; Where to Eat/ Drink/ Sleep/ Do.",
      },
      {
        img: bt+"bt_search_iphone.svg",
        size:"",
        caption: "Filtered!",
        subCaption:"Filtered by the 'Eat' tag, and how many reviews your friends already Reviewed",
      },
//Add the Place Profile page, and the Likes feature
    ],
  responsibilities: [],
  futureFeatures: []


  }, // End of Boutiq.travel

  {
    name: "Style Me",
    github: "",
    website:"",
    currentProj: true,
    intro: "Hello World",
    coverImage: style + "stylem_imac1.svg",
    images: [
      {
        img: style + "stylem_3.svg",
        size:"",
        caption: "Styling Platform",
        subCaption: "Given the User's current location, we get the current temperature and get a randomized selection of clothes based on how hot or how cold it is.  The User gets to choose the items he/she can style",
      },
      {
        img: style + "stylem_1.svg",
        size:"",
        caption: "Style Page",
        subCaption:"Saving your outfits that you curated for each day. It shows the temperature, the date, and the pictures of the outfits you kept",
      },
      {
        img: style + "stylem_2.svg",
        size:"",
        caption: "Show Info",
        subCaption:"Gives you information on what brands and stores you can find these items",
      },
      //Want to add Men's style also.
    ],
    responsibilities: [],
    futureFeatures: []
    //Add that you would want the images to click to the store name
    //Add that you would want to update the algorithm
    //add that you would want to turn it into a Rangular App
  }, // End of StyleMe

  {
    name: "The ONE APP",
    github: "",
    website: "",
    currentProj: false,
    intro: "Hello World",
    coverImage: one + "one_app_cover.svg",
    images: [
      {
        img: one+"one_app_full.svg",
        size:"full",
        caption: "By Catagory or Artist",
        subCaption:"The Artwork is catagorized by Medium, or by the Artist themselves.  Here we have it organized by Illustration",
      },
      {
        img: one+"one_app_full2.svg",
        size:"full",
        caption: "Art Piece",
        subCaption:"Each piece of art can be added your cart and be added to your collection.",
      },
      {
        img: one+"one_app_full3.svg",
        size:"full",
        caption: "Collection",
        subCaption:"The Collection feature was built to save a user's favorites and admire the pieces that the love.  They can remove it by hovering a piece and pressing the remove button.",
      },
      {
        img: one + "one_app_1.svg",
        size: "half",
        caption: "Shopping Cart",
        subCaption: "Buying a piece(s) has never been easier!  Add the pieces into your cart and the Stripe API will check each customer out.",
      }
//One more pic of the shopping cart in the imac feature
    ],
  responsibilities: [],
  futureFeatures: []
},// END OF ONEAPP OBJ

  {
    name: "Friends Jeopardy",
    github:"",
    website: "",
    currentProj: false,
    intro: "Hello World",
    coverImage: fj+"friendsJcover2.svg",
    images: [
      {
        img: fj+"friendsJ4.svg",
        size:"",
        caption: "Friends Game Board",
        subCaption:"Features include a game cards that reveal questions and answers.  Answered questions and current team's turn are highlighted.",
      },
      {
        img: fj+"friendsJ_1.svg",
        size:"",
        caption: "Question Modal",
        subCaption:"Each question has a Catagory and points, the question, and a time limit for the team to answer the question.  Some questions have videos to make the game more interactive.",
      },
      {
        img: fj+"friendsJ2.svg",
        size:"",
        caption: "Question Modal 2",
        subCaption:"Another example of a question modal, but with the iconic scene of the female Friends in wedding dresses",
      },
      {
        img: fj+"friendsJ3.svg",
        size:"",
        caption: "Answer Modal",
        subCaption:"After a team has Answered the Question, the show Modal can subtract points or add points to a team.  The green adds points to the team and also dismisses the Modal",
      },
      {
        img: fj+"friends_cover3.svg",
        size:"",
        caption: "Answer Modal 2",
        subCaption:"Another example of answer Modal",
      },
      {
        img: fj+"friends_cover4.svg",
        size:"",
        caption: "Winner Winner!",
        subCaption:"At the end of the game, the web application will congradulate the winner of the game! YAY!",
      }
    ],
  responsibilities: [],
  futureFeatures: []
  //ADD a before and After of Friends Jeopardy and Angular Friends Jeopardy

},// END OF FriendsJeopardy

  {
    name: "Portfolio",
    github: "",
    website: "",
    currentProj: true,
    intro: "",
    coverImage: "",
    images: [],
    responsibilities: [],
    futureFeatures: []

  }
];// end of projectData
