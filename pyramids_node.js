var prompt = require('prompt-sync')();

var a = prompt("Please enter a number:");

// First pyramid

for (var i = 0; i < a; i++) {
	for (var j = 0; j <= i; j++) {
		process.stdout.write("*");
	}
	process.stdout.write("\n");
}

process.stdout.write("\n");

// Second pyramid

for (i = a; i > 0; i--) {

	for (j = 0; j < i; j++) {
		process.stdout.write("*");
	}

	process.stdout.write("\n");
}


process.stdout.write("\n");

// Third pyramid

for (i = 0; i < a; i++) {

	for (j = 1; j <= i; j++) {
		process.stdout.write(" ");
	}

	for (k = a; k > i; k--) {
		process.stdout.write("*");
	}

	process.stdout.write("\n");
}

process.stdout.write("\n");

// Fourth pyramid

for (i = 0; i < a; i++) {

	for (j = a - 1; j > i; j--) {
		process.stdout.write(" ");
	}

	for (k = 0; k <= i; k++) {
		process.stdout.write("*");
	}

	process.stdout.write("\n");
}
