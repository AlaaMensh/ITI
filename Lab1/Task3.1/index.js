var sum =0;
var multi=1;
var division = 1;
function operatoins(arr){
    for(var i =0; i<3 ;i++){
        sum += numbersArray[i];
        multi *= numbersArray[i];
        division /= numbersArray[i];
        }
        document.getElementById("sum").innerHTML=(" sum of ("+numbersArray[0] +"+"+numbersArray[1]+"+"+ numbersArray[2]+"): ").fontcolor("green") + sum ;
        document.getElementById("multibly").innerHTML=(" multibly of ("+numbersArray[0] +"*"+numbersArray[1]+"*"+ numbersArray[2]+"): ").fontcolor("green") + multi ;
        document.getElementById("division").innerHTML=(" division of ( "+numbersArray[0] +"/"+numbersArray[1]+"/"+ numbersArray[2]+"): ").fontcolor("green") + division ;
    // document.write(("<h1> sum of ("+numbersArray[0] +"+"+numbersArray[1]+"+"+ numbersArray[2]+"): "). fontcolor("green") + sum+"</h1>");
    // document.write(("<h1> multi of ("+numbersArray[0] +"*"+numbersArray[1]+"*"+ numbersArray[2]+"): "). fontcolor("green") + multi+"</h1>");
    // document.write(("<h1> division of ("+numbersArray[0] +"/"+numbersArray[1]+"/"+ numbersArray[2]+"): "). fontcolor("green") + division+"</h1>");

    

}

var numbersArray = new Array();
for(var i =0; i<3 ;i++){
numbersArray[i] = parseInt(prompt("Enter your Number"));

}
operatoins(numbersArray);
