// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOsCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
  let hand =$("#input").val()
    $("#userChoice").text(hand)

});

let computer= Math.random()