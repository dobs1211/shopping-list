/* How to write JS apps
Milestone one: create the basic structure
- first define the main parts of the JS code
- inside of each of them describe in plain english what you are going to do
- create the functions with names but no content
- create the connection between the functions and the html buttons which are activating them
Milestone two: start complete the functions definitions and test them line by line
- inside each functions write in plain english what are the steps to follow
- complete one step at a time and test it
*/



/* Debugging strategies
debugging level 1 => check if JS syntax is correct (check console in Web Dev)
    --> a real life example: make sure that your TV remote has batteries
debugging level 2 => check if the targeting is working (check the connection between the HTML element and equivalent JS functionality ==> alert("here"); inside the function)
    --> a real life example: make sure that your remote connects to your own TV
debugging level 3 => check if the logic makes sense (check if the JS functionality returns what we expect ==> alert(VALUE-NAME); inside the function)
    --> a real life example: make sure that when you click on the volume up button on your remote, you don't get to change channels or similar
*/

/*******************************************
STEP 1
global variables
********************************************/

var someGlobalVariable = 0;




/*******************************************
STEP 2
functions definitions
********************************************/

function blahBlah(parameter) {
    //check if the targeting is working
    alert("I've just activated the blahBlah() function");
}


//add item when button pressed

}



/********************************************
STEP 3
functions usage
********************************************/

$(document).ready(function () {

    /*on click on the "#someHtmlContainer" button activate function called blahBlah with the paramenter 25*/
    $('#someHtmlContainer').on('click', function () {
        blahBlah(25);
    });

    //close document ready
});
Status API Training Shop Blog About© 2016 GitHub, Inc.Terms Privacy Security Contact Help
