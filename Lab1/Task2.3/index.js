function validateName(name){
    var flag = false;
    var nameLetters = /^[A-Za-z]+$/;
    if(!name.match(nameLetters)){
      flag = true;
      }
      return flag;
}


function validatePhone(phone){
var flag = false;
    var phoneNumbers = /^[0-9]+$/;
  if(!phone.match(phoneNumbers)|| phone.toString().length > 8){
      flag = true;
  }
  return flag;
}

function validateMobile(mobile){
    var flag = false;
    var mobileNumbers = /^(010|011|012)[0-9]*$/;
    if(!mobile.match(mobileNumbers) || mobile.toString.length > 11 ){
        flag = true;
    }
    return flag;
}

function validateEmail(email){
    var flag = false;
    var emailLetters = /.\S+@[a-zA-Z0-9]+\.[a-zA-Z]+$/;
    if(!email.match(emailLetters)){
        flag = true;
    }
    return flag;
  
}



function userInput(){
  
    var email = "";
    var phone = "" ;
    var mobile = "";
    var name = prompt("Please Enter you Name");
    var checkValue = true;


    //var checkValue = Validate(name , phone, mobile , email);
    while(validateName(name)  || validatePhone(phone) || validateMobile(mobile) || validateEmail(email)){
       
        if(validateName(name)){
            
            name = prompt("Please Enter you Name ");
            continue;
        }

         
        if(validatePhone(phone)){
            phone =  prompt("Please Enter you Phone 1111");
            continue;
        }

       
        if(validateMobile(mobile)){
            mobile = prompt("Please Enter you Mobile");
           continue;
        }

        
        if(validateEmail(email)){
            email =  prompt("Please Enter you Email");
            continue;
        }

}
var color  = prompt("Enter red or blue or green");
document.getElementById("name").innerHTML= (("your Name is ").fontcolor(color)+name);
document.getElementById("phone").innerHTML= (("your phone is ").fontcolor(color)+phone);
document.getElementById("mobile").innerHTML= (("your mobile is ").fontcolor(color)+mobile);
document.getElementById("email").innerHTML= (("your email is ").fontcolor(color)+email);
// //document.write("<h1>"+"your Name is "+name.fontcolor(color)+"</h1>");
// document.write("<h1>"+"your Phone is "+phone.fontcolor(color)+"</h1>");
// document.write("<h1>"+"your Mobile is "+ mobile.fontcolor(color)+"</h1>");
// document.write("<h1>"+"your Email is "+email.fontcolor(color)+"</h1>");
var today  =  new Date();
document.write("<h1>"+"today is :  ".fontcolor(color) +today.toLocaleDateString()+"</h1>");
}


userInput();

