function display(){
    document.getElementById('img').style.position="absolute";
    document.getElementById('img').style.right = "0";
    document.getElementById('img').style.width = "200px";

    var image = document.createElement("img");
    image.src= "dom.jpg";
    image.style.position="absolute";
    image.style.left="0";
    image.style.bottom="0";
    
    document.body.appendChild(image);
    
    document.getElementById("nav").style.listStyleType = "circle";
    document.getElementById("nav").style.position = "absolute";
    document.getElementById('nav').style.right = "50%";
    document.getElementById('nav').style.left = "50%";
    document.getElementById('nav').style.bottom = "50%";
    document.getElementById('nav').style.top = "50%";
}