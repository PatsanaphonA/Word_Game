function question() {
    vocab = dict[times];
    document.getElementById('ans').innerHTML = vocab[0]; 
}

//synthesis utterance from english text 
function hearsound() {
    vocab = dict[times];
    msg = new SpeechSynthesisUtterance(vocab[0]);
    window.speechSynthesis.speak(msg);
    
}

