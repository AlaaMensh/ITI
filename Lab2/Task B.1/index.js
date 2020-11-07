
var styling ;
 function getValue(radio){
      styling = radio.name.trim();
        console.log("ddd:" + styling.trim());
        if(radio.name === "color"){
            document.getElementById("textDiv").style.color = radio.value;
        }
        
        else if(radio.name === "line-height"){
            document.getElementById("textDiv").style.lineHeight = radio.value;
        }
        if(radio.name === "text-align"){
            document.getElementById("textDiv").style.textAlign = radio.value;
        }
        if(radio.name === "letterSpacing"){
            document.getElementById("textDiv").style.letterSpacing = radio.value;
        }
        if(radio.name === "textIndent"){
            document.getElementById("textDiv").style.textIndent = radio.value;
        }
        if(radio.name === "textTransform"){
            document.getElementById("textDiv").style.textTransform = radio.value;
        }

  
  

 }


// function display(iD){
//     // console.log(iD);
// var array =  new Array();
//   var btn = document.querySelector('#btn');
// //         // handle click button
//     btn.onclick = function () {

//             var choices = document.querySelectorAll('input[name='+iD+']');
//             var selectedValue;
//             for (var i =0; i< choices.length ; i++) {
                
//                 console.log(choices[i].value);
//                 if (choices[i].checked) {

//                     selectedValue = i.value;
//                     array.push(selectedValue);
                    
//                     break;
//                 }
//             }
//             console.log(array);
//             // alert(selectedValue);
            
// }
// }

// function display(){

//     var BigArray = [];
//     var SelectedValues = [];

//      var colorChoices= document.querySelectorAll('input[name="color"]');
//      var heightchoices = document.querySelectorAll('input[name="height"]');
//      var aliChoices = document.querySelectorAll('input[name="ali"]');

//     BigArray["color"] = colorChoices;
//     BigArray["line-height"] = heightchoices;
//     BigArray["text-align"] = aliChoices;

//     var btn = document.querySelector('#btn');
//     var selectedValue;

//     btn.onclick = function () {
//         for(var i in BigArray){
//                 console.log("i : " + i + " ,BigArray[i]   "   + BigArray[i]+ " ,BigArray[i].length : "+BigArray[i].length);
//             for(var j=0 ; j < BigArray[i].length ; j++ ){
//                 console.log("BigArray[i[j]]:   "+ BigArray[i[j]]);
//             //     if (j.checked == true) {
//             //       console.log(i[j].value);
//             //       selectedValue = i[j].value;
//             //       console.log("yyyyye"+ i[j].value);
//             //       SelectedValues.push(selectedValue);
//             //       break;
//             //   }
//             }
//         }
//         // console.log(SelectedValues);

//     }
//     // for(var w=0; w<SelectedValues.length ;w++){
//     //     document.getElementById("textDiv").style.selectedValue[w] = SelectedValues[w];
//     // }

  
// }