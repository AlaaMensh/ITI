


var i =0;
var value;

function saveInfo(){
    
    var radios = document.getElementsByTagName('input');
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].type === 'radio' && radios[i].checked) {
            // get value, set checked flag or do whatever you need to
            value = radios[i].value;       
        }
    }
    

    var date = new Date();
    var age = document.getElementById("age").value;
    var index = document.getElementById("color").selectedIndex;
    color = document.getElementById("color").options[index].value;
        
    date.setMonth(date.getMonth+3);
    if(!hasCookie("username")){
        var name = document.getElementById("username").value;
        setCookie("username" , name ,date );
        setCookie("color" , color ,date );
        setCookie("age" , age ,date );
        setCookie("gender" , value ,date );
    }
    else{

    alert("you have cookie");
    //console.log("hhhhheere");
    // visit++;
    // setCookie("visit", visit, date);
    }
   
  
 location.href = "welcomepage.html";   


   
    
}


 function display(){
     
   var visit;
   var date = new Date();
   // var visit = 0;
   date.setMonth(date.getMonth+3);
    if(!(visit = getCookie("visit"))) 
        visit = 0;
    visit++;
     setCookie("visit", visit, date);
     var name = getCookie("username");
     var color = getCookie("color");
     var visit = getCookie("visit");
     var gender = getCookie("gender");
     
     document.getElementById("txt").innerHTML=("Welcome  " + name+" you visit us: "+visit).fontcolor(color);
     
     if(gender =="male"){
        var image = document.createElement("img");
        image.src="1.jpg";
        document.body.appendChild(image);
       }
       else if (gender=="female"){
        var image = document.createElement("img");
        image.src="2.jpg";
        document.body.appendChild(image);
       }

 }


// var color;
// var visit = 0; 

// var arr = [] ;
// function setCookie(){
//     var cookie = getAllCookie();
//     console.log(cookie);
//     var date = new Date();
// var flag=false;
//     date.setMonth(date.getMonth+3);
//     var name = document.getElementById("username").value;
    
//     for(var i =0;i< arr.length ;i++){
//         console.log("arr: "  +arr[i]);
//         if(name === arr[i]){
//            visit++;
//            document.cookie = "visit="+visit+";expire="+date;
//             flag=true;
//         }
        
        
//         }
//         if(flag == false){

//             arr.push(name);
//             var age = document.getElementById("age").value;
//             var index = document.getElementById("color").selectedIndex;
//             color = document.getElementById("color").options[index].value;
//             document.cookie = "username="+name+";expires="+date;
//             // document.cookie = "color="+color+";expires="+date;
//             // document.cookie = "age="+age+";expires="+date;
//             document.cookie = "visit="+visit+";expires="+date;
//             alert(arr.length);
//         }
        
//     }
   


    
    
   

// function display(){
    
//     var cookie = getAllCookie();
//     var color = cookie["color"];
//     var name = cookie["username"];
//     var visit = cookie["visit"];
    
//     var text= "Welcome to our page & thanks " +name+" "+"for loging here   " + visit;
//     document.getElementById("welcome").innerHTML=text;
//     document.getElementById("welcome").style.color= color;
//     var gender = new URL(location.href).searchParams.get('Gender');
//     if(gender === "male"){
//      var image = document.createElement("img");
//      image.src="1.jpg";
//      document.body.appendChild(image);
//     }
//     else if(gender === "female"){
//      var image = document.createElement("img");
//      image.src="2.jpg";
//      document.body.appendChild(image);
//     }

  
    
// }

// function deleteCookie(cookieName){

//     var date = new Date();
//     date.setMonth(date.getMonth+3);
//     document.cookie = cookieName+"=;expires="+date;
//     // var cookie = getAllCookie();
//     // for(i in cookie){
//     //     document.cookie = i+"=;expires="+ date;
//     // }
// }


// function test(){
//     alw
// }





