
 

function nameempty(obj,str){
    var timeOut = new Event("timeout");
    document.getElementById("name").addEventListener("timeout" , function(){
        location.href = "secondpage.html"; 
    });
   var timer=  setTimeout(function (){
        if(obj.value === "" || obj.value ==="name" ){
        document.getElementById("name").dispatchEvent(timeOut);
        }
        else{
            clearTimeout(timer);
        }
    },30000); 
}
    



function checkcontinue(e){
var respond = confirm("Do you want to continue");
if(!respond)
{
    e.preventDefault();
}
else{
    alert("submitted");
}


}