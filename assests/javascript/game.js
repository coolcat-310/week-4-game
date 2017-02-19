/**
 * Created by juancarlosnavarrete on 2/16/17.
 */

// VARIABLES
    // ====================================================================
    // Create a list of global variables
    // ...
var counter = 0;
var randomNum = 0
var win_counter = 0;
var loss_counter = 0;
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;
var arr = [];


function start(){
    $("#win_count").html(win_counter);
    $("#loss-count").html(loss_counter);
    randomNum = getRandom();
    $("#random_number").html(randomNum);
    $("#score_number").html(counter);
    crystalRandom();

}
//This can be access within the jquery
function getRandom() {
    return Math.floor(Math.random()*100);
}

function crystalRandom(){
    for (i = 0; i< 4; i++){
        arr.push(getRandom() + 1);
    }
    crystal1 = arr[0] %5;
    crystal2 = arr[1]% 10;
    crystal3 = arr[2]% 7;
    crystal4 = arr[3]% 13;
}

function gameStatus() {
    if(counter === randomNum){
        $("#win_count").html(++win_counter);
        console.log('You win');
        reset();
    }
    else if(randomNum < counter){
        console.log('You lose');
        $("#loss-count").html(++loss_counter);
        reset();
    }

}

function reset() {
    counter = 0;
    $("#score_number").html(counter);
    randomNum = getRandom();
    $("#random_number").html(randomNum);
    crystalRandom();
}



$(document).ready(function() {
    console.log('load complete');
    start();

    $("#cristal_one").on("click", function () {

        counter += crystal1;
        $("#score_number").html(counter);
        gameStatus();
    });

    $("#cristal_two").on("click", function () {

        counter += crystal2;
        $("#score_number").html(counter);
        gameStatus();
    });
    $("#cristal_three").on("click", function () {

        counter += crystal3;
        $("#score_number").html(counter);
        gameStatus();

    });
    $("#cristal_four").on("click", function () {

        counter += crystal4;
        $("#score_number").html(counter);
        gameStatus();

    });
});

