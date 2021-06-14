// Set cookie value
function setcookie(Nscore,Co_score,exday){
    var d = new Date();
    d.setTime(d.getTime() + (exday*24*60*60*1000));
    var expires = "expires =" + d.toGMTString();
    document.cookie =   Nscore + "=" + Co_score + ";" + expires + ";path=/;"; 
}

//Get Cookie and get value from cookie to score
function getCookie(Co_Get_score) {
    var Nscroe = Co_Get_score + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0 ; i < ca.length;i++){
        var c = ca[i].split("=");
        if(Co_Get_score == c[0].trim()){
            return decodeURIComponent(c[1]);
        }
    }
    return null;
}

//Check Cookie 
  function checkCookie() {
    var Co_score = getCookie("score");
    if (Co_score != null){
        Get_score = Co_score;
        setcookie("score", Co_score,30);
    }else{
        console.log("New user");
    }
}