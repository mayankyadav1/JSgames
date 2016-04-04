var buttonn=[];
var marked=[];
var win_ary=[];
var ary_full=true;
var win_p1=false;
var win_p2=false;
var turn='p';
for(var i=1;i<10;i++){
	buttonn[i]=document.getElementById("canvas"+i);
	marked[i]=false;
}
function my_fn(i){
	if(marked[i]==false && win_p1 == false && win_p2==false)
	{
	marked[i]=true;
	buttonn[i].style.opacity=0.7;
	buttonn[i].style.Transform="rotateY(180deg)";
    buttonn[i].style.webkitTransform="rotateY(180deg) ";
	if(turn == 'p'&& win_p1==false && win_p2==false){
	var ctx = buttonn[i].getContext("2d");
    ctx.strokeStyle="green";
	ctx.lineWidth=10;
	ctx.moveTo(0,0);
	ctx.lineTo(300,150);
    ctx.moveTo(300,0);
    ctx.lineTo(0,150);
	ctx.stroke();
	win_ary[i]='x';
	turn ='c';
	win();
	}
	else if(turn == 'c' && win_p1==false && win_p2==false){
	var ctx = buttonn[i].getContext("2d");
	ctx.lineWidth=10;
    ctx.beginPath();
    ctx.arc(140,75,50,0,2*Math.PI);
    ctx.stroke();
	win_ary[i]='o';
	turn ='p';
	win();
	}
	}
	for(var i=1;i<10;i++){
		if(marked[i]==false)
		{
			ary_full=false;
			break;
		}
	}
	if(ary_full==true && win_p1==false && win_p2==false){
		alert("game draw!");
	}
	ary_full=true;
}
function mark(a,b,c){
   //buttonn[a].style.border = "1px dotted black";
   //buttonn[b].style.border = "1px dotted black";
   //buttonn[c].style.border = "1px dotted black";
   buttonn[a].style.backgroundColor = "lightgreen";
   buttonn[b].style.backgroundColor = "lightgreen";
   buttonn[c].style.backgroundColor = "lightgreen";
}
function win(){
	        if(win_ary[1]=='o'&&win_ary[2]=='o'&&win_ary[3]=='o')
			{ alert("player 2 Wins!");win_p2=true;mark(1,2,3);}
		    else if(win_ary[4]=='o'&&win_ary[5]=='o'&&win_ary[6]=='o')
			{ alert("player 2 Wins!");win_p2=true;mark(4,5,6);}
			else if(win_ary[7]=='o'&&win_ary[8]=='o'&&win_ary[9]=='o')
			{alert("player 2 Wins!");win_p2=true;mark(7,8,9);}
			else if(win_ary[1]=='o'&&win_ary[5]=='o'&&win_ary[9]=='0')
			{	alert("player 2 wins!");win_p2=true;mark(1,5,9);}
			else if(win_ary[3]=='o'&&win_ary[5]=='o'&&win_ary[7]=='o')
			{	alert("player 2 wins!");win_p2=true;mark(3,5,7);}
	        else if(win_ary[1]=='o'&&win_ary[4]=='o'&&win_ary[7]=='o')
			{	alert("player 2 wins!");win_p2=true;mark(1,4,7);}
		    else if(win_ary[2]=='o'&&win_ary[5]=='o'&&win_ary[8]=='o')
			{	alert("player 2 wins!");win_p2=true;mark(2,5,8);}
		    else if(win_ary[3]=='o'&&win_ary[6]=='o'&&win_ary[9]=='o')
			{	alert("player 2 wins!");win_p2=true;mark(3,6,9);}
			else{
				if(win_ary[1]=='x'&&win_ary[2]=='x'&&win_ary[3]=='x')
				{alert("player 1 Wins!");win_p1=true;mark(1,2,3);}
		        else if(win_ary[4]=='x'&&win_ary[5]=='x'&&win_ary[6]=='x')
				{  alert("player 1 Wins!");win_p1=true;mark(4,5,6);}
	            else if(win_ary[7]=='x'&&win_ary[8]=='x'&&win_ary[9]=='x')
				{   alert("player 1 Wins!");win_p1=true;mark(7,8,9);}
			    else if(win_ary[1]=='x'&&win_ary[5]=='x'&&win_ary[9]=='x')
				{   alert("player 1 wins!");win_p1=true;mark(1,5,9);}
			    else if(win_ary[3]=='x'&&win_ary[5]=='x'&&win_ary[7]=='x')
				{  alert("player 1 wins!");win_p1=true;mark(3,5,7);}
			    else if(win_ary[1]=='x'&&win_ary[4]=='x'&&win_ary[7]=='x')
			    {	alert("player 1 wins!");win_p1=true;mark(1,4,7);}
		        else if(win_ary[2]=='x'&&win_ary[5]=='x'&&win_ary[8]=='x')
			    {	alert("player 1 wins!");win_p1=true;mark(2,5,8);}
		        else if(win_ary[3]=='x'&&win_ary[6]=='x'&&win_ary[9]=='x')
			    {	alert("player 1 wins!");win_p1s=true;mark(3,6,9);}
			    }
			
} 