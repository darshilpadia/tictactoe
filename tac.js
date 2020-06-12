const wincomb=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
let hplayer="0";
let aiplayer="X";
let c=0,f=0,t=0,temp=0;
class game{
newgame(id)
{
	hplayer="0";
	c=0;
	f=0;
	temp=0;
	document.getElementById("endgame").style.visibility = "hidden";
	document.getElementById("player").innerText=hplayer+"'s turn";

	for(let i=1;i<=9;i++)
	{
		if(id == "singleplayer")
			document.getElementById("r1"+i).innerText=null;
		else
			document.getElementById("r"+i).innerText=null;
		
	}
}
showtable(id)
{
	if(id == "multiplayer")
	{
		document.getElementById("t2").style.visibility = "hidden";
		document.getElementById("t1").style.visibility = "visible";
	}
	if(id == "singleplayer")
	{
		document.getElementById("t1").style.visibility = "hidden";
		document.getElementById("t2").style.visibility = "visible";
	}
	
	play.newgame(id);
	
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

/*class multiplayer extends game
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
}*/




class singleplayer extends game
{
/*msg()
	{
		document.getElementById("endgame").style.visibility = "visible";
		document.getElementById("endgame").innerText="work in progress,you can play Multiplayer";
		document.getElementById("t1").style.visibility = "hidden";
		document.getElementById("player").style.visibility = "hidden";
		
	}*/
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







let play = new game();
let singleplay = new singleplayer();