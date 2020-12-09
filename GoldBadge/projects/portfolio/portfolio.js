/* PORTFOLIO project - .js file  */


let navbarName = document.querySelector(".navbar-name");
let logo = document.getElementById("logoL");
var iconScroll = document.getElementById("iconScroll");


/* --- SCROLL UP ---  */

// When the user scrolls down 60px from the top of the document, show the scrollUp button and my name in the navbar
window.onscroll = function() { 
    detectScroll();
};

function detectScroll(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 80 ){
        // logo.style.display = 'none';
        navbarName.innerText = "Laurine Leung";
        iconScroll.style.display = "block";
        iconScroll.style.color = "#7b6d78";
    } else {
    //     logo.style.display = 'block';
        navbarName.innerText = "";
        iconScroll.style.display = "none";
    }
}

// When the user clicks on the button (purple arrow icon), scroll to the top of the document
function scrollToTop() {
    document.documentElement.scrollTop = 0; 
}


/* --- EMAIL VALIDATION ---  */
let status = document.querySelector('.status');

function validateForm() {
    // var name =  document.getElementById('name').value;
    // if (name == "") {
    //     document.querySelector('.status').innerHTML = "Name cannot be empty";
    //     return false;
    // }
    // var email =  document.getElementById('email').value;
    // if (email == "") {
    //     document.querySelector('.status').innerHTML = "Email cannot be empty";
    //     return false;
    // } else {
    //     var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //     if(!re.test(email)){
    //         document.querySelector('.status').innerHTML = "Email format invalid";
    //         return false;
    //     }
    // }
    // var message =  document.getElementById('message').value;
    // if (message == "") {
    //     document.querySelector('.status').innerHTML = "Message cannot be empty";
    //     return false;
    // }
    status.innerHTML = "Contact form successfully submitted. Thank you, I will get back to you soon!";
    status.style.color = "#7b6d78";
    status.style.background = "#dff0d8";

  }