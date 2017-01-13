$(document).ready(function(){

    var playerTurn = "X";

   // var turns = ["#","#","#","#","#","#","#","#","#"];

    var computerTurn = "O";

    var count = 0;

    var gameOn = false;

   
    // function computerMove(){
        
    // }

    function move(turn,slot,computerMove){
        var slotId = $("#"+slot).text(); // using # id ko use karan gain
        if(slotId ==="#"){
            count++;

           // turns[slot] = turn;
           $("#"+slot).text(turn);
        }
        computerMove();
    var board_1 = $("#0").text();
    var board_2 = $("#1").text();
    var board_3 = $("#2").text();
    var board_4 = $("#3").text();
    var board_5 = $("#4").text();
    var board_6 = $("#5").text();
    var board_7 = $("#6").text();
    var board_8 = $("#7").text();
    var board_9 = $("#8").text();

     if(board_1 == "X" && board_2 == "X" && board_3 == "X"||
        board_4 == "X" && board_5 == "X" && board_6 == "X"||
        board_7 == "X" && board_8 == "X" && board_9 == "X"||
        board_1 == "X" && board_5 == "X" && board_9 == "X"||
        board_3 == "X" && board_5 == "X" && board_7 == "X"||
        board_1 == "X" && board_4 == "X" && board_7 == "X"||
        board_3 == "X" && board_6 == "X" && board_9 == "X"){
         alert("X WIN");
         reset();
     }
     else if(board_1 == "O" && board_2 == "O" && board_3 == "O"||
             board_4 == "O" && board_5 == "O" && board_6 == "O"||
             board_7 == "O" && board_8 == "O" && board_9 == "O"||
             board_1 == "O" && board_5 == "O" && board_9 == "O"||
             board_3 == "O" && board_5 == "O" && board_7 == "O"||
             board_1 == "O" && board_4 == "O" && board_7 == "O"||
             board_3 == "O" && board_6 == "O" && board_9 == "O"){
                 alert("O WIN")
                 reset();
             }
        else if(count == 5){
            alert("Game Tie");
            reset();
        }
    }

    $(".tic").on("click",function(){
        var slot = $(this).attr("id"); // ye id ki value save kare ga or move function main pas karay ga
        
        move(playerTurn,slot,function(){
            var take = false;
            
              while(take === false && count !==5){
                    var ran = Math.floor(Math.random()*10);
                   var checkMove = $("#"+ran).text();
                  // console.log(checkMove);
                    if(checkMove == "#"){
                        $("#"+ran).text(computerTurn);
                    take = true;
              }
            }
        }); //calling function 
        
    });

    // reset function 
    function reset(){
        //turns = [];
        count = 0 ;
        $(".tic").text("#");
        gameOn = true;
    }
    $("#reset").on("click",function(){
        reset();
    })

    $("#turnX").on("click",function(){
        playerTurn = "X";
        computerTurn = "O"
     $(this).removeClass("x");
    })

    $("#turnO").on("click",function(){
        playerTurn = "O";
        computerTurn = "X";
    $(this).removeClass("o");
    })
    
})