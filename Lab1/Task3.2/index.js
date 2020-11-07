var numbersArray = new Array();

for(var i =0; i<5 ;i++){
numbersArray[i] = parseInt(prompt("Enter your Number"));

}

function decsSort(arr)
{
    arr= arr.sort(function(a, b){return b-a});
    return(arr);
    
}
function ascSort(arr)
{
    arr= arr.sort(function(a, b){return a-b});
    return(arr);
    
}
document.getElementById("Array").innerHTML = "You Entered : "+numbersArray;
//document.write("<h1> you Entered "+numbersArray+"</h1>");
var array = decsSort(numbersArray);
document.getElementById("desc").innerHTML = "Your desc array : "+array;

//document.write("<h1>Descending Array:   "+array+"</h1>");

array = ascSort(numbersArray);
document.getElementById("asc").innerHTML = "Your asc array : "+array;
