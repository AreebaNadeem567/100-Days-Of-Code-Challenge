//Q16 - More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner:
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// Add one new guest to the beginning of your array.
// Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
// Print a new set of invitation messages, one for each person in your list.
// let Guest_List: string[] = ['Imran Khan','Nawaz Sharif','Asif Ali Zardari'];
// let message: string = "You are invited in Dinner"
// for (let index = 0; index < Guest_List.length; index++) {
//      console.log('Mr.' + Guest_List[index] + ' ' + message);
// }
/* Start with your program from Exercise 14. Add a print statement at the end ofyour program stating the name of the
guest who can’t make it. */
// let absent_Guest: string = 'Imran Khan';
// let new_Guest: string = 'Kamran Tessori';
// console.log(`\nNote:
// Mr. ${absent_Guest} is not coming to dinner. \n `);
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. 
//Guest_List[0] = new_Guest;
// Print a second set of invitation messages, one for each person who is still in your list. 
// for (let index = 0; index < Guest_List.length; index++) {
//      console.log('Mr.' + Guest_List[index] + ' ' + message);
// };
//Add a print statement to the end of your program informing people that you found a bigger dinner table. 
console.log('\nWe found a bigger dinner table');
// Add one new guest to the beginning of your array. 
//let Guest_List1 = Guest_List.unshift('Sir Zia Khan');
// Add one new guest to the middle of your array. 
//let Guest_List2 = Guest_List.splice(2,0,'Maryam Nawaz');
// Use append() to add one new guest to the end of your list.
//let Guest_List3 = Guest_List.push('Bilawal Bhutto Zardari');
// Print a new set of invitation messages, one for each person in your list. 
// for (let index = 0; index < Guest_List.length; index++) {
//      console.log('Mr.' + Guest_List[index] + ' ' + message);
// };  
/* Q17 - Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

Print a message to each of the two people still on your list, letting them know they’re still invited.

Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program. */
var Guest_List = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
var message = "You are invited in Dinner.";
function foorloop() {
    for (var index = 0; index < Guest_List.length; index++) {
        console.log('Mr.' + Guest_List[index] + ' ' + message);
    }
}
foorloop();
/* Start with your program from Exercise 14. Add a print statement at the end ofyour program stating the name of the
guest who can’t make it. */
var absent_Guest = 'Imran Khan';
var new_Guest = 'Kamran Tessori';
console.log("\nNote:\nMr. ".concat(absent_Guest, " is not coming to dinner. \n "));
// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting. 
Guest_List[0] = new_Guest;
// Print a second set of invitation messages, one for each person who is still in your list. 
foorloop();
//Add a print statement to the end of your program informing people that you found a bigger dinner table. 
console.log('\nWe found a bigger dinner table');
// Add one new guest to the beginning of your array. 
var Guest_List1 = Guest_List.unshift('Sir Zia Khan');
// Add one new guest to the middle of your array. 
var Guest_List2 = Guest_List.splice(2, 0, 'Maryam Nawaz');
// Use append() to add one new guest to the end of your list.
var Guest_List3 = Guest_List.push('Bilawal Bhutto Zardari');
// Print a new set of invitation messages, one for each person in your list. 
foorloop();
// Add a new line that prints a message saying that you can invite only two people for dinner. 
console.log('\n Sorry we can not arrange a big table. We can only invite two peoples to dinner.');
/* Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.*/
while (Guest_List.length >= 2) {
    var removeGuest1 = Guest_List.pop();
    console.log("Sorry Mr.".concat(removeGuest1, ", you are not invited for dinner."));
}
;
// Print a message to each of the two people still on your list, letting them know they’re still invited. • 
foorloop();
// Remove the last two names from your list, so you have an empty list.
var removeGuest5 = Guest_List.splice(0, 2);
//Print your list to make sure you actually have an empty list at the end of your program.
console.log(Guest_List);
/* Q18 - Seeing the World: Think of at least five places in the world you’d like to visit.

Store the locations in a array. Make sure the array is not in alphabetical order.

Print your array in its original order.

Print your array in alphabetical order without modifying the actual list.

Show that your array is still in its original order by printing it.

Print your array in reverse alphabetical order without changing the order of the original list.

Show that your array is still in its original order by printing it again.

Reverse the order of your list. Print the array to show that its order has changed.

Reverse the order of your list again. Print the list to show it’s back to its original order.

Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
//Store the locations in a array. Make sure the array is not in alphabetical order.
var places = ['Italy', 'Germany', 'Agra', 'Eifel Tower', 'Times Square'];
//Print your array in its original order.
console.log('Orginal ' + places);
//Print your array in alphabetical order without modifying the actual list.
console.log('Copy ' + __spreadArray([], places, true).sort());
//Show that your array is still is still in its orginal order by printing it.
console.log('Orginal ' + places);
//Print your array in reverse alphabetical order without changing the order of the orginal list.
console.log('Copy ' + __spreadArray([], places, true).sort().reverse());
//Show that your array is still in its orginal order by printing it again.
console.log('Orginal ' + places);
//Reverse the order of your list .Print the array to show that its order has changed.
console.log('Orginal ' + places.reverse());
//Reverse the order of your list  again. Print the list to show its back to it's orginal order.
console.log('Orginal ' + places.reverse());
//Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Orginal ' + places.sort());
//Sort to change  your array so it's stored in  reserve alphabetical order. Print the  list to show thatits order has  changed.
console.log('Orginal ' + places.sort().reverse());
