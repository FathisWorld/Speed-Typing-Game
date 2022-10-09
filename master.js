// array of words
let words = [
    "Javascript",
    "programming",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "python",
    "Scale",
    "Destructuring",
    "Paradign",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

// setting levels
let lvls = {
    "Easy": 6,
    "Normal": 4,
    "Hard": 2,
};

// default level
let defaultLvlName = "Normal";
let ddefaultSeconds = lvls[defaultLvlName];



//catch selectors 

let startBtn = document.querySelector(".start");
let lvlSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWords = document.querySelector(".the-words");
let input = document.querySelector(".input");
let upComingWords = document.querySelector(".upComing-words");
let timeSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// setting lvls + seconds + scores

lvlSpan.innerHTML = defaultLvlName;
secondsSpan.innerHTML = ddefaultSeconds;
timeSpan.innerHTML = ddefaultSeconds;
scoreTotal.innerHTML = words.length;

//diable past event

input.onpaste = () => {
    return false;
}

// start btn

startBtn.onclick = () => {
    startBtn.classList.add("none");
    input.focus();
    // generae word function
    genWord();
    finishMessage.innerHTML = '';
}

function genWord() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    // get index
    let wIndex = words.indexOf(randomWord);
    // remove from array
    words.splice(wIndex, 1);
    // add the word
    theWords.innerHTML = randomWord;
    upComingWords.innerHTML = '';
    // gen words
    for (let i = 0; i < words.length; i++) {
        let div = document.createElement("div");
        let text = document.createTextNode(words[i]);
        div.appendChild(text);
        upComingWords.appendChild(div);
    }
    startPlay()
}

function startPlay() {
    timeSpan.innerHTML = ddefaultSeconds;
    let sPlay = setInterval(() => {
        timeSpan.innerHTML--;
        if (timeSpan.innerHTML === "0") {
            clearInterval(sPlay);
            if (theWords.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = '';
                scoreGot.innerHTML++;
                if (words.length > 0) {
                    genWord();
                } else {
                    let span = document.createElement("span");
                    span.className = "good";
                    let sText = document.createTextNode("Congratz");
                    span.appendChild(sText);
                    finishMessage.appendChild(span);
                    upComingWords.remove();
                }
            } else {
                let span = document.createElement("span");
                span.className = "bad";
                let sText = document.createTextNode("Game Over");
                span.appendChild(sText);
                finishMessage.appendChild(span);
                startBtn.classList.remove("none");
                theWords.innerHTML = '';
                input.value = '';
                setInterval(() => {
                    finishMessage.innerHTML = '';
                }, 1000)
            }
        }
    }, 1000)
}