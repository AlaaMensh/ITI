function isPalarandom(str) {

    // find the length of a string
    var len = str.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

var userString = prompt("Enter your String");

var userConfirm = confirm("Do you want to  consider case sensitivity");
if(userConfirm){
    var palarandom = isPalarandom(userString);


}
else{
    var str = userString.toUpperCase();
    var palarandom = isPalarandom(str);
}
document.write("<h1>"+palarandom+"</h1>");