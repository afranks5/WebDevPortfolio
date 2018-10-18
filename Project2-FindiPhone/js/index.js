
$(document).ready(function() {
  //Sign in button input vars
  input = $("input[type=text]");
  appleInput = $("#appleID");
  applePW = $("input[type=password]");
  button = $("button");

  toggleButton();

  input
    .keypress(toggleButton)
    .keyup(toggleButton);

  appleInput
    .keypress(toggleButton)
    .keyup(toggleButton);

  applePW
    .keypress(toggleButton)
    .keyup(toggleButton);

  //this function turns the button on/off
function toggleButton() {
 
    var appleIDElem = document.getElementById("appleID");
  
    var passwordElem = document.getElementById("password");


    if (appleIDElem.value.length != 0 && passwordElem.value.length != 0) {

      button.removeAttr("disabled");
      button.addClass("activeButton");
     
    } else {
      button.attr("disabled", "disabled");
     
      button.removeClass("activeButton");
    }
  

  
  }

  
  //Alert message
  
  var alert =
    "<b>Session has expired</b><br> You have been automatically signed<br> out to protect your privacy.";
  
   // var alert2 =
   //  "<b>kjnkjkoihoiuhiuh.";

  function displayAlertMsg(msg) {
    $(".alert-msg")
      .addClass("info")
      .html(msg)
      //.delay(2000)
      .slideDown(1000);
  }
  //displays "Session has Expired"
  displayAlertMsg(alert);

  //onClick popup
  

  var signin = "<b>Success!</b>";

  function displaySigninMsg(msg) {
    $(".signin-msg")
      .addClass("success")
      .html(msg)
      //.delay(2000)
      .slideDown(1000);
  }

  /* displaySigninMsg(alert);  */
  
  $('#signIn').click( function() {
  console.log( "Handler for .click() called." );
    displaySigninMsg(signin);
        });
  
 
  
});

/**function enableSignIn(){
//put in a function
//see if AppleID and password have a value. if they do enable the button
var appleIDElem = document.getElementById('appleID');
console.log(appleIDElem.value.length);
var passwordElem = document.getElementById('password');
console.log('password:' + passwordElem.value.length);

if (appleIDElem.value.length != 0 && passwordElem.value.length != 0) {
    console.log('good');
  document.getElementById('signIn').disabled = false;
    } else {
      console.log('bad');
      document.getElementById('signIn').disabled = true;
    }
}

enableSignIn();**/

/**
var x = document.getElementById('appleID');
x.value = "Enter you AppleID";

document.getElementsByTagName('h1')[0].innerText = "h ithere";

var flexDivs = document.getElementsByTagName('div');

console.log(flexDivs.length)

for (i = 1; i < flexDivs.length; i++) {
  flexDivs[i].classList.add('item-box');
}
**/

/**$('document').ready(function(){
  
 console.log('doc is ready');
  
 //does appleid have value?
  var x = $("input[type=text]").val().length();
  
  if (x) {
    console.log('this shold be here if x is false')
  };
  console.log(x);
  //does pwd have value?
  
  //turn on button
  
   $(button)
     .toggle
  ;
  
})**/