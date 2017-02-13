// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var elements = document.getElementsByTagName('img');
    var tipTimer, tipId, tipMsg;
    var element;
    var check = true;
    var anim;

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseover', function(event) {
          element = document.getElementById(this.id);
          tipId = document.getElementById(this.id + "Tip");
          tipTimer = setTimeout(showMsg, 2000);
          anim = setInterval(animate,300);
        });

        elements[i].addEventListener('mouseout', function() {
            clearTimeout(tipTimer);
            tipId.style.opacity = 0;
            clearInterval(anim);
        });

        elements[i].addEventListener('click', function(){
          element = document.getElementById(this.id);
          tipMsg = document.getElementById(this.id + "Msg");
          if(tipMsg.style.opacity!="1"){
            tipMsg.style.opacity="1";
          }
          else{
            tipMsg.style.opacity="0";
          }
        });
    }

    function showMsg() {
        tipId.style.opacity = 1;
    }

    function animate(){
      var x = element.id;
      if(check){
        element.src = "images/"+x+"1.png";
        check = false;
      }
      else{
        element.src = "images/"+x+".png";
        check = true;
      }
    }

});
