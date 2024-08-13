// Q10 - Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.?

// Program written by: Areeba Nadeem
// Current date: 13-8-24

// This program will write Hello World

console.log("Hello World!");

// This program will add two digits

console.log(3 + 5);


// Q11 - Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let friendNames: string[] = ["Laiba", "Areesha", "Ayesha", "Muskan"];

for (let i = 0; i < friendNames.length; i++) {
    console.log(friendNames[i]);
};

//Q12 - Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let friend_Names: string[] = ["Laiba", "Areesha", "Ayesha", "Muskan"];

let message: string = "Nice to meet you";

for (let i = 0; i < friendNames.length; i++) {
    console.log(message + " " + friend_Names[i]);
};