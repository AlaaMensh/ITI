var txt = 'Lorem ipsum dummy text blabla Lorem ipsum dummy text blabla ,  this window will be closed after few moments .....';
var i = 0;
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}


var win;
function showMessage(){
    win = open("newWindow.html" , "" ,"width=500 , height = 500" );
    win.focus();
    var time = win.setTimeout(function(){
        win.close();
    } , 8000); 

}
