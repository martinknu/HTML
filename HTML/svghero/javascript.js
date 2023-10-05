// ON mouseover
this_is_the_center.onmouseover = function(event){

  const elmnt = document.getElementsByClassName("center_in_navigation")[0];
  let elementWidth = elmnt.offsetWidth;
  let boundingWidth = elmnt.getBoundingClientRect().width;
  document.getElementById("center_in_navigation_w").innerHTML = "Width: " + elementWidth;
  document.getElementById("center_in_navigation_wb").innerHTML = "bounding Width: " + boundingWidth;
  console.log("mouseover");
  console.log(elmnt.getBoundingClientRect());
};

// ON mouseout
this_is_the_center.onmouseout = function(event){

  const elmnt = document.getElementsByClassName("center_in_navigation")[0];
  let elementWidth = elmnt.offsetWidth;
  let boundingWidth = elmnt.getBoundingClientRect().width;
  document.getElementById("center_in_navigation_w").innerHTML = "Width: " + elementWidth;
  document.getElementById("center_in_navigation_wb").innerHTML = "bounding Width: " + boundingWidth;
  console.log("mouseout");
};
