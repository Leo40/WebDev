const prompt = require('prompt-sync')();
const a = prompt("Please enter a number: ");
var o = 0;

// Head and foot of the letter

for(i=1; i<=a; i++){
    if(i==1){
        for(j=1; j<=a; j++){
            process.stdout.write("*");
        }
        process.stdout.write("\n");
    }
    else if(i==a){
        for(j=1; j<=a; j++){
            process.stdout.write("*");
        }                   
    }
    // Body of the letter
    else {
        while(o <a-2){            
            for(k=0; k<(a-2)/2; k++){
                process.stdout.write(" ");
            }
            if(a%2){
                for(z=a; z>a-1; z--){
                    process.stdout.write("*");
                }
            }
            else{
            for(z=a; z>a-2; z--){
                process.stdout.write("*");
                }
            }
            process.stdout.write("\n");
            o++
        }
    }
}
process.stdout.write("\n");