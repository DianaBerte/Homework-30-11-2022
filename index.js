/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

console.log("\n--------Exercise 1-----------\n")
let arrayOfNumbers = [1, 2, 3, 4, 5];

console.log("Number 1: ", arrayOfNumbers[0])
console.log("Number 2: ", arrayOfNumbers[1])
console.log("Number 3: ", arrayOfNumbers[2])
console.log("Number 4: ", arrayOfNumbers[3])
console.log("Number 5: ", arrayOfNumbers[4])

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/
console.log("\n--------Exercise 2-----------\n")

let myself = {
    name: "Diana",
    surname: "Berte",
    emailAddress: "dianaberte.go@gmail.com",
    age: "28",
}

console.log(myself)

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

console.log("\n--------Exercise 3-----------\n")

myself.drivingLicense = true;
console.log("This is the myself object after determining whether or not Diana has a driving license:");
console.log(myself)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

console.log("\n--------Exercise 4-----------\n")

delete myself.age;
console.log("We don't care about the age anymore, so we delete the age property:");
console.log(myself)

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

console.log("\n--------Exercise 5-----------\n")

let someoneElse = {
    name2: "Someone",
    surname2: "Else",
    emailAddress2: "randomemail@gmail.com",
}


