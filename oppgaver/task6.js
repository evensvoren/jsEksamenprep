window.onload = startup;

function startup() {
  var submit = document.getElementById("formSubmit");

  submit.addEventListener("click", checkNumber);
}

function checkNumber() {
  var coffee = document.getElementById("formAmount").value;
  var output = document.getElementById("formResult");
  var integer = parseInt(coffee, 10);

    if(integer <= 3)
        output.innerHTML = "You definitely need more coffee! How are you awake?"; 
    else if(integer <= 6)
        output.innerHTML = "You need more coffee! You need at least " + (integer + 1) + " cups in total";   

    else
    output.innerHTML = "Okay, you've had enough.";
}