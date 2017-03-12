// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var signInButton = document.getElementById("sign-in-button");
    var signOutButton = document.getElementById("sign-out-button");
    var currentUser = document.getElementById("current-user");

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

        currentUser.innerHTML(user.displayName);
      } else {

        currentUser.innerHTML("null");
  }
});

});
