//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		var username = "Dart";
		// Correct password
		var password="vader";
		// user name input

		// password input



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var userinput = prompt("what is your user name?");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(userinput);
//5. CREATE POPUP BOX FOR PASSWORD
var password_input=prompt("what is your password?");
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(password_input);
//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(userinput===username && password_input===password)

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
{
alert("Welcome back" + " "+ username);
console.log("Login successful");
}



//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
if(userinput!== username && password_input!==password){
		alert("Invalid" + " " + userinput+ "/"+ password_input);
		console.log("Login Fail");
	}
// if(userinput!== username && password_input===password){
// 	alert("Invalid" + " " + username);
// }
// if(userinput===username && password_input!==password){
// 	alert("Invalid" +" "+password);
// }