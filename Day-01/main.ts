// Q1 - Install Node.js, TypeScript and VS Code on your computer.

/* Q2 - Personal Message: Store a person’s name in a variable, and print a message to that person. 
Your message should be simple, such as, “Hello Areeba, would you like to learn some Python today?”*/

let myName: string = "Areeba";

console.log(`Hello ${myName}, would you like to learn some Python today?`);

/* Q3 - Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, 
uppercase, and titlecase.*/

let personName: string = "Areeba";

console.log(personName.toLowerCase());

console.log(personName.toUpperCase());

console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());