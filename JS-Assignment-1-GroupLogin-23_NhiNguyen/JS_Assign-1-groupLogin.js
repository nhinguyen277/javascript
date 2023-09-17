

/**2. CREATE POPUP TO ASK FOR TEAM NUMBER */

var team= prompt("which team number do you belong to?");

//console.log(team);
/**3. CREATE POPUP DINIED MESSAGE IF THEY DO NOT PROVIDE THE CORRECT TEAM NUMBER 
 * (numeral, not text) */

if(isNaN(team) || team ===""){
alert("You are denied access.");
} 

/**4.If the team number is correct (as set by you, pick one number 1 to 6)
 *  popup message asking what their first name is. */

else {
    switch(team){
        case "1":
            var fname= prompt("what is your first name?");

/**Valid members will be greeted by a popup welcome message */

           switch(fname.toLowerCase()){
            case "naomi":
            alert("Welcome, your full name is Naomi Truong.");
            break;
            
            case "melissa":
            alert("Welcome, your full name is Melissa De Leon.");
            break;

            case "sarah":
                alert("Welcome, your full name is Sarah Tedele.");
                break;

            case "kyle":
                alert("Welcome, your full name is Kyle Scott.");
                break;

/** a value is not a valid team member name will see a popup 
 * with an “Access denied!” message.  */

            default:
                alert("Access denied!");
                break;
               

           }
            break;

        case "2":
            var fname = prompt("what is your first name?");
            switch(fname.toLowerCase()){
                case "naomi":
                alert("Welcome, your full name is Naomi Truong.");
                break;
                
                case "melissa":
                alert("Welcome, your full name is Melissa De Leon.");
                break;
    
                case "sarah":
                    alert("Welcome, your full name is Sarah Tedele.");
                    break;
    
                case "kyle":
                    alert("Welcome, your full name is Kyle Scott.");
                    break;
                
                default:
                    alert("Access denied!");
                    break;
                   
    
               }
                break;

        case "3":
            var fname= prompt("what is your first name?");
            switch(fname.toLowerCase()){
                case "naomi":
                alert("Welcome, your full name is Naomi Truong.");
                break;
                
                case "melissa":
                alert("Welcome, your full name is Melissa De Leon.");
                break;
    
                case "sarah":
                    alert("Welcome, your full name is Sarah Tedele.");
                    break;
                case "kyle":
                    alert("Welcome, your full name is Kyle Scott.");
                    break;

                default:
                    alert("Access denied!");
                    break;
                   
               }

            break;

        case "4":
            var fname = prompt("what is your first name?");
            switch(fname.toLowerCase()){
                case "naomi":
                alert("Welcome, your full name is Naomi Truong.");
                break;
                
                case "melissa":
                alert("Welcome, your full name is Melissa De Leon.");
                break;
    
                case "sarah":
                    alert("Welcome, your full name is Sarah Tedele.");
                    break;

                case "kyle":
                    alert("Welcome, your full name is Kyle Scott.");
                    break;

                default:
                    alert("Access denied!");
                    break;
                   
    
               }
            break;
        case "5":
            var fname=prompt("what is your first name?");
            switch(fname.toLowerCase()){
                case "naomi":
                alert("Welcome, your full name is Naomi Truong.");
                break;
                
                case "melissa":
                alert("Welcome, your full name is Melissa De Leon.");
                break;
    
                case "sarah":
                    alert("Welcome, your full name is Sarah Tedele.");
                    break;

                case "kyle":
                    alert("Welcome, your full name is Kyle Scott.");
                    break;

                default:
                    alert("Access denied!");
                    break;
    
               }
            break;

        case "6":
            var fname=prompt("what is your first name?");
            switch(fname.toLowerCase()){
                case "naomi":
                alert("Welcome, your full name is Naomi Truong.");
                break;
                
                case "melissa":
                alert("Welcome, your full name is Melissa De Leon.");
                break;
    
                case "sarah":
                    alert("Welcome, your full name is Sarah Tedele.");
                    break;

                case "kyle":
                    alert("Welcome, your full name is Kyle Scott.");
                    break;

                default:
                    alert("Access denied!");
                    break;
    
               }
            break;
        
        default:
            alert("The team does not exist.");          
            break;

    }
}

