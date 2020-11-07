var counter=0;
var str = prompt("Enter your String");
for(var i=0 ; i<str.length ; i++){
    if(str.charAt(i) === 'e' )
    {
        counter++;
    }
}
document.getElementById("counter").innerHTML =" your counter is : "+counter
//document.write("<h1>"+ "your counter is : "+counter+ "</h1>");
