// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var plus = document.getElementById('plus');
    var tabs = document.getElementsByClassName("tab");
    var pages = document.getElementsByClassName("page");
    var nav = document.getElementsByTagName('nav');
    var num = 0;
    var num1 = 50;
    var num2 = 100;
    var index = 0;
    var note;
    var current;
    var currency;
    var myElement;
    var tab1, tab11;

    plus.addEventListener("click", function(event){
      var page=document.createElement("div");
      page.className = "page";
      page.id = num;
      page.innerHTML = "<form name='"+num+"'> <input type='text' id = '"+num2+"'/> <input type='submit' value='submit'/> </form>";
      document.body.appendChild(page);
      num+=1;
      num2+=1;

      var tab = document.createElement("div");
      tab.className = "tab";
      tab.id = num1;
      num1+=1;
      document.getElementById('nav').appendChild(tab);

      tabs = document.getElementsByClassName("tab");

      document.getElementById('button').style.zIndex = index+1;
      document.getElementById('button2').style.zIndex = index+1;


      for (var i = 0; i < tabs.length; i++) {
        current = i;
        document.getElementsByName(current)[0].onsubmit = processForm;

        tabs[i].addEventListener("click", function(event){
          var x = this.id;
          x = x%50;
          document.getElementById(x).style.background = "#E6E7E8";
          document.getElementById(this.id).style.background = "#E6E7E8";
          document.getElementById(x).style.zIndex = index;
          document.getElementById('button').style.zIndex = index+1;
          document.getElementById('button2').style.zIndex = index+1;
          console.log(x);

          for (var i = 0; i < tabs.length; i++) {
            if(document.getElementById(i).style.zIndex != index){
              document.getElementById(i+50).style.background = "#D1D3D4";
            }
          }

          index++;
        });

      }

    });

    function processForm(){
      console.log(current);
      note = document.getElementById(current+100).value;
      console.log(note);

      myElement = document.createElement("li");
      myElement.innerHTML = note;
      document.getElementById(current).appendChild(myElement);

      document.getElementById(current+100).value ="";
      return false;
    }

    document.getElementById("button").addEventListener("click", function(){
      tab1 = document.getElementsByTagName("li");
      tab11 = [];

      for(var i = 0; i<tab1.length; i++){
        var str = document.getElementsByTagName("li")[i].innerText;
        tab11[i]= str;
        console.log(tab11[i]);
      }

      console.log(tab11);

      localStorage.setItem("one", JSON.stringify(tab11));
    });

    document.getElementById("button2").addEventListener("click", function(){

      // var retrievedData = localStorage.getItem("one");

      var retrievedData = localStorage.getItem("one");
      var data = JSON.parse(retrievedData);

      for(var i = 0; i<data.length; i++){

        myElement = document.createElement("li");
        myElement.innerHTML =  data[i];
        document.getElementById("0").appendChild(myElement);
        console.log(data[i]);
      }

    });






});
