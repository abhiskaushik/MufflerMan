/*
All level functions...


*/



window.onload=function() {

  var m_img=new Image();
 //   m_img.src='mn.png';

	var canvas=document.getElementById('canvas');
	var ctx=canvas.getContext('2d');

var w = window.innerWidth;
var h = document.body.offsetHeight;
canvas.width=w;
canvas.height=h;


//var w=canvas.style.width;
//var h=canvas.style.height;

	/*var w=window.innerWidth;
  canvas.width=w;
	var h=window.innerHeight;
  canvas.height=h;
*/

//var w=canvas.width;
//var h=canvas.height;

   var ctr=0;
   var c_i=0;    

   var words=["We Need Swaraj","Play for Change","Aam Aadmi Party","5 saal Kejriwal","AAP for Change","Vote for Good","Arvind Kejriwal","Kejriwal Fir Se","We Need Swaraj","Play for Change","Aam Aadmi Party","5 saal Kejriwal","AAP for Change","Vote for Good","Arvind Kejriwal","Kejriwal Fir Se","We Need Swaraj","Play for Change","Aam Aadmi Party","5 saal Kejriwal","AAP for Change","Vote for Good","Arvind Kejriwal","Kejriwal Fir Se","We Need Swaraj","Play for Change","Aam Aadmi Party","5 saal Kejriwal","AAP for Change","Vote for Good","Arvind Kejriwal","Kejriwal Fir Se"];

   var j=0;


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
      start_levels(); 
}

function start_levels(){
  ctx.clearRect(0,0,w,h);
  clearInterval(timer);
  canvas.removeEventListener('click',play_function);
  
  var gameNames=['Sketch 4 MM','AAP Ki Team','AAP Office','Clean India','MM & RJ','Awards','Lokpal Bill','Swaraj Bill','D Culprit ?','Free Water','Delhi Dialogue','Save Women','Power By 2','Govt. Schools','MM & Maths','Magic Delhi','5SaalKejriwal','49 plus'
  ,'AAP ki Education','Our M.L.A','Our M.P','MM & IQ','Flying Wings','Volunteers','Reservation','Make In Delhi','3d Vision','MM & Logic','Hospitals','The Yamuna','Scams','Brave PB','Sisodia Eyes','Action SB','FDI','Run 4 AAP','Best SKills','AAP 4 India',
  'MM & Circle','Revenge','49 Days','Sting Operation','R.T.I','Donate AAP','YY & Wits','HardWork','Get 2 Door','MM & Sticks','D Broom'];
   //list of all games...
  var xpos=10;
  //var ypos=10;
for(var g_n=0;g_n<10;g_n++){
   ctx.strokeStyle="white";
    ctx.strokeRect(xpos,10,110,80);
    ctx.fillStyle='red';
   ctx.font='16px bold cursive';
   ctx.fillText(g_n+1,xpos+55,20);
   ctx.fillText(gameNames[g_n],xpos+55,50);
   xpos+=130;
}
xpos=10;
for(var g_n=10;g_n<20;g_n++){
   ctx.strokeStyle="white";
   ctx.strokeRect(xpos,110,110,80);
    ctx.fillStyle='red';
   // ctx.font='13px bold cursive';
   ctx.fillText(g_n+1,xpos+55,120);
   ctx.fillText(gameNames[g_n],xpos+55,150);
   xpos+=130;
}

xpos=10;
for(var g_n=20;g_n<30;g_n++){
   ctx.strokeStyle="white";
   ctx.strokeRect(xpos,210,110,80);
    ctx.fillStyle='red';
    ctx.fillText(g_n+1,xpos+55,220);
   ctx.fillText(gameNames[g_n],xpos+55,250);
   xpos+=130;
}

xpos=10;
for(var g_n=30;g_n<40;g_n++){
   ctx.strokeStyle="white";
   ctx.strokeRect(xpos,310,110,80);
   ctx.fillStyle='red';
   ctx.fillText(g_n+1,xpos+55,320);
   ctx.fillText(gameNames[g_n],xpos+55,350);
   xpos+=130;
}

xpos=10;
for(var g_n=40;g_n<50;g_n++){
   ctx.strokeStyle="white";
   ctx.strokeRect(xpos,410,110,80);
   ctx.fillStyle='red';
   ctx.fillText(g_n+1,xpos+55,420);
   ctx.fillText(gameNames[g_n],xpos+55,450);
   xpos+=130;
}
  level1();
}

var level1=function(){

        ctx.clearRect(0,0,w,h);




          ctx.font = '13px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline='middle';
          ctx.fillStyle ="white";  
          ctx.fillText("MufflerMan wants you to sketch something.. Please do",500,10);




  var dots=[];


var dotXval=["500","250","150","720","850"];
var dotYval=["100","250","300","250","300"];


function dot(xcod,ycod,radius,value){
   this.xcod=xcod;
   this.ycod=ycod;
   this.radius=radius;
   this.val=value;
}

function create_dots(x,y,radius,value){

  ctx.beginPath();
  ctx.arc(x,y,radius,0,2*Math.PI,true);
  ctx.fillStyle="white";
  ctx.fill();
  //adding numbers..
  ctx.font = '10px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline='middle';
  ctx.fillStyle ="white";  
  ctx.fillText(value,x-10,y-10);

}


function  startLevel(){

    var dotRadius=10;
    var dotsCount=5;
  
    for (var i = 0; i <dotsCount; i++){
 
      dots.push(new dot(dotXval[i],dotYval[i],dotRadius,i+1));

    }
    
    for (var _j=0; _j<dots.length; _j++) { 
   create_dots(dots[_j].xcod, dots[_j].ycod,5,dots[_j].val);

    }


}

startLevel();

var mouse={x:0,y:0};


var drag4sketch=function(e){
 
 mouse.x=e.pageX-this.offsetLeft;
 mouse.y=e.pageY-this.offsetTop;


}


canvas.addEventListener('mousemove',drag4sketch);



ctx.lineWidth = 6;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = 'red';

canvas.addEventListener('mousedown',function(e){
ctx.beginPath();
ctx.moveTo(mouse.x,mouse.y);

canvas.addEventListener('mousemove',sketch,false);

},false);

 
canvas.addEventListener('mouseup',function(){
 
canvas.removeEventListener('mousemove',sketch,false);

},false);



var sketch=function(){

ctx.lineTo(mouse.x,mouse.y);
ctx.stroke();
}

var time=0;

var clock=function(){
   ctx.clearRect(1000,20,1200,200);
   ctx.font = '20px Arial';

   ctx.fillStyle ="white";  
   ctx.fillText(time++ + ' sec',1120,30);
  
  if(time>10){
    clearInterval(setClock1);
    ctx.clearRect(0,0,w,h);


    canvas.removeEventListener('mousemove',sketch);
    canvas.removeEventListener('mouseup',level1);
    canvas.removeEventListener('mousedown',level1); 
    canvas.removeEventListener('mousemove',level1);
    canvas.removeEventListener('mouseup',sketch);
    canvas.removeEventListener('mousedown',sketch); 
    canvas.removeEventListener('mousemove',sketch);
    canvas.removeEventListener('mousemove',drag4sketch);  


     level2();


} 

}

var setClock1=setInterval(clock,1000);




}



function level2(){

var m={x:0,y:0};


var rect_cordsX=["100","300","500","700","900","1100"];
var rect_cordsY=["50","160","370","480"];
var hints=["Trader","Businessman","Student","Teacher","Writer","Scientist","Politicion","MufflerMan","Auto Driver","Police","Doctor","Industrialist","Soldier","Musician","Cobbler","Social Worker","MufflerMan","Engineer","Advocate","Reporter","Editor","MufflerMan","Poet","Actor"];

          ctx.font = 'bold 13px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline='middle';
          ctx.fillStyle ="white";  
          ctx.fillText("MufflerMan wants you to find his companions..Your Luck! ",620,10);
           
          m_img.onload=function(){
            ctx.drawImage(m_img,618,260,60,100);

          }
           m_img.src='mn.png';


var hint_cards=[];

 var hint_card=function(x,y,hint){
     this.x=x;
     this.y=y;
     this.hint=hint;


 }


  for (var i = 0; i< rect_cordsX.length; i++) {
     
      for (var _j=0;_j<rect_cordsY.length;_j++){
        hint_cards.push(new hint_card(rect_cordsX[i],rect_cordsY[_j],hints[i*_j]));          

      }
   } 


      for (var k=0;k<hint_cards.length;k++){
        
          //ctx.rect(hint_cards[k].x,hint_cards[k].y,100,80);
          ctx.strokeStyle="white";
          //ctx.stroke();
          ctx.strokeRect(hint_cards[k].x,hint_cards[k].y,100,80);
          
          ctx.font = 'bold 15px Calibri';
          ctx.textAlign="center";
          ctx.textBaseline="middle";
          ctx.fillStyle="white";
          ctx.fillText(hints[k],parseInt(hint_cards[k].x)+50,parseInt(hint_cards[k].y)+40);          

   } 



function update_score(c_i,desg){

     ctx.font="bold 33px Cursive";
     ctx.fillStyle="lightblue";
     ctx.textAlign="center";
     ctx.fillText(c_i,645,240);
     ctx.fillText("Wow ! You Lucky Man!",285,300);
     ctx.fillText("This " + desg + " is another Kejriwal !"  ,985,300);
     

}

function update_bad_msg(bad_msg){
     ctx.font="bold 33px Cursive";
     ctx.fillStyle="red";
     ctx.textAlign="center";
     ctx.fillText(c_i,645,240);
     ctx.fillText("Sorry! Your Bad Luck!",285,300);
     ctx.fillText("This " + bad_msg + " is doubtfull to be Honest !",985,300); 

}


function click_hint_card(e){

  m.x=e.pageX-this.offsetLeft;
  m.y=e.pageY-this.offsetTop;
  


  if(m.x>100 && m.y>50 && m.x<200 && m.y<130){
     ctx.strokeStyle="red";
     ctx.strokeRect(120,70,60,40);
     update_bad_msg("Trader");

  }
  
  else if(m.x>300 && m.y>50 && m.x<400 && m.y<130){

      ctx.strokeStyle="red";
     ctx.strokeRect(320,70,60,40);
     update_bad_msg("Writer");    
  }
  else if(m.x>500 && m.y>50 && m.x<600 && m.y<130){
      ctx.strokeStyle="red";
     ctx.strokeRect(520,70,60,40);
     update_bad_msg("Auto Driver");
  }
  else if(m.x>700 && m.y>50 && m.x<800 && m.y<130){
       ctx.strokeStyle="red";
     ctx.strokeRect(720,70,60,40);
     update_bad_msg("Soldier");  
  
  }
  else if(m.x>900 && m.y>50 && m.x<1000 && m.y<130){
        ctx.strokeStyle="red";
     ctx.strokeRect(920,70,60,40);
     update_bad_msg("MufflerMan");
  }
  else if(m.x>1100 && m.y>50 && m.x<1200 && m.y<130){
     ctx.strokeStyle="green"; c_i++;
     ctx.strokeRect(1120,70,60,40);
     //ctx.clearRect(450,260,800,80);
       update_score(c_i,"Editor");
     /*ctx.font="bold 63px Cursive";
     ctx.fillStyle="lightblue";
     ctx.textAlign="center";
     ctx.fillText(c_i,650,230); */
     
  }
  else if(m.x>100 && m.y>160 && m.x<200 && m.y<240){
       ctx.strokeStyle="red";
     ctx.strokeRect(120,180,60,40);
     update_bad_msg("Businessman");

  }
  else if(m.x>300 && m.y>160 && m.x<400 && m.y<240){
       ctx.strokeStyle="green"; c_i++;
     ctx.strokeRect(320,180,60,40);
      update_score(c_i,"Scientist");
  }
  else if(m.x>500 && m.y>160 && m.x<600 && m.y<240){
        ctx.strokeStyle="red";
     ctx.strokeRect(520,180,60,40);
     update_bad_msg("Police");
  }
  
  else if(m.x>700 && m.y>160 && m.x<800 && m.y<240){
            ctx.strokeStyle="green"; c_i++;
     ctx.strokeRect(720,180,60,40);
      update_score(c_i,"Musician");
    }
  
  else if(m.x>900 && m.y>160 && m.x<1000 && m.y<240){
            ctx.strokeStyle="red";
     ctx.strokeRect(920,180,60,40);
     update_bad_msg("Engineer");
    }
  
  else if(m.x>1100 && m.y>160 && m.x<1200 && m.y<240){
           ctx.strokeStyle="red";
     ctx.strokeRect(1120,180,60,40);
     update_bad_msg("MufflerMan");
  }
  else if(m.x>100 && m.y>370 && m.x<200 && m.y<450){
          ctx.strokeStyle="green"; c_i++;
     ctx.strokeRect(120,390,60,40);
      update_score(c_i,"Student");
    }
  
  else if(m.x>300 && m.y>370 && m.x<400 && m.y<450){
              ctx.strokeStyle="red";
     ctx.strokeRect(320,390,60,40);
     update_bad_msg("Politicion");
    }
  
  else if(m.x>500 && m.y>370 && m.x<600 && m.y<450){
           ctx.strokeStyle="red";
     ctx.strokeRect(520,390,60,40);
     update_bad_msg("Doctor");
    }
  
  else if(m.x>700 && m.y>370 && m.x<800 && m.y<450){
           ctx.strokeStyle="green"; c_i++;
     ctx.strokeRect(720,390,60,40);
      update_score(c_i,"Cobbler");
    }
  
  else if(m.x>900 && m.y>370 && m.x<1000 && m.y<450){
          ctx.strokeStyle="red";
     ctx.strokeRect(920,390,60,40);
     update_bad_msg("Advocate");
    }
  
  else if(m.x>1100 && m.y>370 && m.x<1200 && m.y<450){
         ctx.strokeStyle="green";  c_i++;
     ctx.strokeRect(1120,390,60,40);
      update_score(c_i,"Poet");
    }
  
  else if(m.x>100 && m.y>480 && m.x<200 && m.y<560){
        ctx.strokeStyle="red";
     ctx.strokeRect(120,500,60,40);
     update_bad_msg("Teacher");
  }
  else if(m.x>300 && m.y>480 && m.x<400 && m.y<560){
          ctx.strokeStyle="red";
     ctx.strokeRect(320,500,60,40);
     update_bad_msg("MufflerMan");
    }
  
  else if(m.x>500 && m.y>480 && m.x<600 && m.y<560){
        ctx.strokeStyle="red";
     ctx.strokeRect(520,500,60,40);
     update_bad_msg("Industrialist");
  }
  else if(m.x>700 && m.y>480 && m.x<800 && m.y<560){
      ctx.strokeStyle="green"; c_i++;
     ctx.strokeRect(720,500,60,40);
      update_score(c_i,"Social Worker");
}
  
  else if(m.x>900 && m.y>480 && m.x<1000 && m.y<560){
       ctx.strokeStyle="red";
     ctx.strokeRect(920,500,60,40);
     update_bad_msg("Reporter");
   }
  
  else if(m.x>1100 && m.y>480 && m.x<1200 && m.y<560){
       ctx.strokeStyle="red";
     ctx.strokeRect(1120,500,60,40);
     update_bad_msg("Actor");
 }



}

var it_t=0;
var setTimer2=function(){
    ctx.clearRect(w/2-10,500,30,100);
    it_t++;
    
    ctx.fillStyle="Yellow";
    ctx.fillText(it_t,w/2,540);

    if(it_t>10){
      clearInterval(setClock2);
      ctx.clearRect(0,0,w,h);
      $("#canvas").off("click");
      level3();
     //clearInterval(setTimer2);
    }

    

}

var setClock2=setInterval(setTimer2,1000);
//clearInterval(setTimer2);




$("#canvas").unbind("click").click(click_hint_card);


}



function level3 (){

  //ctx.clearRect(0,0,w,h);
//create jhaaduwala object...

var gravity=2,
    veloX=2;
    key=[];
    xp=50;
    yp=300;
    veloY=2;


document.addEventListener("keydown",function(e){
   key[e.keyCode]=true;
});

document.addEventListener("keyup",function(e){
   key[e.keyCode]=false;
});    

var setTimer3=setInterval(updateMufflerManPos,10);

function updateMufflerManPos(){

  ctx.clearRect(0,0,w,h);
  
  ctx.beginPath();
  ctx.lineWidth='5';
  //for(var x=200;x<1200;x+=100){
     ctx.moveTo(200,100);
     ctx.lineTo(200,200);
     ctx.moveTo(200,300);
     ctx.lineTo(200,500);
     
     ctx.moveTo(300,100);
     ctx.lineTo(300,160);
     ctx.moveTo(300,250);
     ctx.lineTo(300,500);

     ctx.moveTo(500,100);
     ctx.lineTo(500,210);
     ctx.moveTo(500,290);
     ctx.lineTo(500,500);
     
     ctx.moveTo(600,100);
     ctx.lineTo(600,190);
     ctx.moveTo(600,260);
     ctx.lineTo(600,500);

     ctx.moveTo(800,100);
     ctx.lineTo(800,240);
     ctx.moveTo(800,320);
     ctx.lineTo(800,500);

     ctx.moveTo(900,100);
     ctx.lineTo(900,210);
     ctx.moveTo(900,280);
     ctx.lineTo(900,500);
  
     
     //ctx.moveTo(900,280);
     //ctx.lineTo(900,500);




  //}
  ctx.strokeStyle="white";
  ctx.stroke();
       
       ctx.beginPath();
     ctx.moveTo(1080,220);
     
     ctx.lineTo(1200,220);
     ctx.strokeStyle="orange";
     ctx.stroke();
     
     ctx.beginPath();
     ctx.moveTo(1200,220);
     ctx.lineTo(1200,340);
     ctx.strokeStyle="white";
     ctx.stroke();
     
     ctx.beginPath();
     ctx.moveTo(1200,340);
     ctx.lineTo(1080,340);
     ctx.strokeStyle="lightgreen";
     
     ctx.stroke();

     ctx.fillStyle="white";
     ctx.fillText("Vidhan Sabha",1140,280);

     ctx.beginPath();
     ctx.moveTo(100,220);
     
     ctx.lineTo(10,220);
     ctx.strokeStyle="orange";
     ctx.stroke();
     
     ctx.beginPath();
     ctx.moveTo(10,220);
     ctx.lineTo(10,340);
     ctx.strokeStyle="white";
     ctx.stroke();
     
     ctx.beginPath();
     ctx.moveTo(10,340);
     ctx.lineTo(100,340);
     ctx.strokeStyle="lightgreen";
     
     ctx.stroke();

     ctx.fillStyle="white";
     ctx.fillText("AAP Office",55,280);
   
     /*ctx.beginPath();
     ctx.moveTo(10,220);
     ctx.lineTo(10,10);
     ctx.lineTo(1260,10);
     ctx.lineTo(1260,530);
     ctx.lineTo(10,530);
     ctx.lineTo(10,340);
     ctx.lineWidth='0.5';
     ctx.strokeStyle="white";
     ctx.stroke();
*/



// xp+=veloX;

 if(key[32]==true)
  yp-=1;
 else if(key[32]==false)
  yp+=gravity;

   

  if(xp>=1200 ){
    if(veloX<7)veloX++;
    
    veloX*=-1;
    
  }

  if(xp<=10 ){
    if(veloX>0)veloX--;
    veloX*=-1;
    
  }
  


  if(xp>=200 && xp<=205 && yp<=200 && yp>=100){
     veloX*=-1;
     //ctx.fillStyle="red";
     //ctx.fillText("Gone",600,500);
  }
  
  if(xp>=200 && xp<=205 && yp<=500 && yp>=300){
       veloX*=-1;
       //ctx.fillStyle="red";
     //ctx.fillText("Gone",600,500); 
  }

    if(xp>=300 && xp<=305 && yp<=160 && yp>=100){
     veloX*=-1;

  }
  
  if(xp>=300 && xp<=305 && yp<=500 && yp>=250){
       veloX*=-1;

  }
  
  if(xp>=500 && xp<=505 && yp<=210 && yp>=100){
     veloX*=-1;

  }
  
  if(xp>=500 && xp<=505 && yp<=500 && yp>=290){
       veloX*=-1;

  }
 
   if(xp>=600 && xp<=605 && yp<=190 && yp>=100){
     veloX*=-1;

  }
  
  if(xp>=600 && xp<=605 && yp<=500 && yp>=260){
       veloX*=-1;

  }

  if(xp>=800 && xp<=805 && yp<=240 && yp>=100){
     veloX*=-1;

  }
  
  if(xp>=800 && xp<=805 && yp<=500 && yp>=320){
       veloX*=-1;

  }
 
  if(xp>=900 && xp<=905 && yp<=210 && yp>=100){
     veloX*=-1;

  }
  
  if(xp>=900 && xp<=905 && yp<=500 && yp>=280){
       veloX*=-1;

  }



ctx.beginPath();
ctx.arc(xp+=veloX,yp,7,0,2*Math.PI);
ctx.fillStyle='white';
ctx.fill();



}





/*  ctx.beginPath();
  //for(var x=200;x<1200;x+=100){
     ctx.moveTo(200,100);
     ctx.lineTo(200,200);
     ctx.moveTo(200,300);
     ctx.lineTo(200,500);
     
     ctx.moveTo(300,100);
     ctx.lineTo(300,160);
     ctx.moveTo(300,250);
     ctx.lineTo(300,500);

     ctx.moveTo(500,100);
     ctx.lineTo(500,210);
     ctx.moveTo(500,290);
     ctx.lineTo(500,500);
     
     ctx.moveTo(600,100);
     ctx.lineTo(600,190);
     ctx.moveTo(600,260);
     ctx.lineTo(600,500);

     ctx.moveTo(800,100);
     ctx.lineTo(800,240);
     ctx.moveTo(800,320);
     ctx.lineTo(800,500);

     ctx.moveTo(900,100);
     ctx.lineTo(900,210);
     ctx.moveTo(900,280);
     ctx.lineTo(900,500);
  
     
     //ctx.moveTo(900,280);
     //ctx.lineTo(900,500);




  //}
  ctx.strokeStyle="white";
  ctx.stroke();
       
       ctx.beginPath();
     ctx.moveTo(1080,220);
     
     ctx.lineTo(1200,220);
     ctx.strokeStyle="orange";
     ctx.stroke();
     
     ctx.beginPath();
     ctx.moveTo(1200,220);
     ctx.lineTo(1200,340);
     ctx.strokeStyle="white";
     ctx.stroke();
     
     ctx.beginPath();
     ctx.moveTo(1200,340);
     ctx.lineTo(1080,340);
     ctx.strokeStyle="lightgreen";
     
     ctx.stroke();

     ctx.fillStyle="white";
     ctx.fillText("Vidhan Sabha",1140,280);
*/













}

function level4(){
  ctx.clearRect(0,0,w,h);
  var p_img=document.createElement('img');
  p_img.src='player_big.png';
  var p_w=24; var p_h=85;
  p_img.addEventListener('load',function(){
    var cycle=0;
    setInterval(function(){
      ctx.clearRect(0,0,p_w,p_h);
      ctx.drawImage(p_img,cycle*p_w,0,p_w,p_h,0,0,p_w,p_h);
      cycle=(cycle+1)%8;

    },320);
  });



}

//clean India...
function level5(){
ctx.clearRect(0,0,w,h);




}
//awards to mufflerman
function level6(){
  ctx.clearRect(0,0,w,h);

}

// mufflerman and RJ
function level7(){
 var questions=['Food','Film','Singer','Actor','Sports','Politicion','Crush','Childhood Name','Place','Song'];
 var answers=['Chineese','Rang De Basanti','Aamir Khan','Gandhi','Sunita','Munna','Delhi','Insaan Ka Insaan Se..'];
 


}




}