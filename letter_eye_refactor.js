const prompt = require('prompt-sync')();
const myNum = prompt("Please enter a number: ");

print = (numberOfChars, char) => {
    process.stdout.write(char.repeat(numberOfChars));
}

printLine = (numberOfChars, char) => {
    print(numberOfChars, char);
    process.stdout.write("\n");
}

//Top
printLine(myNum, "*");

//Mid Stem
for(i=1; i<= myNum - 2; i++){
    const isEven = myNum % 2 === 0;
    const quotient = Math.floor(myNum / 2);
    const numberOfSpaces = isEven ? quotient - 1: quotient;
    const midStemWidth = isEven ? 2: 1;

    print(numberOfSpaces, " ");
    printLine(midStemWidth, "*");
}

//Bottom
printLine(myNum, "*");
