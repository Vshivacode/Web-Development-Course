console.log("code is running...")

var a = 23;
var b = 10;


// we can directly assign the values also without using var 
// by default it uses it as "var"
c = "shiva";


// "var" can be updated and re-declared within its scope and it is globally scope
a = 50

// console.log(a + b + c)

// concatenating the string and number
// console.log(a + " b " + c)


// to see the type of a variable we use "typeof" 
// console.log(typeof a, typeof(b), typeof c)



// using "let" for creating variables 
// and using let we cannot re-declare the variables and it is block scope
let x = 100;
y = 200;
z = x + y

// console.log(z)

// lets try to re-declare the variable x, it gives error 
// let x = "shiva"


// we can update the variable let x value by without using the "let",  value updated  
x = "shiva"

// console.log(z)





// lets see the "const" variable 
// "const" variable neither updated nor re-declared and it is block scope
const p = 10;
const q = " shiva ";



// lets try to re-declare the varible,  gives error
// const p = "shiva";


// lets try to update this variable,   it gives error
// in vs code it wont show the red underline at console it gives error
// p = 300;

console.log(p + q)
