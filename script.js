// check giveup process disabled text
function checkgiveup(){
    var word_text = document.getElementById('word').disabled;
    var sound_text = document.getElementById('sound').disabled;
    var speech_text = document.getElementById('speech').disabled;
    if(word_text && sound_text && speech_text){
        disabled();
    }
}

// init next quiz and remove all values
function nextquiz() {
    Enable();
    clearAns();
    Clear();
    Clear_color();
    ans = false; wer = false; correct_flag = false; giveup_check = false;
    times++;
    Question++;
    document.getElementById('position').innerHTML = "Question : " + Question;
    document.getElementById('score').innerHTML = "Score : "+ score.toString();
    if (times >= 10) {
        end();
    } else {
        hearsound();
    }
}

function end() {
    num_Question();
    document.getElementById('ans').innerHTML = ''; 
    Get_score = score;
    times = 0;
    dict = null;
    loadphp();
}

function num_Question(){
    document.getElementById('position').innerHTML = "Question : " + Question;
}

function Clear(){
    word.value = '';
    sound.value = '';
    speech.value = '';
}

