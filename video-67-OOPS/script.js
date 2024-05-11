// classes and objects
// class is a blueprint of an object
// objects are the instance of a class means we are creating the objects using the class with his own properties


// class:  is created by using the "class" keyword

// how many constructor we can create in a class ?
// a class have only one constructor because js doesnt support method overloading 
class Animal{
    // constructor(){      // whenever the object is created using a class it always executes the constructor 
    //     // if the constructor is not mentioned js by default it creates a empty constructor
    //     // like this constructor(){} 
    //     console.log("object is created.")
    // }


    // we can pass the parameters to the constructors also
    constructor(name){  
        // why "this" keyword is used ?   
        // when we give parameters in constructor then we need to use this keyword with 
        // this.parameter = parameter because whenever we create an object 
        // and we pass the arguments for the parameter using "this" 
        // it will create a property of that parameter to the newly created object
        this.name = name

        console.log("Name of Animal is: " + name)
    }

    // lets create a function
    eats(){
        console.log("i am eating")
    }

    jumps(){
        console.log("i am jumping")
    }

}


// lets create an object using the Animal class as a blueprint
let r = new Animal("rabbit")     // lion is argument for class Animal
console.log(r)     // it has the functions and constructor that are in Animal class
// how this class Animal works ?
// You define the Animal class with a constructor method that takes a name parameter.
// You create a new instance of the Animal class using new Animal("lion").
// The constructor is called with the argument "lion", and it assigns this value to the name property of the object being created.
// The rabbit object is created with the name property set to "lion".
// You log the rabbit object to the console, which shows the name property along with any other properties or methods inherited from the Animal class.







// class Inheritance: 
// where one class inherits properties and methods from another class 
// using extends and super, is called class inheritance.


// now lets create a class that inherits Animal class
// we need to use extends
// class Lion extends Animal{ // but creating like this no use because we can directly use the Animal class instead of creating another class that has same methods and properties 

// }

// let l = new Lion("lion")
// console.log(l)



console.log("Lion Subclass Starts from Here: ")
// now lets create a class that inherits Animal class and adding another some parameters to it or some additional things
class Lion extends Animal{ // but creating like this no use because we can directly use the Animal class instead of creating another class that has same methods and properties 
    
    
    // we are creating another parameter "age" to this constructor
    // and this "age" is Lion own parameter which we have created using
    // Animal class constructor because we are inheriting Animal class
    constructor(name, age){     
        // we need to use super() to use the constructor that is in Animal class
        // before "this" keyword we need to use super
        // to use the "name" parameter which we have given in Animal class
        // we need to pass that in superclass instead of creating a new one
        super(name)     

        // since we have created another parameter "age" we need to use "this" to initialize that
        // like we did it for Animal class
        this.age = age
        console.log("Object is created and he is a lion ")
    }

    kills(){
        console.log("lion kills and eats animals")
    }
}

let l = new Lion("lion", 24)
console.log(l)








// super() class must be called while inheriting the class from another class 
// if the class does not have any constructor 
// in that case we call super() class without mentioning the parameters
class Sample{
    details(){
        console.log("Sample Class Starts Here:")
    }
}

let d = new Sample()
console.log(d)      // o/p: Sample{}
d.details()         // o/p: details are given by user


// now we do inheriting by creating another class that inherits the Sample class
class Example extends Sample{
    constructor(fname){
        super()
        this.fname = fname
        console.log("fname is: " + fname)
    }

    fullname(){
        console.log("full name is: shiva prasad")
    }
}
let e = new Example("shiva")
console.log(e)

