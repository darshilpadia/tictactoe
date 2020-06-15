const wincomb=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
let hplayer="0";
let aiplayer="X";
let c=0,f=0,t=0,temp=0;
let scores = {
	"X":1,"0":-1,"tie":0
};
class game{
newgame()
{
	hplayer="0";
	c=0;
	f=0;
	temp=0;
	document.getElementById("endgame").style.visibility = "hidden";
	document.getElementById("player").innerText=hplayer+"'s turn";

	for(let i=1;i<=9;i++)
	{
			document.getElementById("r"+i).innerText=null;
		
	}
}
showtable()
{
	document.getElementById("t3").style.visibility = "hidden";
	document.getElementById("t1").style.visibility = "visible";
	document.getElementById("t2").style.visibility = "hidden";
	play.newgame();	
}
printtext(index)
{
	let boxid = document.getElementById("r"+index);
	if(boxid.innerText==""){
		boxid.innerText=hplayer;
		c++;
		if(c>=5)
		{
			play.winner(hplayer);
			
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
emptybox()
{
	let boxindexs=[]
	for(let k=11;k<20;k++)
	{
		if(document.getElementById("r"+k).innerText == "")
		{
			boxindexs.push(k);
		}
			
	}
	return boxindexs;
}
winner(hplayer)
	{
		for(let i=0;i<8;i++)
		{
			if(play.getbox(wincomb[i][0])==hplayer && play.getbox(wincomb[i][1])==hplayer && play.getbox(wincomb[i][2])==hplayer)
			{
				document.getElementById("t1").style.visibility = "hidden";
				document.getElementById("endgame").style.visibility = "visible";
				document.getElementById("endgame").innerText=hplayer+" win!";
				temp=1;
				break;
			}
			
		}
		if(temp==0 && c==9)
		{
					document.getElementById("t1").style.visibility = "hidden";
					document.getElementById("endgame").style.visibility = "visible";
					document.getElementById("endgame").innerText="Tie Game";
		}
	}

}


class singleplayer
{
/*msg()
	{
		document.getElementById("endgame").style.visibility = "visible";
		document.getElementById("endgame").innerText="work in progress,you can play Multiplayer";
		document.getElementById("t1").style.visibility = "hidden";
		document.getElementById("player").style.visibility = "hidden";
		
	}*/
newgame()
{
	hplayer="0";
	c=0;
	f=0;
	temp=0;
	document.getElementById("endgame").style.visibility = "hidden";
	document.getElementById("player").innerText=hplayer+"'s turn";

	for(let i=1;i<=9;i++)
	{
			document.getElementById("r1"+i).innerText=null;
		
	}
}
showtable()
{
	document.getElementById("t1").style.visibility = "hidden";
	document.getElementById("t2").style.visibility = "visible";
	document.getElementById("t3").style.visibility = "hidden";
	singleplay.newgame();	
}
huturn(index)
{
	let boxid = document.getElementById("r"+index);
	if(boxid.innerText=="")
	{
		boxid.innerText=hplayer;
		c++;
		if(c>=5)
		{
			singleplay.winner(hplayer);
		}
		if(temp==0)
			singleplay.aiturn();
	}
	
	
}
aiturn()
{
	let boxindexs=play.emptybox();
	//arr[Math.floor(Math.random() * arr.length)]
	document.getElementById("r"+boxindexs[Math.floor(Math.random() * boxindexs.length)]).innerText = aiplayer;
	c++;
	if(c>=5)
	{
			singleplay.winner(aiplayer);
	}
	
	
}
getbox(index)
{
	return document.getElementById("r1"+index).innerText;
}
winner(player)
	{
		for(let i=0;i<8;i++)
		{
			if(singleplay.getbox(wincomb[i][0])==player && singleplay.getbox(wincomb[i][1])==player && singleplay.getbox(wincomb[i][2])==player)
			{
				document.getElementById("t2").style.visibility = "hidden";
				document.getElementById("endgame").style.visibility = "visible";
				document.getElementById("endgame").innerText=player+" win!";
				temp=1;
				break;
			}
			
		}
		if(temp==0 && c==9)
		{
					document.getElementById("t2").style.visibility = "hidden";
					document.getElementById("endgame").style.visibility = "visible";
					document.getElementById("endgame").innerText="Tie Game";
					
		}
	}

}
/////////////////////////////////////////////////////////////////////////////
class smartplayer
{
newgame()
{
	hplayer="0";
	c=0;
	f=0;
	temp=0;
	document.getElementById("endgame").style.visibility = "hidden";
	document.getElementById("player").innerText=hplayer+"'s turn";

	for(let i=1;i<=9;i++)
	{
			document.getElementById("r2"+i).innerText=null;
		
	}
	//smartplay.bestmove();
}
showtable()
{
	document.getElementById("t1").style.visibility = "hidden";
	document.getElementById("t3").style.visibility = "visible";
	document.getElementById("t2").style.visibility = "hidden";
	smartplay.newgame();	
}
huturn(index)
{
	let boxid = document.getElementById("r"+index);
	if(boxid.innerText=="")
	{
		boxid.innerText=hplayer;
		c++;
		if(c>=5)
		{
			smartplay.winner(hplayer);
		}
		if(temp==0)
			smartplay.bestmove();
	}
	
	
}
getboard()
{
	let board = [];
	for(let k=21;k<30;k++)
	{
		board.push(document.getElementById("r"+k).innerText);
		
	}
	return board;
}
getbox(index)
{
	return document.getElementById("r2"+index).innerText;
}
equal(a,b,c)
{
	return smartplay.getbox(a) == smartplay.getbox(b) && smartplay.getbox(b) == smartplay.getbox(c) && smartplay.getbox(a)!="";
}
checkwinner()
{
	let win = null;
	for(let i=0;i<8;i++)
	{
		if(smartplay.equal(wincomb[i][0],wincomb[i][1],wincomb[i][2]))
			win=smartplay.getbox(wincomb[i][0]);
	}
	let op=0;
	for(let i=1;i<10;i++)
	{
		if(smartplay.getbox(i) == "")
			op++;
	}
	
	if(win == null && op==0)
	{
		return "tie";					
	}
	else
		return win;
}
bestmove()
{
	let bestScore = -Infinity;
	let move;
	for(let k=21;k<30;k++)
	{
		if(document.getElementById("r"+k).innerText == "")
		{
				document.getElementById("r"+k).innerText = aiplayer;
				let board = smartplay.getboard();
				console.log(board);
				let score = smartplay.minimax(board,0,false);
				document.getElementById("r"+k).innerText = "";
				if(score > bestScore)
				{
					bestScore = score;
					move = k;
				}

		}
			
	}
	document.getElementById("r"+move).innerHTML = aiplayer;
	c++;
	if(c>=5)
		smartplay.winner(aiplayer);
	
}
minimax(board,deapth,ismax)
{
	let result = smartplay.checkwinner();
	if(result !== null)
	{
		return scores[result];
	}	
	if(ismax)
	{
		let bestScore = -Infinity; 
		for(let k=21;k<30;k++)
		{
			if(document.getElementById("r"+k).innerText == "")
			{
				document.getElementById("r"+k).innerText = aiplayer;
				smartplay.getboard();
				let score = smartplay.minimax(board,deapth+1,false);
				document.getElementById("r"+k).innerText = "";
				if(score > bestScore)
				{
					bestScore = score;
				}
			}
		}
		return bestScore;
	}else
	{
		let bestScore = Infinity; 
		for(let k=21;k<30;k++)
		{
			if(document.getElementById("r"+k).innerText == "")
			{
				document.getElementById("r"+k).innerText = hplayer;
				smartplay.getboard();
				let score = smartplay.minimax(board,deapth+1,true);
				document.getElementById("r"+k).innerText = "";
				if(score < bestScore)
				{
					bestScore = score;
				}
			}
		}
		return bestScore;
		
	}
}

winner(player)
	{
		for(let i=0;i<8;i++)
		{
			if(smartplay.getbox(wincomb[i][0])==player && smartplay.getbox(wincomb[i][1])==player && smartplay.getbox(wincomb[i][2])==player)
			{
				document.getElementById("t3").style.visibility = "hidden";
				document.getElementById("endgame").style.visibility = "visible";
				document.getElementById("endgame").innerText=player+" win!";
				temp=1;
				break;
			}
			
		}
		if(temp==0 && c==9)
		{
					document.getElementById("t3").style.visibility = "hidden";
					document.getElementById("endgame").style.visibility = "visible";
					document.getElementById("endgame").innerText="Tie Game";
					
		}
	}

	


}







let play = new game();
let singleplay = new singleplayer();
let smartplay = new smartplayer();