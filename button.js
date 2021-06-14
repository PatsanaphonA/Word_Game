//Start game processing
function GameStart() {
    checkCookie();
    document.getElementById('quiz').style.display = "block";
    times = 0;
    Question = times + 1;
    score = Get_score;
    num_Question;
    document.getElementById('score').innerHTML = "Score : " + score.toString();
    document.getElementById('position').innerHTML = "Question : " + Question.toString();
}

// next button function use to increase score
function next() {
    nextquiz();
    setcookie("score",score,30);
    giveup_check = false;
}

// give up button fucntion
function giveup() {
    giveup_check = true;
    matchsound();
    matchspeech();
    matchword();
    disabled();
}

function Restart(){
    score = 0;
    Question = 1;
    setcookie("score",score,30);
    Enable();
    clearAns();
    Clear();
    num_Question();
    document.getElementById('score').innerHTML = "Score : " + score.toString();
    ans = false; wer = false; correct_flag = false; giveup_check = false;
    end();
}

// clear id "ans" block 
function clearAns(){
    var ans_div = document.getElementById("ans");
    while (ans_div.hasChildNodes()) {  
        ans_div.removeChild(ans_div.firstChild);
    }
}
