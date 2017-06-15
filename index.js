(function() {
  'use strict';

  var stop = false;
  var slow = false;
  var go = false;
  //var stop = document.querySelector('#stopButton.button');
  //var slow = document.querySelector('#slowButton.button');
  //var go = document.querySelector('#goButton.button');
  function enter(txt){

    console.log("Entered " + txt.target.textContent + " button");
  }
  function exit(txt){
    console.log("Left " + txt.target.textContent + " button");
  }

  document.querySelector('#stopButton.button').addEventListener("mouseenter",enter);
  document.querySelector('#stopButton.button').addEventListener("mouseleave",exit);
  document.querySelector('#slowButton.button').addEventListener("mouseenter",enter);
  document.querySelector('#slowButton.button').addEventListener("mouseleave",exit);
  document.querySelector('#goButton.button').addEventListener("mouseenter",enter);
  document.querySelector('#goButton.button').addEventListener("mouseleave",exit);
  document.querySelector('#stopButton.button').addEventListener("click",function(){
    if(stop){
      document.querySelector('#stopLight.bulb').classList.remove("stop");
      stop = false;
    }
    else {
      document.querySelector('#stopLight.bulb').classList.add("stop")
      stop = true;
    }
  });
  document.querySelector('#slowButton.button').addEventListener("click",function(){
    if(slow){
      document.querySelector('#slowLight.bulb').classList.remove("slow");
      slow = false;
    }
    else {
      document.querySelector('#slowLight.bulb').classList.add("slow")
      slow = true;
    }
  });
  document.querySelector('#goButton.button').addEventListener("click",function(){
    if(go){
      document.querySelector('#goLight.bulb').classList.remove("go");
      go = false;
    }
    else {
      document.querySelector('#goLight.bulb').classList.add("go")
      go = true;
    }
  });
})();
