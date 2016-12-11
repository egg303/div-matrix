var quantity = 24;

$(document).ready(function(){
	makeGrid();
	//event handler for window resizing
	//updates the atom size
	$(window).on("resize", function(){
		updateAtomLength();
		setAtomSize();
	});

	hoverListener()

	//button functionality
	$("#newGrid").click(function(){
		quantity = +prompt("How many squares per side?");
		$("#container").empty();
		makeGrid();
		hoverListener();
	})

	$("#clearGrid").click(function(){
		$(".atom").css({"background-color": "#fff","opacity":"0"})
	});
});

function makeGrid(){
	updateAtomLength();

	$container = $("#container")
	//generate columns and fill them with atoms
	for(var i=0;i<quantity;i++){
		$container.append($("<div class='column' id='column"+i+"'></div>"));
	}
	for(var i=0;i<quantity;i++){
		$colunmi = $("#column"+i)
		for(var j=0; j<quantity;j++){
			$container.find($colunmi).append($("<div class='atom' data-x='"+i+"' data-y='"+j+"'></div>"));
		}
	}

	setAtomSize();
}

function updateAtomLength(){
	//calculate atom Size depending of window size and atom-quantity
	if($(window).height()<$(window).width())
		smallestSide = $(window).height()-80;
	else
		smallestSide = $(window).width()-40;
	atomLength = Math.floor(smallestSide/quantity);
	if(atomLength<4)
		atomLength=4;

	//set #container min-width
	$("#container").css("min-width",quantity*atomLength);
}

function setAtomSize(){
	$(".atom").width(atomLength);
	$(".atom").height(atomLength);
}

function hoverListener(){
	//hover effect
	$(".atom").hover(function(){
		$(this).css("background-color","#f50");
	},function(){
		var $this = $(this);
		$this.css("background-color","hsl("+Math.random()*30+",100%,50%)");
		$this.css("opacity", +$this.css("opacity")+0.1);
	});
	
}