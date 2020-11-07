var sum =0;
do{
var number = parseInt(prompt("Enter your num"));
if (isFinite(number)) 
{
    sum+=number;
    console.log("it is number");
}
else if(!number){ // To Handle the OK or Cansel option
    sum+=0;
    console.log("it is empty");
    break;
}

else{
    alert("Must input numbers"); // To Handle if the user enter any String
    continue;
}
   


}while(  number != 0 && sum < 100 );
document.getElementsByTagName("div")[0].innerHTML = "your sum is" + sum;
//document.write("<h1>"+"your sum is: "+sum+ "</h1>");

