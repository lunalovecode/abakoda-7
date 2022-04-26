var a = readline().split(" ");
var patterns = ["ABCDEF", "EF", "ACDFG", "ADEFG", "BEFG", "ABDEG", "ABCDEG", "AEF", "ABCDEFG", "ABDEFG"];
var digitLen = parseInt(a[0]);
var numCount = parseInt(a[1]);
var numList = [];
for (var i = 0; i < numCount; i++) {
    numList[i] = readline();
}

function getSegments(source, targetNum, flipped) {
    var ltrs = "ABCDEFG";
    for (var ct = 0; ct < ltrs.length; ct++) {
        var letter = ltrs[ct];
        if (patterns[source].includes(letter) && patterns[targetNum].includes(letter)) {
            continue;
        }
        
        if (!patterns[source].includes(letter) && !patterns[targetNum].includes(letter)) {
            continue;
        }
        
        flipped[letter] = true;
    }
}

var min = "";

var firstNum = numList[0];

for (j = 1; j < numCount; j++) {
    var targetNum = numList[j];
    var totalFlipped = 0;
    for (k = 0; k < digitLen; k++) {
        flippedLetters = {};
        getSegments(parseInt(firstNum[k]), parseInt(targetNum[k]), flippedLetters)
        totalFlipped += Object.keys(flippedLetters).length;
    }
    

    if (min === "") {
        min = totalFlipped;
    }
    if (min >= totalFlipped) {
        min = totalFlipped;
    }
}

print(min);