// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var signInButton = document.getElementById("sign-in-button");
    var signOutButton = document.getElementById("sign-out-button");

    signInButton.addEventListener('click', function(){

      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);

    });

});
