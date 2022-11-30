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

let totalShoppingCart2 = [10, 15, 25];
let discount = 20;

for (let i = 20; i < totalShoppingCart2.length;
    i++) {
        discount += totalShoppingCart2[i]
    }

console.log(totalShoppingCart2)

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

console.log("\n--------Exercise 8-----------\n")

let car1 = {
    brand: "Mercedes",
    model: "X",
    licensePlate: "PF563WR"
}

let car2 = {}
car2 = Object.assign(car2, car1);

car2.licensePlate = "AB563AB"

let car3 = {}
car3 = Object.assign(car3, car2)

car3.licensePlate = "CD563CD"

let car4 = {}
car4 = Object.assign(car4, car3)

car4.licensePlate = "EF563EF"

let car5 = {}
car5 = Object.assign(car5, car4)

car5.licensePlate = "ZY563ZY"

console.log("Car 1:", car1)
console.log("Car 2:", car2)
console.log("Car 3:", car3)
console.log("Car 4:", car4)
console.log("Car 5:", car5)

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

console.log("\n--------Exercise 9-----------\n")

let carsForRent = [car1, car2, car3, car4, car5]
console.log("Array of cars:", carsForRent)

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("\n--------Exercise 10-----------\n")

carsForRent.splice(0, 1, 0);
console.log("We remove the first element:", carsForRent)

console.log("We remove the last element:");
carsForRent.pop();
console.log(carsForRent)

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log("\n--------Exercise 11-----------\n")

console.log(typeof car1, typeof car1.licensePlate, typeof car1.brand);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

console.log("\n--------Exercise 12-----------\n")

let carsForSale = [];
carsForSale.splice(0, 0, car3);
carsForSale.splice(1, 0, car4);
carsForSale.splice(2, 0, car5);
console.log("We added Car3, Car4 and Car5 to the empty array carsForSale:", carsForSale)

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

console.log("\n--------Exercise 13-----------\n")

for (let i = 0; i < carsForSale.length; i++) {
    let carsToPrint = carsForSale[i];
    console.log("Cars for Sale:", carsToPrint);
}


