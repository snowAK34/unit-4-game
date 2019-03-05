let target ;
let score = 0;
let greenValue ;
let redValue ;
let blueValue ;
let orangeValue ;
let wins = 0;
let losses = 0;

function randomize(max, min) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}

function updateStats() {
    document.getElementById("score").textContent = score;
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("target").textContent = target;
}

function gameStart() {
    // set target number, gem values, and reset score
    target = randomize(120, 18);
    redValue = randomize(12, 1);
    greenValue = randomize(12, 1);
    blueValue = randomize(12, 1);
    orangeValue = randomize(12, 1);
    score = 0;
    updateStats();
    console.log(target, greenValue, redValue, orangeValue, blueValue);
}

$("#green").on("click", function() {
    score = score + greenValue;
    console.log(score);
    if (score >= target) {gameEnd()};
    updateStats();
});
$("#red").on("click", function() {
    score = score + redValue;
    console.log(score);
    if (score >= target) {gameEnd()};
    updateStats();
});
$("#blue").on("click", function() {
    score = score + blueValue;
    console.log(score);
    if (score >= target) {gameEnd()};
    updateStats();
});
$("#orange").on("click", function() {
    score = score + orangeValue;
    console.log(score);
    if (score >= target) {gameEnd()};
    updateStats();
});

function gameEnd() {
    
    // if score equals target, player wins & game restarts
    if (target === score) {
        wins++;
        gameStart();
        updateStats();
    }
    // if score > target, player loses & game restarts
    if (score > target) {
        losses--;
        gameStart();
        updateStats();
    }
};

gameStart();