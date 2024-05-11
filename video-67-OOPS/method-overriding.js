// Method Overriding
// so we are using the same method in our subclass that is method overriding
console.log("Method Overriding Starts Here: ")
// Define a superclass Animal
class Animals {
    // Constructor
    constructor(name) {
        this.name = name;
    }

    // Method
    makeSound() {
        console.log("Generic animal sound");
    }
}

let ani = new Animals()
ani.makeSound()


// Define a subclass Dog that extends Animal
class Dog extends Animals {
    // Constructor
    constructor(name) {
        // Call the superclass constructor
        super(name);
    }

    // Override the makeSound method
    makeSound() {
        console.log("Woof!");
    }
}

// Define another subclass Cat that extends Animal
class Cat extends Animals {
    // Constructor
    constructor(name) {
        // Call the superclass constructor
        super(name);
    }

    // Override the makeSound method
    makeSound() {
        console.log("Meow!");
    }
}

// Create instances of Dog and Cat
let dog = new Dog("Buddy");
let cat = new Cat("Whiskers");

// Call the makeSound method on each instance
dog.makeSound(); // Output: Woof!
cat.makeSound(); // Output: Meow!






// instanceof
// checking whether the object is instance of a class or not and
//  also we can check subclass objects the parent class  
// example 
// dog is the instance of Dog 
// cat is also the instance of Cat 
// because these are the objects of Dog and Cat classes


// we can check like this: " <objectname> instanceof <classname> "
console.log(dog instanceof Dog)     // o/p: true
console.log(cat instanceof Cat)     // o/p: true



// Checking Subclass object with Parent class
// if we check with parent class then also it gives true 
// because they are inherited by the Animal class
console.log(dog instanceof Animals)     // o/p: true
console.log(cat instanceof Animals)     // o/p: true



//checking Parent class object with Subclass
// but if we check animals instanceof of dog or animals instanecof cat 
// it gives false 
// because animals class is not created using those subclasses
console.log(ani instanceof Dog)     // o/p: false
console.log(ani instanceof Cat)     // o/p: false
