window.onload = function () {

	var num;
	var box;
	var play = 1;

	var board = [false, false, false, false, false, false, false, false, false];

	var xO = ['', '', '', '', '', '', '', '', ''];

	var winCombs = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

	var game = false;
	var victory = false;


	var newGame = document.getElementById("newgame");
	newGame.addEventListener("click", reset);

	function reset () {
		document.location.reload();
	};

	document.getElementById("boxes").addEventListener("click", function(event){
		addOX(event.target.id);
	});

	function addOX (cell) {
		box = document.getElementById(cell);

		cell === "box1" ? num = 1 : num;
		cell === "box2" ? num = 2 : num;
		cell === "box3" ? num = 3 : num;
		cell === "box4" ? num = 4 : num;
		cell === "box5" ? num = 5 : num;
		cell === "box6" ? num = 6 : num;
		cell === "box7" ? num = 7 : num;
		cell === "box8" ? num = 8 : num;
		cell === "box9" ? num = 9 : num;

		if (!board[num-1] && !game && play % 2 !== 0 && !victory)  {
			xO[num -1] = 'X';
			box.innerHTML = 'X';		
		} 
		else if (box.innerHTML !== 'X' && !victory) {
			xO[num -1] = 'O';
			box.innerHTML = 'O';
		}
		
		play++;
		board[num -1] = true;

		var curPlayer = xO[num - 1];

		for (var i = 0; i < winCombs.length; i++) {
			if (xO[winCombs[i][0]] === curPlayer && xO[winCombs[i][1]] === curPlayer && xO[winCombs[i][2]] === curPlayer) {
				document.getElementById("gamestate").innerHTML = curPlayer + ' has won!'
				victory = true;
				game = true;
			}	
		}
			if (play > 9 && !game) {
				document.getElementById("gamestate").innerHTML = 'Draw';
				victory = true;
			}

	}

};