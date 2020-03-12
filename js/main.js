
//if the #box doesn't have an item
//add an item 
//if that item X give it a yellow color for player1
//if  it's O give it a red color for playr2


let turn = 0
let player1 = []
let player2 = []
let win = [["1", "2", "3"], ["1", "4", "7"], ["1", "5", "9"],
["2", "5", "8"], ["3", "5", "7"], ["3", "6", "9"], ["4", "5", "6"], ["7", "8", "9"]];
function checkWin(player , whoWin) {
    for (i = 0; i < win.length; i++) {
        if (player.includes(win[i][0]) && player.includes(win[i][1]) && player.includes(win[i][2])) {
            swal("Good job!", "You WIN"  , "success");
            setTimeout(() => {
                location.reload();
            }, 2500);
        }else{
            

        }
       

    }
}
$(".box").click(function (e) {
    if (turn == 0) {
        if (!$(this).hasClass("click")) {
            $(this).addClass("click")
            $(this).text("X").css('color', 'blue' , 'font-family' , ' Times, serif')

            player1.push($(this).attr("id"))
            console.log(player1);
            setTimeout(() => {
                checkWin(player1 ,"X")
            }, 50);
            

            turn = 1
        }

    }
    else {
        if (!$(this).hasClass("click")) {
            $(this).addClass("click")
            $(this).text("O")
            $(this).css('color', 'red')
            player2.push($(this).attr("id"))
            turn = 0
            console.log(player2);
            setTimeout(() => {
                checkWin(player2 ,"O")
            }, 50);
        }

    }
})

$('body').append("<button id='button'>Play Again</button>")
$('#button').click(function(){
    location.reload();;
})