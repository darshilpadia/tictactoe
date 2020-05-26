let sign="0";
let turn=document.getElementById("player");
let c=0;
function printtext(index)
{
	let boxid = document.getElementById("r"+index);
	if(boxid.innerText==""){
		boxid.innerText=sign;
			winlogic(sign);
			changesign();
			turn.innerText=sign+"'s turn";
			c++;
	}
}
function changesign()
{
	if(sign=="0")
		sign="X";
	else
		sign="0";
}
function getbox(index)
{
	return document.getElementById("r"+index).innerText;
}
function checkboxs(a,b,c,m)
{
	if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
		return true;
	else
		return false;
}
function winlogic(sign)
{
	if(checkboxs(1,2,3,sign) || checkboxs(4,5,6,sign) || checkboxs(7,8,9,sign) || checkboxs(1,5,9,sign) || checkboxs(3,5,7,sign) || checkboxs(1,4,7,sign) || checkboxs(2,5,8,sign) || checkboxs(3,6,9,sign))
	{
		confirm(sign+" is winner");
		//turn.innerText=sign+" won the match";
		newgame();
	}
	if(document.getElementById("r1").innerText!="" && document.getElementById("r2").innerText!="" && document.getElementById("r3").innerText!="" && document.getElementById("r4").innerText!="" && document.getElementById("r5").innerText!="" && document.getElementById("r6").innerText!="" && document.getElementById("r7").innerText!="" && document.getElementById("r8").innerText!="" && document.getElementById("r9").innerText!="")
	{
		alert("Match Draw");
		newgame();
	}
}
function newgame()
{
	for(let i=1;i<=9;i++)
	{
		document.getElementById("r"+i).innerText="";
	}
}