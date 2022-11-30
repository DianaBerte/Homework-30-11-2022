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

console.log("Verifying that the email address of the object myslef is different than the email address of object someoneElse:")
console.log(myself.emailAddress !== someoneElse.emailAddress2)

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

console.log("\n--------Exercise 6-----------\n")

let totalShoppingCart  = 51;
if (totalShoppingCart > 50) {
    console.log("Congratulations! You're eligible for free shipping.");
    } else {
        console.log("Sorry, you are not eligible for free shipping.")
    }

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

console.log("\n--------Exercise 7-----------\n")



