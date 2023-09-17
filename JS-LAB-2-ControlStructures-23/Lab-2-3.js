//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========
var asking = confirm("would you like to join our mailing list ?");
if(asking=== false){
alert("Thank you, we will not bother you again")
}
if(asking === true){
    var email= prompt("Input your email","Please input right format");
    console.log(email);
    if(email === null || email ===""|| email ==="Please input right format")
        {
            alert("Thank you, but your email was not valid.");
        } 
    else{
        alert("Thank you, our next newsletter will be sent to" + " " + email);
        }
} 

    






//==== LOGIC =============