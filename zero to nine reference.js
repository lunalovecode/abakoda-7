var args = readline().split(' ');
 
digitLength = parseInt(args[0], 10)
numberCount = parseInt(args[1], 10);
 
 
numbersList = [];
 
for (ct = 0; ct < numberCount; ct++) {
    numbersList[ct] = readline();
}
 
var segments = [
        "ABCDEF",
        "EF",
        "ACDFG",
        "ADEFG",
        "BEFG",
        "ABDEG",
        "ABCDEG",
        "AEF",
        "ABCDEFG",
        "ABDEFG"
    ];
 
 
function getFlipSegment(source, target, flipped) {
    
    var letters = "ABCDEFG";
    
    for (ct = 0; ct < letters.length; ct++) {
        
        letter = letters[ct]
        if ( segments[source].includes(letter) && segments[target].includes(letter) ) {
            continue;
        }
 
        if ( !segments[source].includes(letter) && !segments[target].includes(letter) ) {
            continue;
        }
 
        
        flipped[letter] = true;
        
    }
    
}
 
 
 
min = '';
 
 
firstNum = numbersList[0]
 
for (c = 1; c < numberCount; c++) {
    
    targetNum = numbersList[c];
    
    totalFlipped = 0;
 
    
    for (k = 0; k < digitLength; k++) {
        flippedLetters = {};
        getFlipSegment(  parseInt(firstNum[k], 10),    parseInt(targetNum[k], 10), flippedLetters )
        
        totalFlipped += Object.keys(flippedLetters).length;
    }
 
    if (min === '') {
        min = totalFlipped;
    } 
    
    if (min >= totalFlipped) {
        min = totalFlipped;
    }
    
    
}
 
print(min)