var i =0;
var timerID;

    
function slideShow(){
    i++;
    console.log(i);
    timerID = setTimeout(slideShow , 2000);

    if(i>6) i=1;
    document.images[0].src = i+".jpg";
    
    
}

i=1;
function Next(){
    timerID = setTimeout(Next , 2000);
    if(i>6){
        clearTimeout(timerID);
    }
    else{
        
        document.images[0].src = i+".jpg";
        i++;
        console.log("i:  "+i);
    }
}

i-=1;
function prev(){
    timerID = setTimeout(prev , 2000);
    if(i < 1){
         clearTimeout(timerID);
    }
    else{

        document.images[0].src = i+".jpg";
        i--;
    }
}

function stop(){
    clearTimeout(timerID);
}
