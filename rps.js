function rps(selection){
	var comp= Math.random();
	var choice= selection;
	//document.getElementById("selection").innerHTML= "choice";
	//values: rock <=.33
	//		  .33< paper <= .66
	//        scissors > .66
	if(selection == "rock")
		if (comp <= .33) { document.getElementById("selection").innerHTML="Its a tie";}
		else if(comp>.33 && comp <= .66 ){document.getElementById("selection").innerHTML="You win";}
			else{ document.getElementById("selection").innerHTML="Uh oh comuter got the better of you";}
	if (selection== "paper") {
		if (comp <= .33) { document.getElementById("selection").innerHTML="You covered the rock!!";}
		else if(comp>.33 && comp <= .66 ){document.getElementById("selection").innerHTML="Paper on paper. TIE!";}
			else{ document.getElementById("selection").innerHTML="Snip snip! scissors got ya!";}
	}
	if (selection== "scissors") {
		if (comp <= .33) { document.getElementById("selection").innerHTML="Rock smash! Sorry";}
		else if(comp>.33 && comp <= .66 ){document.getElementById("selection").innerHTML="Cutting it up! Winner!";}
			else{document.getElementById("selection").innerHTML="On guard! Scissor fight. Tie";}
	}
}
