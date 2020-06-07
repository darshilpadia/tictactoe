const wincomb=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
let hplayer;
let c=0,f=0,t=0;
class game{
newgame()
{
	hplayer="0";
	c=0;
	f=0;
	document.getElementById("endgame").style.visibility = "hidden";
	document.getElementById("player").innerText=hplayer+"'s turn";

	for(let i=1;i<=9;i++)
	{
		document.getElementById("r"+i).innerText=null;
	}
}
showtable()
{
	document.getElementById("t1").style.visibility = "visible";
	play.newgame()
	
}
printtext(index)
{
	let boxid = document.getElementById("r"+index);
	if(boxid.innerText==""){
		boxid.innerText=hplayer;
		c++;
		if(c>=5)
		{
			multiplay.winner(hplayer);
			
		}
		play.changesign();
		document.getElementById("player").innerText=hplayer+"'s turn";
	}
}
changesign()
{
	if(hplayer=="0")
		hplayer="X";
	else
		hplayer="0";
}
getbox(index)
{
	return document.getElementById("r"+index).innerText;
}

}

class multiplayer extends game
{
	winner(hplayer)
	{
		for(let i=0;i<8;i++)
		{
			if(super.getbox(wincomb[i][0])==hplayer && super.getbox(wincomb[i][1])==hplayer && super.getbox(wincomb[i][2])==hplayer)
			{
				document.getElementById("t1").style.visibility = "hidden";
				document.getElementById("endgame").style.visibility = "visible";
				document.getElementById("endgame").innerText=hplayer+" win!";
				break;	
			}
			else if(c==9)
			{	
				document.getElementById("t1").style.visibility = "hidden";
				document.getElementById("endgame").style.visibility = "visible";
				document.getElementById("endgame").innerText="Tie Game";
			}
				
		}
	}
}
class singleplayer extends game
{
	msg()
	{
		document.getElementById("endgame").style.visibility = "visible";
		document.getElementById("endgame").innerText="work in progress,you can play Multiplayer";
		
	}
}
let play = new game();
let multiplay = new multiplayer();
let singleplay = new singleplayer();