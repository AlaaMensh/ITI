
 var i =0;
 var x = 0, y = 0, w=200, h=200;  // for new Window 
var dx = 5, dy = 5; 
var intervalID ;

function fly(){

 if(x > 250 || x < 0 ){ 
 dx=-dx;
}
if(y > 250 || y < 0 ){ 
 dy= -dy;
}

document.getElementById('left').style.position="absolute";
document.getElementById('left').style.left = x+"px";
document.getElementById('right').style.position="absolute";
document.getElementById('right').style.right=x+"px";
document.getElementById('top').style.position="absolute";
document.getElementById('top').style.bottom= y+"px";
 intervalID  = setTimeout(fly, 100);
 document.getElementById("x").innerHTML="X: "+x;
 document.getElementById("y").innerHTML="Y: "+y;
 x+=dx;
 y+=dy;




 }

 

 function stop(){
     clearTimeout(intervalID);
 }

 function reset(){
     clearInterval(intervalID);
document.getElementById('left').style.position="absolute";
document.getElementById('left').style.left = "0px";
document.getElementById('right').style.position="absolute";
document.getElementById('right').style.right="0px";
document.getElementById('top').style.position="absolute";
document.getElementById('top').style.bottom= "0px"; 

 }


