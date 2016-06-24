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
/*function to add items in the shopping list*/
function addItem() {
    //check if the targeting is working
    //alert("I've just activated the addItem() function");

    //get the value of the input box
    var itemValue = $('#inputBox').val();

    //validate input
    if (itemValue.length === 0) {
        alert('You have to add something!!!');
    }

    //if the input is valid ....
    else {

        //dynamicaly create one row inside the shopping list
        var row = $('<li><img class="emptybox" src="images/checkbox-empty.png"><span class="list">' + itemValue + '</span><img class="trash" src="..//shopping-list/images/garbage-white.png"></li>');

        //add each row to the previous ones
        $('.shopping-list').append(row);

        //empty the input box after submit by resetting the value
        $('#inputBox').val('');
    }
}

/*function to delete all items in the shopping list*/
function deleteAllItems() {
    //check if the targeting is working
    //alert("I've just activated the deleteAllItems() function");

    //find the UL container (in our case having the class shopping-list) which contains all the LIs and delete all the children inside it
    $('.shopping-list').empty();
}

/*function to check items in the shopping list*/
function checkItem() {
    //check if the targeting is working
    //alert("I've just activated the checkItem() function");

    //$(this) means that on WHATEVER you just clicked (the checkbox button), go to the parent of it (in our case the LI above the it) and add / remove the "ticked" class to it
    $(this).parent().toggleClass('checked');
}

/*function to delete one item in the shopping list*/
function deleteAnItem() {
    //check if the targeting is working
    //alert("I've just activated the deleteAnItem() function");

    //$(this) means that on WHATEVER you just clicked (the delete one item button), go to the parent of it (in our case the LI above it) and remove the parent and everything inside it
    $(this).parent().remove();
}



/********************************************
STEP 3
functions usage
********************************************/

$(document).ready(function () {

    /* on click on the "#addItem" button activate function called addItem() */
    $('#addItem').on('click', function () {
        addItem();
    });
    /* on click on the ".delete-all" button activate function called deleteAllItems() */
    $('.delete-all').on('click', function () {
        deleteAllItems();
    });

    //close document ready
});

/* on click on the ".trash" button activate function called deleteAnItem() */
$(document).on('click', '.trash', deleteAnItem);

/* on click on the ".emptybox" button activate function called checkItem() */
$(document).on('click', '.emptybox', checkItem);
