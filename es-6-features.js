// Traditional function expression
const oldSum = function(a, b) {
    return a + b;
};
console.log(oldSum(1,2));

// New in es6 arrow function
const newSum = (a, b) => a + b;
console.log(newSum(4,5));

// spred operator from es6
const phoneNumberList1 = [1,2,3];
const finalPhoneNumberList = [4,5, ...phoneNumberList1]; // ...phoneNumberList1 creates copy/clone
console.log(finalPhoneNumberList);

// rest opertaoor ...
const sumUsingRestParam = (...numbers) => {
    // let sum = 0;
    // numbers.forEach((number) => {
    //     sum = sum + number;
    // });
    // return sum;
    return numbers.reduce((accum, currentValue) => accum + currentValue, 0);
}
console.log(sumUsingRestParam(1,2,3,4,5));
