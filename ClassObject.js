// Example 1
// Making Class
class Car {
    constructor(brand, model) {
        // 'this' refers to the new instance of Car
        this.brand = brand;     
        this.model = model;
    }
    // Method
    start() {
        console.log(`${this.brand} ${this.model} is starting...`);
    }
    // Another method
    drive(speed) {
        console.log(`${this.brand} ${this.model} is driving at ${speed} km/h.`);
    }
}
// Making Objects
const myCar = new Car("Nissan", "Note");
myCar.start(); 
myCar.drive(130); 

//Example 2
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
        //Inside methods of the class, this refers to the object that the method was called on (i.e., the current instance of the class).
        console.log(`${this.owner} deposited $${amount}. New balance: $${this.balance}`);
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds.");
        } else {
            this.balance -= amount;
            console.log(`${this.owner} withdrew $${amount}. New balance: $${this.balance}`);
        }
    }
}
const account = new BankAccount("Customer2025", 1000);
account.deposit(500); 
account.withdraw(200); 
account.withdraw(2000);

//Example 3
// Static methods are utility functions that don’t depend on an instance of the class.
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    static multiply(a, b) {
        return a * b;
    }
}
console.log(MathUtils.add(5, 10)); 
console.log(MathUtils.multiply(5, 10)); 

//Example 4
class Counter {
    #count = 0; // Private field
    increment() {
        this.#count++;
        console.log(`Count is now: ${this.#count}`);
    }
    // Access private field through a public method
    getCount() {
        return this.#count; 
    }
}
const counter = new Counter();
counter.increment(); 
console.log(counter.getCount()); 
// console.log(counter.#count); 
