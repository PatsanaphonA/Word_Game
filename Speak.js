var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

function speak_word(){
var word_dicts = dict;
var grammar = '#JSGF V1.0; grammar word_dicts; public <word_dict> = ' + word_dicts.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');
var hints = document.querySelector('.hints');

document.getElementById('record').onclick = function() {
  recognition.start();
  console.log('Ready to receive a word command.');
}


recognition.onresult = function(event) {
  var speechResult = event.results[0][0].transcript.toLowerCase();
  console.log(speechResult);
    document.getElementById('speech').value = speechResult.toString();
    console.log('Confidence: ' + event.results[0][0].confidence);
}

recognition.onspeechend = function() {
  recognition.stop();
  console.log('Recording finish')
}

recognition.onnomatch = function(event) {
  diagnostic.textContent = "I didn't recognise that word.";
}

recognition.onerror = function(event) {
  diagnostic.textContent = 'Error occurred in recognition: ' + event.error;
}
}
