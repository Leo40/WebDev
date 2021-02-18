const prompt = require('prompt-sync')();
const myNum = prompt("Please enter a number: ");
printChars = (numberOfChars, char) => {
    for(var i=1; i<=numberOfChars; i++){
        process.stdout.write(char);
    }
}

//Top
printChars(myNum, "*");
process.stdout.write("\n");

//Mid Stem
for(i=1; i<=myNum - 2; i++){
    const isEven = myNum % 2 === 0;
    const numberOfSpaces = isEven ? Math.floor(myNum/2) - 1: Math.floor(myNum/2);
    const midStemWidth = isEven ? 2: 1;
    printChars(numberOfSpaces, " ");
    printChars(midStemWidth, "*");
    process.stdout.write("\n");
}

//Bottom
printChars(myNum, "*");



