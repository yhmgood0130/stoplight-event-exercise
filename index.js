(function() {
  'use strict';

  var stop = document.querySelector('#stopButton.button');
  var slow = document.querySelector('#slowButton.button');
  var go = document.querySelector('#goButton.button');
  stop.addEventListener("click",function(){document.querySelector('#stopLight.bulb').classList.add("stop")});
  slow.addEventListener("click",function(){document.querySelector('#slowLight.bulb').classList.add("slow")});
  go.addEventListener("click",function(){document.querySelector('#goLight.bulb').classList.add("go")});
})();
