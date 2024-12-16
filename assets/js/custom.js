// Sigin Popup script 

   function togglePopup() {
       var popup = document.getElementById('popup');
       popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
   }

   function showSignupForm() {
       document.querySelector('.login-form').style.display = 'none';
       document.querySelector('.signup-form').style.display = 'flex';
   }

   function showLoginForm() {
       document.querySelector('.login-form').style.display = 'flex';
       document.querySelector('.signup-form').style.display = 'none';
   }

// Newsletter Popup script 

       document.getElementById('subscribeButton').addEventListener('click', function () {
       showPopup();
   });

   function showPopup() {
       var popup = document.getElementById('subscribePopup');
       popup.style.display = 'block';

       // Automatically hide the popup after 2 seconds
       setTimeout(function () {
           closePopup();
       }, 2000);
   }

   function closePopup() {
       var popup = document.getElementById('subscribePopup');
       popup.style.display = 'none';
   }


// Sigin form

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (()=>{
loginForm.style.marginLeft = "-50%";
loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
loginForm.style.marginLeft = "0%";
loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
signupBtn.click();
return false;
});

// Move to Top

$(document).ready(function () {
// Check if the user has scrolled down 20 pixels from the top
$(window).scroll(function () {
 if ($(this).scrollTop() > 20) {
   // If yes, display the "move to top" button
   $('#scrollToTopBtn').fadeIn();
 } else {
   // If not, hide the button
   $('#scrollToTopBtn').fadeOut();
 }
});

// When the button is clicked, scroll to the top of the page
$('#scrollToTopBtn').click(function () {
 $('html, body').animate({ scrollTop: 0 }, 500);
 return false;
});
});
