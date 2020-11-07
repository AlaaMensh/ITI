// var i = 0;
// var timerID;
// var j =0;
// var circles = document.getElementsByClassName("circle");
// console.log(circles[0]);
// function slideShow(){
    
//     console.log(j);
//     console.log(circles[j]);
//     if(i > circles.length) {
//         console.log("yes");
//         i = 0;
//     }
    
//     console.log(i);
    
//     setInterval(function(){
//         circles[i].style.backgroundColor="red";
//     },1000);
    
//     circles[i].style.backgroundColor="brown";
//     timerID = setTimeout(slideShow , 2000);
//     i++;
    
// }


// var marbles = document.getElementById("marable");
var i = 0;
var timerID;
var time;
console.log(document.images.length);

function display(){
    console.log(i);

   time =  setInterval(function(){
        document.images[i].src = "marble2.jpg";
    },1000);
    timerID = setTimeout (display , 3000);
    document.images[i].src = "marble1.jpg";
    i++;
    if(i > 4){
        i = 0;
        console.log("yyyyyyyyyyys");
    }


}

function stop(){
   clearTimeout(timerID);
}