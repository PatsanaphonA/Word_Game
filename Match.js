var Color_correct = "green";
var Color_wrong = "red";
var Color_None = "#4A4A4A";
var x = document.getElementsByClassName("word_check");
var y = document.getElementsByClassName("sound_check");
var z = document.getElementsByClassName("speech_check");
// compare english word
function matchword() {
    var ans = document.getElementById("word").value.toLowerCase();
   
    if (ans == vocab[0] && giveup_check == false) {
        score++;
        setcookie("score",score,30);
        document.getElementById('score').innerHTML = "Score : "+ score.toString();
        document.getElementById('word').setAttribute('disabled',true);
        x[0].style.color = Color_correct;
    } 
    else if (ans != vocab[0] && giveup_check == false){
        x[0].style.color = Color_wrong;
    }
    else if (ans == vocab[0] && giveup_check == true){
        x[0].style.color = Color_correct;
    }
    else if (ans != vocab[0] && giveup_check == true){
        word.value = vocab[0];
        x[0].style.color = Color_wrong;
    } 
    else {
        x[0].style.color = Color_wrong;
    }
    checkgiveup();
}

// compare sound charcter
function matchsound() {
    

    sound.value = sound.value.toUpperCase();
    var user_sound_char = sound.value.split(" ");
    var user_sound_char_len = user_sound_char.length;
    clearAns()

    console.log(vocab)
    
    for (let index = 1; index < 2; index++) {
        var ans_sound_char = vocab[index].split(" ");
        var ans_sound_char_len = ans_sound_char.length;
        var ans_array = new Array();
        
        if (giveup_check == false) {
            for (let pos = 0; pos < ans_sound_char_len; pos++ ){
                var space = document.createElement("span");
                space.innerHTML = "-"
                var span_char = document.createElement("span");
                var br = document.createElement("br");
                
                if (user_sound_char[pos] == ans_sound_char[pos]) {
                    span_char.innerHTML = user_sound_char[pos];
                    span_char.style.color = "green";
                }
                else {
                    var result_char = user_sound_char[pos]
                    if (typeof result_char === 'undefined' ){
                        result_char = "?";
                    }
                    span_char.innerHTML = result_char;
                    span_char.style.color = "red";
                }    
                
                document.getElementById("ans").appendChild(span_char);
                document.getElementById("ans").appendChild(space);
            }
        }
        else {
            for (let pos = 0; pos < ans_sound_char_len; pos++ ){
                var space = document.createElement("span");
                space.innerHTML = "-"
                var span_char = document.createElement("span");
                var br = document.createElement("br");
                
                if(user_sound_char[pos] == ans_sound_char[pos]){
                    span_char.innerHTML = user_sound_char[pos];
                span_char.style.color = "green";
                }

                document.getElementById("ans").appendChild(span_char);
                document.getElementById("ans").appendChild(space);
            }
        }

        var ans_div = document.getElementById("ans");
        ans_div.removeChild(ans_div.lastChild);
        document.getElementById("ans").appendChild(br);

        
        if (sound.value == vocab[index]) {
            wer = true;
            correct_flag = true;
        } else {
            wer = false;
        }
    }

    if ((wer == true||correct_flag==true) && giveup_check == false) {
        y[0].style.color = Color_correct;
        score++;
        setcookie("score",score,30);
        document.getElementById('score').innerHTML = "Score : "+score.toString();
        document.getElementById('sound').setAttribute('disabled',true);
    } 
    else if (wer == false && giveup_check == false){
        y[0].style.color = Color_wrong;
    }
    else if (wer == true && giveup_check == true){
        y[0].style.color = Color_correct;
    }
    else if (wer == false && giveup_check == true){
        sound.value = vocab[1];
        y[0].style.color = Color_wrong;
    } 
    else {
        y[0].style.color = Color_wrong;
    }
    checkgiveup();
}

// matchspeech typing
function matchspeech(){
    var ans = document.getElementById("speech").value.toLowerCase();
    if (ans == vocab[0] && giveup_check == false) {
        z[0].style.color = Color_correct;
        score++;
        setcookie("score",score,30);
        document.getElementById('score').innerHTML = "Score : " + score.toString();
        document.getElementById('speech').setAttribute('disabled',true);
    }
    else if (ans != vocab[0] && giveup_check == false){
        z[0].style.color = Color_wrong;
    }
    else if (ans == vocab[0] && giveup_check == true){
        z[0].style.color = Color_correct;
    }
    else if (ans != vocab[0] && giveup_check == true){
        speech.value = vocab[0];
        z[0].style.color = Color_wrong;
    } 
    else {
        z[0].style.color = Color_wrong;
    }
    checkgiveup();
}

function Clear_color(){
    x[0].style.color = Color_None;
    y[0].style.color = Color_None;
    z[0].style.color = Color_None;
}
