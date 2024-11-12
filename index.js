console.log('Hello world !!');

let firstname = 'abhi';
console.log(`Hello ${firstname}`);
firstname = 'rushi'; // valid
console.log(`Hello ${firstname}`);

const lastname = 'abhi';
console.log(`Hello ${lastname}`);
// lastname = 'rushi'; // TypeError: Assignment to constant variable.
console.log(`Hello ${lastname}`);

const ages = [10,12,18,19,20,78];
const voters = ages.filter(age => age >= 18);
console.log(voters);

const priorityTikets = [101,121,181,191,201,781];
const searchTicketIndex = priorityTikets.indexOf(181);
if(searchTicketIndex == -1){
    console.log('Ticket is not there');
} else {
    console.log('Ticket is there');
}

const marks = [10,20,30,40,34];
const graceMarks = marks.map(mark => mark + 5);
console.log(`gracemarks = ${graceMarks}`);

const erroList = [];
erroList.push('Incorrect date');
erroList.push('Incorrect name');
erroList.push('Incorrect age');
erroList.forEach(error => console.log(error));
erroList.forEach((error, index) => {
    console.log(`index = ${index}`);
    console.log(`error msg = ${error}`);
});


const tickets = [101,210,301,401,341];
console.log(`All tickets = ${tickets}`);
const completedTicket = 210;
const completedTicketIndex = tickets.indexOf(completedTicket);
const deletedTicket = tickets.splice(completedTicketIndex, 1);
console.log(`After removing completed ticket = ${tickets}`);
console.log(`Deleted ticket = ${deletedTicket}`);

