
function setCookie(cname, cvalue , d) {
    // var d = new Date();
    // d.setMonth(d.getMonth()+1);
    
    document.cookie = cname + "=" + cvalue + ";expires=" + d;
  }

  function getCookie(cname) {
    var name = cname + "=";
    
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function hasCookie(cname) {
    var username = getCookie(cname);
    if (username != "") {
     return true;
    } else {
      return false;
    }
  }
function deleteCookie(cname){
    var d = new Date();
    d.setTime(d.getTime());
    
    if(hasCookie(cname)){
    document.cookie = cname + "=;expires="+d;
    }
    else
    {
        alert("there is no cookie");
    }
}
function getAllCookie(){
    var asscook =[] ;
    var splitCookie = document.cookie.split(";");
    for(var i=0  ; i < splitCookie.length ; i++)
    {
        asscook[splitCookie[i].split("=")[0].trim()] = splitCookie[i].split("=")[1];
    
    }
    return asscook;
    }