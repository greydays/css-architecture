//sets endorsement section animation based on scrollbar position
var blockquote = document.getElementById('blockquote');
var quoteHeight = document.getElementById('quote').scrollHeight;
var animateQuote = function() {
  blockquote.classList.add("endorsement_quote_animated");
};
var evalHeight = function() {
  if (window.scrollY*4 >= quoteHeight) {animateQuote();}
};
document.addEventListener("scroll", evalHeight, false);

//password form validation
  //http://www.the-art-of-web.com/javascript/validate-password/
var pswdOne = document.getElementById('password');
var pswdTwo = document.getElementById('confirm');
var submit = document.getElementById('subscribe_button');
function checkForm() {
  var re = /^\w+$/;
    if(!re.test(form.username.value)) {
      alert("Error: Username must contain only letters, numbers and underscores!");
      form.username.focus();
      return false;
    }
  if(pswdOne.value != "" && pswdOne.value == pswdTwo.value) {
    if(pswdOne.value.length < 6) {
      pswdTwo.setCustomValidity("Error: Password must contain at least six characters!");
      pswdOne.focus();
      return false;
    } else {
      pswdTwo.setCustomValidity('');
    }
    re = /[0-9]/;
    if(!re.test(pswdOne.value)) {
      pswdOne.setCustomValidity("Error: password must contain at least one number (0-9)!");
      pswdOne.focus();
      return false;
    } else {
      pswdOne.setCustomValidity('');
    }
    re = /[a-z]/;
    if(!re.test(pswdOne.value)) {
      pswdOne.setCustomValidity("Error: password must contain at least one lowercase letter (a-z)!");
      pswdOne.focus();
      return false;
    } else {
      pswdOne.setCustomValidity('')
    }
    re = /[A-Z]/;
    if(!re.test(pswdOne.value)) {
      pswdOne.setCustomValidity("Error: password must contain at least one uppercase letter (A-Z)!");
      pswdOne.focus();
      return false;
    } else {
      pswdOne.setCustomValidity('');
    }
  } else {
    pswdTwo.setCustomValidity("Error: Please check that you've entered and confirmed your password!");
    pswdOne.focus();
    return false;
  }
  return true;
}
submit.addEventListener("click", checkForm, false);
