// console.log("hey shiva you are consistent")
// console.log("hey shiva you are good")
// console.log("hey shiva you are developer")



// instead of doing the same thing so many times we can use function 
// we can create a function using fucntion keyword with fumction name and parameters
function nice(name){
    console.log("hey " + name + "you are consistent")
    console.log("hey " + name + " you are good")
    console.log("hey " + name + " you are developer")
}

nice("shiva")

nice("prasad")





// creating a function that do addition 

function add(a, b){
    console.log(a + b)
}

result = add(2, 5)

console.log("the sum of the numbers is: " + result)    // this does not give any output 
// because js does not the value add(2, 7) it gives undefined



// to store the function value to some other variable we use "return a + b" instead of using console.log(a + b)
function add_num(a, b){
    return a + b
}

result_add_num = add_num(2,10)

console.log("the sum of the numbers is: " + result_add_num) 






// optional parameters
function add_num(a, b, c = 4){
    return a + b + c
}

result_add_num = add_num(2,10)

console.log("the sum of the numbers is: " + result_add_num) 





// Arrow Functions
// to store the function in a variable we can use the arrow function

function without_arrow_fn (a, b){
    return a + b
}

result = without_arrow_fn(3,5)

console.log("i am an arrow funtion " + without_arrow_fn)


const with_arrow_fn = (a, b) => (a + b)

// Traditional function
function add(a, b) {
    return a + b;
  }
  
  // Arrow function
  const add = (a, b) => a + b;
  
  // Traditional function with implicit return
  function square(x) {
    return x * x;
  }
  
  // Arrow function with implicit return
  const square = x => x * x;
  
  // Traditional function with multiple parameters
  function multiply(a, b, c) {
    return a * b * c;
  }
  
  // Arrow function with multiple parameters
  const multiply = (a, b, c) => a * b * c;