/*
All level functions..
*/

/*
Level 1: This function will generate two objects evil and devil in random
directions and then player has to click on evils and leaving heros alive
*/


var canvas;
var ctx;
var dots=[];

var dotXval=["10","20","50","100","230"];
var dotYval=["10","30","60","100","140"];


function dot(xcod,ycod,radius,value){
	 this.xcod=xcod;
	 this.ycod=ycod;
	 this.radius=radius;
	 this.val=value;
}

function create_dots(x,y,radius,value){
	//alert("heheh");
	ctx.beginPath();
	ctx.arc(x,y,radius,0,2*Math.PI,true);
	ctx.fillStyle="white";
	ctx.fill();
	//ctx.font = 'bold 5px Calibri';
    //ctx.textAlign = 'center';
    //ctx.textBaseline='middle';
    //ctx.fillStyle ="yellow";  
   //ctx.fillText(value, x, y); 
  //alert("hi");
}

canvas=document.getElementById('gameField');
  ctx=canvas.getContext('2d'); 
   var h=canvas.style.height;
   var w=canvas.style.width;
   var winW=window.innerWidth;
   var winH=window.innerHeight;
//create_dots(h/2+200, w/2+80,2,30);

/*$('#gameField').mousemove(function(e){
	console.log(e.layerX || 0);
})
*/
function  startLevel(){
   //alert("heyey");

//  canvas=document.getElementById('gameField');
  //ctx=canvas.getContext('2d');
    var dotRadius=10;
    var dotsCount=5;
  
    for (var i = 0; i <dotsCount; i++){
 
    	dots.push(new dot(dotXval[i],dotYval[i],dotRadius,i+1));

    }
    
    for (var j=0; j<dots.length; j++) { 
   create_dots(dots[j].xcod, dots[j].ycod,1,dots[j].val);
      //create_dots(500, 400,10,30);
    //create_dots(290,140,1,30);
    }


}

startLevel();
