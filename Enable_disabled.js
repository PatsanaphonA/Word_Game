function disabled(){
    document.getElementById('stop').setAttribute('disabled',true);
    document.getElementById('word').setAttribute('disabled',true);
    document.getElementById('speech').setAttribute('disabled',true);
    document.getElementById('sound').setAttribute('disabled',true);
}

function Enable(){
    document.getElementById('stop').removeAttribute('disabled');
    document.getElementById('word').removeAttribute('disabled');
    document.getElementById('speech').removeAttribute('disabled');
    document.getElementById('sound').removeAttribute('disabled');
}
