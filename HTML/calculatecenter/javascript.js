const div_1 = document.getElementById('change_div');
console.log(div_1);
div_1.classList.add("highlight")


// Function to execute when button "btn001" is clicked
function myFunction() {
  document.getElementById("demo_p_001").innerHTML = "YOU CLICKED ME!";
}


// Eventlistener for button "btn002" click
document.getElementById("btn002").addEventListener("click", myEventListener001);

function myEventListener001() {
    document.getElementById("demo_p_002").innerHTML = "YOU CLICKED ME! and I have an event listener";   

    // Output the width and height of the div center_in_navigation

    const elmnt = document.getElementsByClassName("center_in_navigation")[0];
    console.log(elmnt);
    let text = "Height with padding and border: " + elmnt.offsetHeight + "px<br>";
    text += "Width with padding and border: " + elmnt.offsetWidth + "px";
    console.log(text);
    document.getElementById("center_in_navigation_w").innerHTML = elmnt.offsetWidth;
    document.getElementById("center_in_navigation_h").innerHTML = elmnt.offsetHeight;
}


var my_div = document.getElementById("center_in_navigation_w");
var width = my_div.offsetWidth;

if (window.addEventListener) {  // all browsers except IE before version 9
  window.addEventListener ("resize", onResizeEvent, true);
} else {
  if (window.attachEvent) {   // IE before version 9
    window.attachEvent("onresize", onResizeEvent);
  }
}

function onResizeEvent() {
  const elmnt = document.getElementsByClassName("center_in_navigation")[0];
  let text = "Height with padding and border: " + elmnt.offsetHeight + "px<br>";
  text += "Width with padding and border: " + elmnt.offsetWidth + "px";
  document.getElementById("center_in_navigation_w").innerHTML = elmnt.offsetWidth;
  document.getElementById("center_in_navigation_h").innerHTML = elmnt.offsetHeight;
  console.log("mouseover");
}


this_is_the_center.onmouseover = function(event){

  const elmnt = document.getElementsByClassName("center_in_navigation")[0];
  let text = "Height with padding and border: " + elmnt.offsetHeight + "px<br>";
  let clientWidth = elmnt.getBoundingClientRect();
  text += "Width with padding and border: " + elmnt.offsetWidth + "px";
  document.getElementById("center_in_navigation_w").innerHTML = elmnt.offsetWidth;
  document.getElementById("center_in_navigation_h").innerHTML = clientWidth;
  console.log("mouseover");
  console.log(clientWidth);
};



this_is_the_center.onmouseout = function(event){

  const elmnt = document.getElementsByClassName("center_in_navigation")[0];
  let text = "Height with padding and border: " + elmnt.offsetHeight + "px<br>";
  let clientWidth = elmnt.getBoundingClientRect();
  text += "Width with padding and border: " + elmnt.offsetWidth + "px";
  document.getElementById("center_in_navigation_w").innerHTML = elmnt.offsetWidth;
  document.getElementById("center_in_navigation_h").innerHTML = clientWidth;
  console.log("mouseout");
  console.log(clientWidth);
};
//setInterval(onResizeEvent, 2000);