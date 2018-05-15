	var counti = 0;
	var countj= 0;
	var keycode = 0;
	var iter = 0;
	var score = 0;

function insert(){
	checkGameOver();
	var math = $("#" + (Math.floor(Math.random() * 16)));
	while(math.attr("value") != '0') math = $("#" + (Math.floor(Math.random() * 16)));
	setTimeout(function(){
		math.text("2")
		math.attr("value", "2");
	}, 300);
	checkGameOver();
}

function reload(){
	counti = 0;
	$("#score").html("SCORE<br>0")
	while(counti < 16){
		$("#" + counti).attr("value", "0");
		$("#" + counti).html("");
		counti++;
	}
	counti = 0;
}

function checkRight(){
	var i = 15;
	var j = i - 1;
	while(i > 0){
		j = i - 1;
		if(($("#" + i).attr("value") == $("#" + j).attr("value") && i != '0' && i != '4' && i != '8' && i != '12' && $("#" + i).attr("value") != '0') || ($("#" + i).attr("value") == '0' && $("#" + j).attr("value") != '0' && i != '0' && i != '4' && i != '8' && i != '12')) return true;
		i--;
	}
	return false;
}

function checkLeft(){
	var i = 0;
	var j = i + 1;
	while(i < 15){
		j = i + 1;
		if(($("#" + i).attr("value") == $("#" + j).attr("value") && i != '3' && i != '7' && i != '11' && $("#" + i).attr("value") != '0') || ($("#" + i).attr("value") == '0' && $("#" + j).attr("value") != '0' && i != '3' && i != '7' && i != '11')) return true;
		i++;
	}
	return false;
}

function checkUp(){
	var i = 0;
	var j = i + 4;
	while(i < 15){
		j = i + 4;
		if(($("#" + i).attr("value") == $("#" + j).attr("value") && i != '12' && i != '13' && i != '14' && $("#" + i).attr("value") != '0') || ($("#" + i).attr("value") == '0' && $("#" + j).attr("value") != '0' && i != '12' && i != '13' && i != '14')) return true;
		i++;
	}
	return false;
}

function checkDown(){
	var i = 15;
	var j = i - 4;
	while(i > 0){
		j = i - 4;
		if(($("#" + i).attr("value") == $("#" + j).attr("value") && i != '1' && i != '2' && i != '3' && $("#" + i).attr("value") != '0') || ($("#" + i).attr("value") == '0' && $("#" + j).attr("value") != '0' && i != '1' && i != '2' && i != '3')) return true;
		i--;
	}
	return false;
}

function checkGameOver(){
	var i = 0;
	var j = i + 1;
	var XisOk = false;
	var YisOk = false;
	while(i < 15)
	{
		if($("#" + i).attr("value") == $("#" + j).attr("value") && (i != '3' && i != '7' && i != '11' && i != '15') || $("#" + i).attr("value") == '0' || $("#" + j).attr("value") == '0') XisOk = true;
		i++;
		j = i + 1;
	}
	var i = 0;
	var j = i + 4;
	while(i < 15)
	{
		if($("#" + i).attr("value") == $("#" + j).attr("value") && (i != '12' && i != '13' && i != '14') || $("#" + i).attr("value") == '0' || $("#" + j).attr("#" + j)) YisOk = true;
		i++;
		j = i + 4;
	}
	if(XisOk == false && YisOk == false)
	{
		alert("GAME OVER!");
		window.location("index.html");
	}
}

function moveLeft()
{
	while(counti < 16)
	{
		countj= counti+1;
		if($("#" + counti.toString()).attr("value") == '0')
		{
			while($("#" + countj.toString()).attr("value") == '0' && (countj != '3' && countj != '7' && countj != '11' && countj != '15')){ countj++;}
			if ($("#" + countj.toString()).attr("value") != '0')
			{
				$("#" + counti).html($("#" + countj).text());
				$("#" + counti).attr("value", $("#" + counti).text());
				$("#" + countj).text("");					
				$("#" + countj).attr("value", "0");
			}
			else countj++;
		}
		counti++;
		if(counti == '11' || counti == '3' || counti == '7' || counti == '15') counti++;
	}
	counti = 0;
	countj = 0;
}

function moveRight()
{
	counti = 15
	while(counti >= 0)
	{
		countj= counti-1;
		if($("#" + counti.toString()).attr("value") == '0')
		{
			while($("#" + countj.toString()).attr("value") == '0' && (countj != '0' && countj != '4' && countj != '8' && countj != '12')){ countj--;}
			if ($("#" + countj.toString()).attr("value") != '0')
			{
				$("#" + counti).html($("#" + countj).text());
				$("#" + counti).attr("value", $("#" + counti).text());
				$("#" + countj).text("");					
				$("#" + countj).attr("value", "0");
			}
			else countj--;
		}
		counti--;
		if(counti == '8' || counti == '0' || counti == '4' || counti == '12') counti--;
	}
	counti = 0;
	countj = 0;
}

function moveUp()
{
	counti = 0;
	while(counti < 15)
	{
		countj= counti + 4;
		if($("#" + counti.toString()).attr("value") == '0')
		{
			while($("#" + countj.toString()).attr("value") == '0' && (countj != '12' && countj != '13' && countj != '14' && countj != '15'))
			{
				countj = countj + 4;
			}
			if ($("#" + countj.toString()).attr("value") != '0' && $("#" + counti.toString()).attr("value") == '0')
			{
				$("#" + counti).html($("#" + countj).text());
				$("#" + counti).attr("value", $("#" + counti).text());
				$("#" + countj).text("");
				$("#" + countj).attr("value", "0");
			}
			else countj = countj + 4;
		}
		counti = counti + 4;
		if(counti == '4') bool = false;
		if(counti == '12' || counti == '13' || counti == '14') counti = counti - 11;
	}
	counti = 0;
	countj = 0;
}

function moveDown()
{
	counti = 15;
	while(counti > 0)
	{
		countj= counti - 4;
		if($("#" + counti.toString()).attr("value") == '0')
		{
			while($("#" + countj.toString()).attr("value") == '0' && (countj != '0' && countj != '1' && countj != '2' && countj != '3'))
			{
				countj = countj - 4;
			}
			if ($("#" + countj.toString()).attr("value") != '0' && $("#" + counti.toString()).attr("value") == '0')
			{
				$("#" + counti).html($("#" + countj).text());
				$("#" + counti).attr("value", $("#" + counti).text());
				$("#" + countj).text("");
				$("#" + countj).attr("value", "0");
			}
			else countj = countj - 4;
		}
		counti = counti - 4;
		if(counti == '1' || counti == '2' || counti == '3') counti = counti + 11;
	}
	counti = 0;
	countj = 0;
}

function checkNextLeft()
{
	moveLeft();
	counti = 0; 
	while(counti < 16)
	{
		countj = counti + 1;
		if(($("#" + counti).attr("value")) != "0" && $("#" + counti).attr("value") == $("#" + countj).attr("value"))
		{
			$("#" + counti).html($("#" + counti).text() * 2);
			$("#" + counti).attr("value", $("#" + counti).text());
			$("#" + countj).text("");
			$("#" + countj).attr("value", "0");
			score = score + parseInt($("#" + counti).html());
			$("#score").html("SCORE<br>" + score.toString());
		}
		counti++;
	}
}
function checkNextRight()
{
	moveRight();
	counti = 15;
	while(counti >= 0)
	{
		countj = counti - 1;
		if(($("#" + counti).attr("value")) != "0" && $("#" + counti).attr("value") == $("#" + countj).attr("value"))
		{
			$("#" + counti).html($("#" + counti).text() * 2);
			$("#" + counti).attr("value", $("#" + counti).text());
			$("#" + countj).text("");
			$("#" + countj).attr("value", "0");
			score = score + parseInt($("#" + counti).html());
			$("#score").html("SCORE<br>" + score.toString());
				
		}
		counti--;
	}
}

function checkNextUp()
{
	moveUp();
	counti = 0;
	while(counti < 16)
	{
		countj = counti + 4;
		if(($("#" + counti).attr("value")) != "0" && $("#" + counti).attr("value") == $("#" + countj).attr("value"))
		{
			$("#" + counti).html($("#" + counti).text() * 2);
			$("#" + counti).attr("value", $("#" + counti).text());
			$("#" + countj).text("");
			$("#" + countj).attr("value", "0");
			score = score + parseInt($("#" + counti).html());
			$("#score").html("SCORE<br>" + score.toString());
		}
		counti++;
	}
}

function checkNextDown()
{
	moveDown();
	counti = 15;
	while(counti >= 0)
	{
		countj = counti - 4;
		if(($("#" + counti).attr("value")) != "0" && $("#" + counti).attr("value") == $("#" + countj).attr("value"))
		{
			$("#" + counti).html($("#" + counti).text() * 2);
			$("#" + counti).attr("value", $("#" + counti).text());
			$("#" + countj).text("");
			$("#" + countj).attr("value", "0");
			score = score + parseInt($("#" + counti).html());
			$("#score").html("SCORE<br>" + score.toString());
			
		}
		counti--;
	}
}

$(document).ready(function()
{
	insert();
	insert();
	$(".buton").click(function(){
		reload();
		insert();
		insert();
	});
	$(document).keydown(function(event)
	{
		var keycode = (event.keycode ? event.keycode : event.which);
		if(keycode == 37 && checkLeft() == true)
		{
		checkNextLeft();
		moveLeft();
		insert();
		}
		if(keycode == 39 && checkRight() == true)
		{
		checkNextRight();
		moveRight();
		insert();
		}
		if(keycode == 38 && checkUp() == true)
		{
		checkNextUp();
		moveUp();
		insert();
		}
		if(keycode == 40 && checkDown() == true)
		{
		checkNextDown();
		moveDown();
		insert();
		}
	});
});

