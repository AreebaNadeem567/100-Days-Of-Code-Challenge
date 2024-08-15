//  Q13 - Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
// let transportation: string[] = ["Honda Motorcycle", "Car", "Train"];
// for (let i = 0; i < transportation.length; i++) {
//     console.log('I would like to own a ' + transportation[i]);
// };
// Q14 - Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var Guest_List = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
var message = "You are invited in dinner.";
for (var index = 0; index < Guest_List.length; index++) {
    console.log('Mr.' + Guest_List[index] + ' ' + message);
}
;
// Q15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite:
// .Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// .Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// .Print a second set of invitation messages, one for each person who is still in your list.
// let Guest_List: string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];
// let message: string = "You are invited in Dinner"
// for (let index = 0; index < Guest_List.length; index++) {
//      console.log('Mr.' + Guest_List[index] + ' ' + message);
// }
// /* Start with your program from Exercise 14. Add a print statement at the end ofyour program stating the name of the 
// guest who can’t make it. */
// let absent_Guest: string = 'Imran Khan';
// let new_Guest: string = 'Kamran Tessori';
// console.log(`\nNote:
// Mr. ${absent_Guest} is not coming to dinner. \n `);
// // Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. 
// Guest_List[0] = new_Guest;
// // Print a second set of invitation messages, one for each person who is still in your list. 
// for (let index = 0; index < Guest_List.length; index++) {
//      console.log('Mr.' + Guest_List[index] + ' ' + message);
// };
