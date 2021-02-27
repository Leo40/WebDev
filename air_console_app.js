const prompt = require('prompt-sync')();
const EventEmitter = require('events');
const fs = require('fs');

printHeader = (msg, leadingSpaces, laggingSpaces) => {
    const fullStars = "*".repeat(31);
    const midStars = "*".repeat(2);
    const startSpaces = " ".repeat(leadingSpaces);
    const endSpaces = " ".repeat(laggingSpaces);
    console.log(fullStars);
    console.log(midStars + startSpaces + msg + endSpaces + midStars);
    console.log(fullStars + "\n");
}

taskItems = (userData, secondTask) => {
    console.log("Task Selection");
    if(secondTask === "1"){
        for(var x in userData[0]) {
            console.log(x + ": " + userData[0][x]);
        }
    }
    else if (secondTask === "2") {
        for(var x in userData[2]){
            console.log(x + ": " + userData[2][x]);
        }
    }
}

taskLetterChecker = () => {    
    var taskLetter = "";
    while(taskLetter !== "r" && taskLetter !== "s" && taskLetter !== "x"){
        taskLetter = prompt("Please enter the task you want to perform: ");
        if(/r/i.test(taskLetter)){                             
            return "r";
        }
        else if(/s/i.test(taskLetter)){                
            printHeader("Seat Verification", 4, 6);
            return "s";
        }
        else if(/x/i.test(taskLetter)) {
            process.exit();
        }
        else{
            console.log("Invalid Entry! Please try again.\n");
        }
    }
}

seatClassOptions = (userData) => {
    console.log("Seat Class Selection");
    for(var x in userData[1]) {
        console.log(x + ": " + userData[1][x]);
    }    
}

seatClassChecker = (userData) => {
    var seatClass = "";
    while(seatClass !== "b" && seatClass !== "e"){
        seatClass = prompt("Please enter the seat class you want to reserve: ");
        if(/b/i.test(seatClass)){                    
            printHeader("Business Class", 7, 6);
            
            //Seat layout and availability
            for(i=0; i<5; i++){
                const rowLabel = String.fromCharCode(i+97).toUpperCase();
                process.stdout.write("  " + rowLabel + "  ");                
            }
                
                process.stdout.write("\n");

            for(i = 0; i < 5; i++){        
                const columnLabel = i + 1;
                process.stdout.write(columnLabel.toString());
                for(j = 0; j < 5; j++){                                                 
                    process.stdout.write(" " + userData[3][i][j] + " ");
                }
                console.log("\n");
            }        
        }
        else if(/e/i.test(seatClass)) {
            printHeader("Economy Class", 7, 6);
        }
        else{
            console.log("Invalid Entry! Please try again.\n");
        }
    }
}

rowNumberChecker = () => {
    var rowNumber = 0;
    while(!/[1-5]/.test(rowNumber)){
        var rowNumber = prompt("Please enter the row number: ");
        if(/[1-5]/.test(rowNumber)){                                    
            return rowNumber;
        }
        else {
            console.log("Invalid Entry! Please try again.\n");            
        }
    }
}

seatLetterChecker = () => {
    var seatLetter = "";
        while(!/[a-e]/i.test(seatLetter)) {
            var seatLetter = prompt("Please enter the seat letter: ");
            if(/[a-e]/i.test(seatLetter)){
            return seatLetter;
        }
        else {
            console.log("Invalid Entry! Please try again.\n");           
        }
    }
}

seatAvailability = (userData, rowNumber, seatLetter) => {
    const seat = rowNumber + seatLetter;        
    const seatMark = userData[3][rowNumber - 1][seatLetter.charCodeAt(0) -97];
    const seatAvailable = "Seat " + seat + " is available.\n";
    const seatTaken = "Sorry seat " + seat + " is already taken.\n"
    const availability = seatMark === "X"? seatTaken: seatAvailable;

    if(availability === seatAvailable){            
        console.log(seatAvailable);
        // return seat;
    }
    else if (availability === seatTaken){
        console.log(seatTaken);
        const rowNumber = rowNumberChecker();  
        const seatLetter = seatLetterChecker(); 
        seatAvailability(userData, rowNumber, seatLetter);            
    }    
}

class User extends EventEmitter{
    userCreator (firstName, lastName, passportNumber, seat) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.passportNumber = passportNumber;
        this.seat = seat;
        this.emit("New User", "Seat " + seat + " was successfully booked!\n");        
    }            
}

//Initaite air console
airConsoleInitator = (userData) => {                
    
    //Display welcome screen and tasks
    printHeader("Welcome to AirConsole", 4, 2);   
    taskItems(userData, "1");
    var taskLetter = taskLetterChecker(userData);

    if(taskLetter == "r"){
        printHeader("Seat Class", 9, 8);
        seatClassOptions(userData);            
        seatClassChecker(userData);
        
        const rowNumber = rowNumberChecker();  
        const seatLetter = seatLetterChecker();              
        const seat = rowNumber + seatLetter;
        seatAvailability(userData, rowNumber, seatLetter);
                            
        //Create new passenger
        const firstName = prompt("Please enter the passenger's firstname: ");
        const lastName = prompt("Please enter the passenger's lastname: ");
        const passportNumber = prompt("Please enter the passenger's passport number: ");            
        const person = new User();                   
        person.on("New User", (msg) => {
            delete person._events;
            delete person._eventsCount;                                                                                       
            userData[3][rowNumber - 1][seatLetter.charCodeAt(0) -97] = "X";  
            userData[userData.length] = person;                

            fs.writeFile("./flight_manifest.json", JSON.stringify(userData, null, "\t"), 'utf8', err => {
                if (err) throw err;                    
            });   
        });
        
        //Book seat and notify passenger
        console.log("Seat " + seat + " was successfully booked!\n");                
        person.userCreator(firstName, lastName, passportNumber, seat);

        //Take passenger to main scren
        airConsoleInitator(userData);                                                                          
    }

    //Verify selected task
    else if(taskLetter === "s"){        
        const bookedRowNumber = rowNumberChecker();
        const bookedSeatLetter = seatLetterChecker();    
        //console.log("Hello");
        
        //Display passenger details
        userData.forEach(checkPassenger);
        function checkPassenger (item, index, array) {                                       
            if(array[index].seat === bookedRowNumber + bookedSeatLetter){
                console.log("\nPassenger Details: ")
                console.log("First Name: " + array[index].firstName);
                console.log("Last Name: " + array[index].lastName);
                console.log("Passport Number: " + array[index].passportNumber);
            }                
        }

        //Display boarding option        
        printHeader("Welcome to AirConsole", 4, 2);        
        taskItems(userData, "2");
        taskLetterChecker(userData);
    } 
}

//Read JSON file and call console initiator
fs.readFile('./flight_manifest.json', 'utf-8', (err, jsonString) => {
    if(err){
        console.log(err);
    } else {
        try {         
        const userData = JSON.parse(jsonString);
        airConsoleInitator(userData);
        }
    catch (err){
        console.log('Error parsing JSON', err);
        }
    }
});
