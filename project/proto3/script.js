// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var signInButton = document.getElementById("sign-in-button");
    var signOutButton = document.getElementById("sign-out-button");
    var currentUser = document.getElementById("current-user");
    var submitButton = document.getElementById("submit-button");
    var postTitle = document.getElementById("post-title");
    var postContent = document.getElementById("post-content");
    var postPass = document.getElementById("post-pass");
    var userId;

    signInButton.addEventListener('click', function(){

      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);

    });

    signOutButton.addEventListener('click', function(){

      firebase.auth().signOut();

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

        currentUser.innerHTML = user.displayName;
        userId = user.uid;
        console.log(userId);
        writeUserData(uid, displayName, email, photoURL);

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

    });

    function writePost(userId, ptitle, pcontent, ppass) {
      firebase.database().ref('posts/' + userId).set({
        title: ptitle,
        content: pcontent,
        pass: ppass
      });
    }

});
