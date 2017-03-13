// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    //buttons
    var signInButton = document.getElementById("sign-in-button");
    var signOutButton = document.getElementById("sign-out-button");
    var submitButton = document.getElementById("submit-button");
    var postButton = document.getElementById("post-button");
    var allPostsButton = document.getElementById("all-posts-button");
    var yourPostsButton = document.getElementById("your-posts-button");

    //form
    var postTitle = document.getElementById("post-title");
    var postContent = document.getElementById("post-content");
    var postPass = document.getElementById("post-pass");

    //header
    var header = document.getElementById("header");
    var headerSpace = document.getElementById("header-space");

    //sections
    var loginPage = document.getElementById("login-page");
    var homePage = document.getElementById("home-page");
    var postPage = document.getElementById("post-page");
    var thankYouPage = document.getElementById("thank-you-page");
    var yourPosts = document.getElementById("your-posts");
    var allPosts = document.getElementById("all-posts");

    //footer
    var footer = document.getElementById("footer");
    var footerSpace = document.getElementById("footer-space");

    //user
    var currentUser = document.getElementById("current-user");
    var userId;
    var userName = "null";

    signInButton.addEventListener('click', function(){

      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);

    });

    signOutButton.addEventListener('click', function(){

      firebase.auth().signOut();
      loginPage.style.display = "block";
      homePage.style.display = "none";
      header.style.display = "none";
      headerSpace.style.display = "none";

    });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

        currentUser.innerHTML = "Welcome " + user.displayName;
        userId = user.uid;
        userName = user.displayName;
        console.log(userId);
        writeUserData(uid, displayName, email, photoURL);

        if(userName != "null"){
          loginPage.style.display = "none";
          homePage.style.display = "block";
          header.style.display = "block";
          headerSpace.style.display = "block";
        }

      } else {
        currentUser.innerHTML = "null";

      }
    });

    function writeUserData(userId, name, email, imageUrl) {
      firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
      });
    }

    submitButton.addEventListener('click', function(){

      var mainTitle = postTitle.value;
      var mainContent = postContent.value;
      var mainPass = postPass.value;

      var article = document.createElement("div");

      article.innerHTML = "<h2>" + mainTitle + "</h2> <h3>" + userName + "</h3> <p>" + mainContent + "</p> <p>" + mainPass + "</p>";

      var article1 = document.createElement("div");

      article1.innerHTML = "<h2>" + mainTitle + "</h2> <h3>" + userName + "</h3> <p>" + mainContent + "</p> <p>" + mainPass + "</p>";

      yourPosts.insertBefore(article, yourPosts.childNodes[0]);

      allPosts.insertBefore(article1, allPosts.childNodes[0]);

      writePost(userId, mainTitle, mainContent, mainPass);

    });

    function writePost(userId, ptitle, pcontent, ppass) {
      firebase.database().ref().child("posts").push().set({
        title: ptitle,
        content: pcontent,
        pass: ppass
      });
    }

    postButton.addEventListener("click", function(){

      postPage.style.display = "block";
      homePage.style.display = "none";

    }),

    allPostsButton.addEventListener("click", function(){

      allPosts.style.display = "block";
      homePage.style.display = "none";

    });

    yourPostsButton.addEventListener("click", function(){

      yourPosts.style.display = "block";
      homePage.style.display = "none";

    });

});
