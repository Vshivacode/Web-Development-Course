// square of array elements and store in a new array
let arr = [2,354,53,64,365, 100, 92]


// using forof loop
let new_arr = []

for (const iterator of arr) {
    // console.log(iterator)
    square = iterator**2
    new_arr.push(square)
}
// console.log(new_arr)


// we can do this in simple way using map 
// map(index_value, index, array)
let arr_using_map = arr.map((index_value)=>{
    return index_value ** 2
})
console.log(arr_using_map)


// we can do like this also 
// " => " arrow function acts as a callback function that return the square of every element
let arr_map = arr.map((index_value) => (index_value ** 2))
console.log(arr_map)





// filter() 
// lets create a function to use this filter
// to display the elements that are greater than some number
const greaterThanSeventy = (element) => {
    if(element > 70){
        return true
    }
    else return false
}

console.log(arr.filter(greaterThanSeventy))






// reduce() is like doing factorial to the numbers
let arr2 = [1,2,3,4,5,]                 // first iteration - first number: 1 + second number: 2 = 3

function add_num(a, b){                 // result of first iteration: 3 + third number: 3 = 6 
    return a + b                        // result of second iteration: 6 + fourth number: 4 = 10
}                                       // result of third iteration: 10 + fifth number: 5 = 15

// we can write like also for function using arrow function
const mul_num = (a, b)=>{
    return a * b
}

console.log(arr2.reduce(add_num))   // o/p: 1 + 2 + 3 + 4 + 5 = 15

console.log(arr2.reduce(mul_num))   // o/p: 1 * 2 * 3 * 4 * 5 = 120






// " Array.from "
// lets create an array from a string using "array.from"
let role = "developer"
console.log(Array.from(role))   // o/p: ['d', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

