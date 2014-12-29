
<html>
<head>
	<link rel="stylesheet" href="style.css"></link>
 
<body>
	<div id="main" >
<canvas id="canvas"></canvas>
</div>
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript">


window.onload=function() {


var canvas=document.getElementById('canvas'),
    ctx=canvas.getContext('2d'),
    w = window.innerWidth,
    h = document.body.offsetHeight;
    canvas.width=w;
    canvas.height=h;
    var ctr=0,
    c_i=0,    
    words=["We Need Swaraj","Play for Change","Aam Aadmi Party","5 saal Kejriwal","AAP for Change","Vote for Good","Arvind Kejriwal","Kejriwal Fir Se","We Need Swaraj","Play for Change","Aam Aadmi Party","5 saal Kejriwal","AAP for Change","Vote for Good","Arvind Kejriwal","Kejriwal Fir Se","We Need Swaraj","Play for Change","Aam Aadmi Party","5 saal Kejriwal","AAP for Change","Vote for Good","Arvind Kejriwal","Kejriwal Fir Se","We Need Swaraj","Play for Change","Aam Aadmi Party","5 saal Kejriwal","AAP for Change","Vote for Good","Arvind Kejriwal","Kejriwal Fir Se"],
    j=0;


 function box(x,y){
  this.x=x;
  this.y=y;
  this.xVelo=10+Math.random()*20;
  this.yVelo=1;
  this.width=500;
  this.height=500;

  this.r=Math.round(Math.random()*255);
  this.g=Math.round(Math.random()*255);
  this.b=Math.round(Math.random()*255);
  this.rgba = "rgba("+this.r+","+this.g+","+this.b+",1)";
  this.message=words[j];
   j++;

   
this.draw = function()
        {

          ctx.strokeStyle = this.rgba;
          ctx.strokeRect(this.x,this.y,this.width,this.height);
          
          ctx.font = 'bold 50px Calibri';
          ctx.textAlign = 'center';
          ctx.textBaseline='middle';
          ctx.fillStyle =this.rgba;  
          ctx.fillText(this.message, this.x+this.width/2, this.y+this.height/2); 


           ctr++;
           if(ctr>7000){
            clearInterval(timer1);

          ctx.font = 'bold 50px Calibri';
          ctx.textAlign = 'center';
          ctx.textBaseline='middle';
          ctx.fillStyle ="white";  
          ctx.fillText("Vote For Honest Leaders", 400, 400);
          ctx.fillText("Vote For Kejriwal", 600, 30);
          ctx.fillText("Vote For Delhi", 1000, 400); 
          
          ctx.strokeStyle="rgba(200,56,78,0.4)";
          ctx.strokeRect(550,200,100,60);
          ctx.font = 'bold 20px Calibri';
          ctx.textAlign = 'center';
          ctx.textBaseline='middle';
          ctx.fillStyle ="green";  
          ctx.fillText("Lets Play !", 600, 230);


}
          this.update();

        }
        
        
        this.update = function()
        {
              if(this.x < 0) {
                 this.x = 0;     
                 this.xVelo *= -1;          
             }
          

          if(this.x > w - this.width)
          {
              this.x = w - this.width;    
              this.xVelo *= -5; 
          }
          

          if(this.y < 0) {
            this.y = 0;     
            this.yVelo *= -1; 
          }
          
          
          if(this.y < h - this.height) 
            this.yVelo += .25;
          
          
          if(this.y > h - this.height)
          {
          
              //this.xVelo *= .5
              this.yVelo *= .5
              
              this.y = h - this.height;     
              this.yVelo *= -2; 
          }


          this.x += this.xVelo/5;
          this.y += this.yVelo/3;
        }
      }
      

      var boxes = [];
      
      
      function draw()
      {
      
        ctx.globalCompositeOperation = "source-over";
        ctx.fillStyle = "rgba(0,0,0,0.5)"
        ctx.fillRect(0,0,w,h);
        
        ctx.globalCompositeOperation = "lighter"
        
       
        for(i=0; i < boxes.length; i++)
          boxes[i].draw();
        
        update();
      }
      
      
      function update()
      {
      
        for(i=0; i < boxes.length; i++)
          boxes[i].update();
      }
      
      
     var timer1= setInterval(function(){
        boxes.push( new box(0,0))
      },1000);
      
      
    var timer= setInterval(draw,30);


   canvas.addEventListener("click",play_function);
   
   function play_function(e){
    button_x=e.pageX;
    button_y=e.pageY;
    if(button_x<650 && button_x>500 && button_y<260 && button_y >200)
      window.location="levels.php"; 
}

}

</script>



</body>

</head>