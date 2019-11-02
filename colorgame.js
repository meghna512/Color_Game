console.log("scbmzbc");
var numSquares;
var colors= getRandomColors(6);

// var colors= ["rgb(255, 0, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 0, 255)",
// "rgb(255, 255, 0)",
// "rgb(255, 0, 255)",
// "rgb(0, 255, 255)"
// ];
var pickedColor= pickColor();
var colorDisplay= document.getElementById("colorDisplay");

var sq=  document.querySelectorAll(".square");
var message= document.getElementById("message");
var h1= document.querySelector("h1");
var resetBtn= document.querySelector("#resetBtn");
var easyBtn= document.querySelector("#easyBtn");
var hardBtn= document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){

	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors= getRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<sq.length;i++){
		if(colors[i]){
    sq[i].style.backgroundColor= colors[i];
	}else{
		sq[i].style.display="none";
	}

	}

});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colors= getRandomColors(numSquares);
	pickedColor= pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0; i<sq.length;i++){

    sq[i].style.backgroundColor= colors[i];
	sq[i].style.display="block";  //need to do this for last three only but doing it anyway for all.also w/o this last 3 wont display

	}

});




resetBtn.addEventListener("click", function(){
             message.textContent="";
			 resetBtn.textContent="New Colors";
		 colors=getRandomColors(6);
		 pickedColor= pickColor();
		 colorDisplay.textContent= pickedColor;
		 for(var i=0; i<=sq.length;i++){
	        sq[i].style.backgroundColor= colors[i];
	    }
	h1.style.backgroundColor= "#232323";

});

for(var i=0; i<=sq.length;i++){
	colorDisplay.textContent= pickedColor;
	sq[i].style.backgroundColor= colors[i];
	sq[i].addEventListener("click", function(){
     var clickedColor= this.style.backgroundColor;
  
     
     if(pickedColor===clickedColor){

     	message.textContent="You Won";
     	resetBtn.textContent="Play Again";
     	for(var i=0; i<=sq.length;i++){
     		sq[i].style.backgroundColor= clickedColor;
     		h1.style.backgroundColor=clickedColor;
     	}

     }else{ message.textContent="Try Again!";
     	this.style.backgroundColor= "#232323";
     }
	});
}

function pickColor(){
	var random =Math.floor(Math.random()* colors.length);
	return colors[random];
}

function getRandomColors(num){
	console.log("scbmzbc");
	var arr=[];
	for (var i=0;i<num;i++){
		console.log("scbmzbc");
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	console.log("scbmzbc");
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);
    var rgb= "rgb("+ r+"," + " " + g + "," + " " + b+ ")";
    return rgb;
}