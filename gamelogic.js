
window.onload=function(){

    var button1 = document.getElementById('0').addEventListener('click', runEvent);
    var button2 = document.getElementById('1').addEventListener('click', runEvent);
    var button3 = document.getElementById('2').addEventListener('click', runEvent);
    var button4 = document.getElementById('3').addEventListener('click', runEvent);
    
    var button1 = document.getElementById('4').addEventListener('click', runEvent);
    var button2 = document.getElementById('5').addEventListener('click', runEvent);
    var button3 = document.getElementById('6').addEventListener('click', runEvent);
    var button4 = document.getElementById('7').addEventListener('click', runEvent);
    
    var button1 = document.getElementById('8').addEventListener('click', runEvent);
    var button2 = document.getElementById('9').addEventListener('click', runEvent);
    var button3 = document.getElementById('10').addEventListener('click', runEvent);
    var button4 = document.getElementById('11').addEventListener('click', runEvent);

    var button1 = document.getElementById('12').addEventListener('click', runEvent);
    var button2 = document.getElementById('13').addEventListener('click', runEvent);
    var button3 = document.getElementById('14').addEventListener('click', runEvent);
    var button4 = document.getElementById('15').addEventListener('click', runEvent);

    intitializeBoard();
}

function startTimer() {
    timer = setInterval(function(){ 
        secs++; 
        document.getElementById("gameTime").innerHTML = secs;
    }, 1000);
};

function isGameOver(){
    for(var i = 0; i < 15; i++){
        if(parseInt(document.getElementById(i).id) + 1 != parseInt(document.getElementById(i).innerHTML))
            return false;
    }
    
    if (confirm("You Win!!!  Do you want to play again?")) {
        numMoves = 0;
        document.getElementById("gameTurns").innerHTML = 0;
        intitializeBoard();
        clearInterval(timer);
        secs = 0;
        document.getElementById("gameTime").innerHTML = 0;
        startTimer()
    }
    return true;
}



function runEvent(e){
    
    if(clickOne !== false){
        clickTwo = e.target.id;
        dif = Math.abs(clickOne - clickTwo);
        
        class1 = document.getElementById(clickOne).className;
        class2 = document.getElementById(clickTwo).className;

        /*
        The following logic has is (adjacent square && valid move):
        adjacent square: only above and below and left and right, no wrap around
            accomplished with math
        valid move: can only swap with the blank space
            the squares must be different classes
        */
        if(((dif == 1 && Math.min(clickOne,clickTwo) % 4 != 3) || dif == 4) && class1 != class2){

            content1 = document.getElementById(clickOne).innerHTML;
            content2 = document.getElementById(clickTwo).innerHTML;
            
            document.getElementById(clickOne).innerHTML = content2;
            document.getElementById(clickTwo).innerHTML = content1;
            
            document.getElementById(clickOne).className = class2;
            document.getElementById(clickTwo).className = class1;
            
            numMoves++;
            document.getElementById("gameTurns").innerHTML = numMoves;

        }

        clickOne = false;
        clickTwo = false;

    }
    else{
        clickOne = e.target.id;
    }
    isGameOver();
}

function simpleGame(){
    clearInterval(timer);
    secs = 0;
    document.getElementById("gameTime").innerHTML = 0;
    startTimer()
    initialPlaces = [1,2,3,4,5,6,7,8,9,10,11,12,13, 14, 'b', 15];
    numMoves = 0;
    document.getElementById("gameTurns").innerHTML = 0;
    for(var i = 0; i < initialPlaces.length; i++){
        if(initialPlaces[i] != 'b'){
            document.getElementById(i.toString()).innerHTML = initialPlaces[i];
            document.getElementById(i.toString()).className = "tile";
        }
        else{
            document.getElementById(i.toString()).innerHTML = ' ';
            document.getElementById(i.toString()).className = "tileBlank";
        }
    }
}

function fisherYatesShuffle(){
    var boxes = [1,2,3,4,5,6,7,8,9,10,11,12,13, 14, 15, 'b'];
    
    var currentBox = boxes.length, temp, swapBox;
    while (currentBox) {
        swapBox = Math.floor(Math.random() * currentBox--);
        temp = boxes[currentBox];
        boxes[currentBox] = boxes[swapBox];
        boxes[swapBox] = temp;
    }
    return boxes;
}

function intitializeBoard(){
    clearInterval(timer);
    secs = 0;
    document.getElementById("gameTime").innerHTML = 0;
    startTimer()
    initialPlaces = fisherYatesShuffle()
    for(var i = 0; i < initialPlaces.length; i++){
        if(initialPlaces[i] != 'b'){
            document.getElementById(i.toString()).innerHTML = initialPlaces[i];
            document.getElementById(i.toString()).className = "tile";
        }
        else{
            document.getElementById(i.toString()).innerHTML = ' ';
            document.getElementById(i.toString()).className = "tileBlank";
        }
    }
}



var class1;
var class2;
var clickOne = false;
var clickTwo = false;
var dif = 0;
var content1 = '';
var content2 = '';
var numMoves = 0;

var secs = 0;
var timer;

