// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    window.addEventListener("scroll", onScroll);

    function onScroll() {
      if (document.body.scrollTop > 50) {
        if(document.getElementById("phone").style.opacity!="1"){
          document.getElementById("phone").className = "fade";
        }
        document.getElementById("phone").style.opacity="1";
      }

      if (document.body.scrollTop > 500) {
        if(document.getElementById("card").style.opacity!="1"){
          document.getElementById("card").className = "fade";
        }
        document.getElementById("card").style.opacity="1";
      }

      if (document.body.scrollTop > 900) {
        if(document.getElementById("carmex").style.opacity!="1"){
          document.getElementById("carmex").className = "fade";
        }
        document.getElementById("carmex").style.opacity="1";
      }

      if (document.body.scrollTop > 1200) {
        if(document.getElementById("charger").style.opacity!="1"){
          document.getElementById("charger").className = "fade";
        }
        document.getElementById("charger").style.opacity="1";
      }

      if (document.body.scrollTop > 1500) {
        if(document.getElementById("keys").style.opacity!="1"){
          document.getElementById("keys").className = "fade";
        }
        document.getElementById("keys").style.opacity="1";
      }
    return false;
    }

    //shaking animation
    document.getElementById("phone").addEventListener("mouseover", mouseOver);

    function mouseOver(){
      document.getElementById("phone").src="images/phone_gl.png";
      document.getElementById("phone").className = "shake";
    }

    document.getElementById("phone").addEventListener("mouseout", mouseOut);

    function mouseOut(){
      document.getElementById("phone").src="images/phone.png";
      document.getElementById("phone").className = "";
    }

    //for card
    document.getElementById("card").addEventListener("mouseover", mouseOver1);

    function mouseOver1(){
      document.getElementById("card").src="images/card_gl.png";
      document.getElementById("card").className = "shake";
    }

    document.getElementById("card").addEventListener("mouseout", mouseOut1);

    function mouseOut1(){
      document.getElementById("card").src="images/card.png";
      document.getElementById("card").className = "";
    }

    //for carmex
    document.getElementById("carmex").addEventListener("mouseover", mouseOver2);

    function mouseOver2(){
      document.getElementById("carmex").src="images/carmex_gl.png";
      document.getElementById("carmex").className = "shake";
    }

    document.getElementById("carmex").addEventListener("mouseout", mouseOut2);

    function mouseOut2(){
      document.getElementById("carmex").src="images/carmex.png";
      document.getElementById("carmex").className = "";
    }

    //for charger
    document.getElementById("charger").addEventListener("mouseover", mouseOver3);

    function mouseOver3(){
      document.getElementById("charger").src="images/charger_gl.png";
      document.getElementById("charger").className = "shake";
    }

    document.getElementById("charger").addEventListener("mouseout", mouseOut3);

    function mouseOut3(){
      document.getElementById("charger").src="images/charger.png";
      document.getElementById("charger").className = "";
    }

    //for keys
    document.getElementById("keys").addEventListener("mouseover", mouseOver4);

    function mouseOver4(){
      document.getElementById("keys").src="images/keys_gl.png";
      document.getElementById("keys").className = "shake";
    }

    document.getElementById("keys").addEventListener("mouseout", mouseOut4);

    function mouseOut4(){
      document.getElementById("keys").src="images/keys.png";
      document.getElementById("keys").className = "";
    }

    //animation for captions
    document.getElementById("phone").addEventListener("click", click);

    function click(){
      if(document.getElementById("phoneCap").style.opacity!="1"){
        document.getElementById("phoneCap").className = "fade";
        document.getElementById("phoneCap").style.opacity="1";
      }
      else{
        document.getElementById("phoneCap").className = "disappear";
        document.getElementById("phoneCap").style.opacity="0";
      }
    }

    document.getElementById("card").addEventListener("click", click1);

    function click1(){
      if(document.getElementById("cardCap").style.opacity!="1"){
        document.getElementById("cardCap").className = "fade";
        document.getElementById("cardCap").style.opacity="1";
      }
      else{
        document.getElementById("cardCap").className = "disappear";
        document.getElementById("cardCap").style.opacity="0";
      }
    }

    document.getElementById("carmex").addEventListener("click", click2);

    function click2(){
      if(document.getElementById("carmexCap").style.opacity!="1"){
        document.getElementById("carmexCap").className = "fade";
        document.getElementById("carmexCap").style.opacity="1";
      }
      else{
        document.getElementById("carmexCap").className = "disappear";
        document.getElementById("carmexCap").style.opacity="0";
      }
    }

    document.getElementById("charger").addEventListener("click", click3);

    function click3(){
      if(document.getElementById("chargerCap").style.opacity!="1"){
        document.getElementById("chargerCap").className = "fade";
        document.getElementById("chargerCap").style.opacity="1";
      }
      else{
        document.getElementById("chargerCap").className = "disappear";
        document.getElementById("chargerCap").style.opacity="0";
      }
    }

    document.getElementById("keys").addEventListener("click", click4);

    function click4(){
      if(document.getElementById("keysCap").style.opacity!="1"){
        document.getElementById("keysCap").className = "fade";
        document.getElementById("keysCap").style.opacity="1";
      }
      else{
        document.getElementById("keysCap").className = "disappear";
        document.getElementById("keysCap").style.opacity="0";
      }
    }


});
