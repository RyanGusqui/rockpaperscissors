// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$(".shoot").click(function(){
  let hand =$("#input").val()
    $(".result").text(hand)
});

let computer=["rock","paper","scissors"]
Math.random()