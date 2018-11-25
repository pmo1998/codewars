/*
  board = [[0,0,0,2,2,0],
           [0,3,0,0,0,0],
           [0,3,0,1,0,0],
           [0,3,0,1,0,0]];
  attacks = [[2, 1], [1, 3], [4, 2]];
  damagedOrSunk(board, attacks);

  Boats are placed either horizontally, vertically or diagonally on the board.
  0 represents a space not occupied by a boat.
  Digits 1-3 represent boats which vary in length 1-4 spaces long.
  There will always be at least 1 boat up to a maximum of 3 in any one game. 
  Boat sizes and board dimentions will vary from game to game.

  Scoring
  1 point for every whole boat sank.
  0.5 points for each boat hit at least once (not including boats that are sunk).
  -1 point for each whole boat that was not hit at least once.

  Sunk or Damaged
  sunk = all boats that are sunk
  damaged = all boats that have been hit at least once but not sunk
  notTouched/not_touched = all boats that have not been hit at least once

  Output for example above
  { sunk: 0, damaged: 2 , notTouched: 1, points: 0 }

*/


function get_resut(before_attacks,after_attacks) {
	let result={"sunk":0,"damaged":0,"notTouched":0,"points":0};
  	for(key in before_attacks) {
	  	if(!after_attacks[key]) {
	  		result.notTouched+=1;
	  		result.points-=1;
	  	}
	  	else if(before_attacks[key]==after_attacks[key]) {
	  		result.sunk+=1;
	  		result.points+=1;
	  	} 
	  	else if(before_attacks[key]>after_attacks[key]) {
	  		result.damaged+=1;
	  		result.points+=0.5;
	  	}
  	}
  	return result;
}

function damagedOrSunk (board, attacks){		
  let before_attacks={}, after_attacks={};
  for (let i=0;i<board.length;i++) {
  		for(let j=0;j<board[i].length;j++) {
  			if(before_attacks[board[i][j]]) before_attacks[board[i][j]]+=1;
  			else if(board[i][j]!=0) before_attacks[board[i][j]]=1; 
  		}
  }
  for (let i=0;i<attacks.length;i++) {
  	let value=board[board.length-attacks[i][1]][attacks[i][0]-1];
	  if(after_attacks[value]) after_attacks[value]+=1;
  	else after_attacks[value]=1;
  }
  return get_resut(before_attacks,after_attacks);

}
