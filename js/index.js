const SUBMIT_BTN = document.getElementById("submit_btn");
const LOGIN_FORM = document.getElementById("login_form");

SUBMIT_BTN.addEventListener("click" , (e)=>{
    e.preventDefault();
    console.log("clcjsd");
let error = "";
let username = document.getElementById("username").value;
let email = document.getElementById("email").value;
   if(username ==="" || email ===""){
     error += "<p class='error'>Fill All Fields</p>"
   }
   if(username.length <= 1){
       error +="<p class='error'>Username should be more than 2 characters</p>" ; 
   }
 error +=   ValidateEmail(email);
 if(error === ""){
    window.location.href =`homepage.html?username=${username}`
 }else{
    
    document.getElementById("error").innerHTML = error;
 }

})

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if ( !input.match(validRegex)) {
       return  "<p class='error'>Invalid email address! </p>"; 
        
    } else return ""
  
  }
  
  