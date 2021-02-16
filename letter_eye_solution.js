const prompt = require('prompt-sync')();
const a = prompt("Please enter a number: ");

//Top
for(i=1; i<=a; i++){
    process.stdout.write("*");
}
process.stdout.write("\n");

//Mid Stem
for(i=1; i<=a - 2; i++){
    const isEven = a % 2 === 0;
    const numberOfSpaces = isEven ? Math.floor(a/2) - 1: Math.floor(a/2);
    const midStemLength = isEven ? 2: 1;
    for(j=1; j<= numberOfSpaces; j++){
        process.stdout.write(" ");
    }
    for(j=1; j<= midStemLength; j++){
        process.stdout.write("*");
    }
    process.stdout.write("\n");
}

//Bottom
for(i=1; i<=a; i++){
    process.stdout.write("*");
}
process.stdout.write("\n");
