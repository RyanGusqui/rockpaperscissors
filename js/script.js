// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOsCUMENT READY FUNCTION BELOW


$("#shoot").click(function(){
let computer= Math.random()
let compchoice="blank"
    let hand =$("#input").val()
$("#userChoice").text(hand)
    
if (computer <=0.33 ){
    let compchoice="rock"
$("#computerChoice").text(compchoice)
}
else if (computer >=0.33 && computer<0.66){

    let compchoice="paper"
    $("#computerChoice").text(compchoice)
}
else {
    let compchoice="scissors"
    $("#computerChoice").text(compchoice)
}
if (computer <=0.33 && hand==="rock" || computer >=0.33 && computer<0.66 && hand==="paper" || computer >=0.66 && computer<=0.99 && hand==="scissors") {
    $("#result").text("Its a Tie")
}
else if (computer <=0.33 && hand==="paper"){
    $("#result").text("You beat the computer cool, good job")
}
else if (computer >=0.33 && computer<0.66 && hand==="scissors"){
    $("#result").text("You beat the computer cool, good job")
}
else if (computer >=0.66 && computer<=0.99 && hand==="rock"){
    $("#result").text("You beat the computer cool, good job")
}
else if (computer <0.33 && hand==="scissors"){
    $("#result").text("You've been beaten")
}
else if (computer >=0.33 && computer<0.66 && hand==="rock"){
    $("#result").text("You've been beaten")
}
else if (computer >=0.66 && computer<=0.99 && hand==="paper"){
    $("#result").text("You've been beaten")
}
else {
$("#result").text("this is somewhat case sensetive either that or put an actual answer!:]")
}
});