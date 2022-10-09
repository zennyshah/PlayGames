var myCards = document.getElementById('container');
var resArray = [];
var count = 0;
var text = document.getElementById('text');
var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var Interval;
var images = [
    'sass',
    'git',
    'gulp',
    'css',
    'grunt'
];

var duplicateArray = images.slice(0);
var cards = images.concat(duplicateArray);

function shuffle(o) {
    for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}
shuffle(cards);

for (var i = 0; i < cards.length; i++) {
    card = document.createElement('div');
    card.dataset.item = cards[i];
    card.dataset.view = "card";
    myCards.appendChild(card);

    card.onclick = function() {

        if (this.className != 'flipped' && this.className != 'correct') {
            this.className = 'flipped';
            var result = this.dataset.item;
            resArray.push(result);
            clearInterval(Interval);
            Interval = setInterval(startTimer, 10);
        }

        if (resArray.length > 1) {

            if (resArray[0] === resArray[1]) {
                check("correct");
                count++;
                win();
                resArray = [];
            } else {
                check("reverse");
                resArray = [];
            }

        }

    }

};

function startTimer() {
    tens++;

    if (tens < 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;

    }

    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

}

var check = function(className) {

    var x = document.getElementsByClassName("flipped");
    setTimeout(function() {

        for (var i = (x.length - 1); i >= 0; i--) {
            x[i].className = className;
        }

    }, 500);

}

var win = function() {

    if (count === 5) {
        clearInterval(Interval);
        text.innerHTML = "Your time was " + seconds + ":" + tens;
    }

}