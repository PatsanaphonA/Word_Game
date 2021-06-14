//load data file from words.txt
function loadphp() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "getwords.php", false);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            dict = JSON.parse(this.responseText);  
            console.log(this.responseText);
            console.log(dict);
        }
    }
    xhttp.send(null);
    hearsound();
}

function init() {
    word = document.getElementById('word');
    sound = document.getElementById('sound');
    loadphp();
    GameStart();
}