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
}