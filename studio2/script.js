// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    document.f.onsubmit = processForm;
    document.f.onreset = clearForm;

    function processForm() {

      var noun1 = document.f.noun1.value;
      var noun2 = document.f.noun2.value;
      var school = document.f.school.value;
      var noun3 = document.f.noun3.value;
      var verb = document.f.verb.value;
      var noun4 = document.f.noun4.value;
      var adjective1 = document.f.adjective1.value;
      var adjective2 = document.f.adjective2.value;
      var gerund = document.f.gerund.value;
      var verb1 = document.f.verb1.value;

      var myMsg = document.getElementById("myMsg");



      if(noun1=="noun" || noun2=="plural noun" || school=="school" || noun3=="plural noun" || verb=="verb" || noun4=="plural noun" || adjective1=="adjective"|| adjective2=="adjective" || gerund=="gerund verb" || verb1=="verb"){
        alert("Please finish filling out the form!");
      }
      else{
        myMsg.className="show";
        myMsg.innerHTML = ("As a member of the "+ noun1 +" community and a part of one of these organizations this is highly offensive. "+ noun2 +" at "+ school +" make it their goal to give "+noun3+" a place to feel comfortable as well as "+verb+" the community. Comparing specific "+noun4+"to characters from a movie about bullying is "+adjective1+" and beyond "+adjective2+". Making the claim that "+noun2+" are cliques is "+gerund+" the sisterhood and values they are founded on. This is clearly a stab at a community on campus that does nothing but "+verb1+" the rest of the student body.");
      }

      return false;
    }

    function clearForm(){
      myMsg.className="hide";
    }

});
