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




/*******************************************
STEP 1
global variables
********************************************/

var someGlobalVariable = 0;




/*******************************************
STEP 2
functions definitions
********************************************/
/*function to add items to list*/
function AddItem() {
    //check if the targeting is working
    alert("I've just activated the AddItem() function");
}
/*function to check items in list*/
function CheckItem() {
    //check if the targeting is working
    alert("I've just activated the CheckItem() function");
}
/*function to delet all items in list*/
function DeleteAnItem() {
    //check if the targeting is working
    alert("I've just activated the DeleteAnItem() function");
}
/*function to clear list*/
function ClearList() {
    //check if the targeting is working
    alert("I've just activated the ClearList() function");
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
