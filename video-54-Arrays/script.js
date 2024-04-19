// Arrays are mutable
let arr = [1,2,3,4,5,6,7]
// index:  0,1,2,3,4,5,6
console.log(arr)
console.log(arr.length)
console.log(arr[0], arr[3])     //output: 1  4


// we can change the value of arrays
arr[0] = 100    // changing the index 0 value to 100
console.log(arr)    //output: [100, 2, 3, 4, 5, 6, 7]



console.log(typeof arr)     //o/p: object



// Array methods
//toString()
// we can change entire array to a string and displays as comma seperated string
console.log(arr.toString())     //o/p: 100,2,3,4,5,6,7
console.log(typeof arr.toString())  //o/p: string

// we can also change the single value also inside an array 
console.log(arr[0].toString())      //o/p: 100
console.log(typeof arr[0].toString())      //o/p: string





//join() to join something after each value in array so in place of commas it will be displayed
console.log(arr.join(" number is joined "))     // o/p: 100 number is joined 2 number is joined 3 number is joined 4 number is joined 5 number is joined 6 number is joined 7





//shift() removes the first element from the array
arr.shift()     // first element 100 is removed
console.log(arr)    // o/p: [2, 3, 4, 5, 6, 'shiva']





//pop()  to remove the last value from array so to display what is removed we use console.log
console.log(arr.pop())  // o/p: 7 
console.log(arr)    // o/p: [100, 2, 3, 4, 5, 6]   7 is removed from array





//unshift()  adds an element at starting of array
arr.unshift("prasad")      // adds prasad at starting 
console.log(arr)    // o/p: ['prasad', 2, 3, 4, 5, 6, 'shiva']




//push()  adds an element in array at the end
arr.push("shiva")   // adds shiva at end of array
console.log(arr)    // o/p: [100, 2, 3, 4, 5, 6, 'shiva']




// delete is used to delete an value in array
// but the index will be there that means 
// the length of the array will be same 
// after deleting an element using delete
delete arr[6]

console.log(arr)    // o/p: ['prasad', 2, 3, 4, 5, 6, empty]

// if we access that index arr[6] it will display "undefined"
console.log(arr[6])     // o/p: undefined 

console.log(arr.length)     //o/p: 7






// concat() used to join arrays
let arr1 = [1,2,3,4]
let arr2 = [234,65,34,2,6]
let arr3 = [9,49,20,1]


// to join above two arrays we write like this 
console.log(arr1.concat(arr2))  // o/p: [1, 2, 3, 4, 234, 65, 34, 2, 6]


// if we have more arrays then we do like this 
console.log(arr1.concat(arr2, arr3))    // o/p: [1, 2, 3, 4, 234, 65, 34, 2, 6, 9, 49, 20, 1]


// we can do like this also if we want to display arr3 first , next arr1, next arr2 
console.log(arr3.concat(arr1, arr2))    // o/p: [9, 49, 20, 1, 1, 2, 3, 4, 234, 65, 34, 2, 6]





// sort() is used with compare function to perform sortings in ascending and descending order
// By Default sort() which sorts the elements in alphabetical way read below lines
// but first it converts the array to a string and then performs sorting 
// so for the array: [9, 20, 49, 1] the o/p: [1, 20, 49, 9]
// it will order the numbers comparing the first digit of a number 
// so in above array the generally number 9 is to be on second index 
// but the first digit 9 is greater than other numbers so it is displayed at end
console.log(arr3.sort())

let names = ["shiva", "prasad", "ram", "bal"]
console.log(names.sort())   // o/p: ['bal', 'prasad', 'ram', 'shiva']


// if we add numbers then it displays first numbers then alphabets
let details = ["shiva", "prasad", 2, 0, 980, 12, "ram", "bal"]
console.log(details.sort())     //o/p: [0, 12, 2, 980, 'bal', 'prasad', 'ram', 'shiva']
// console.log(details.reverse())





// splice() is used to add and remove elements in array 
// by mentioning the starting and how many indexes add or remove
let numbers = [1,2,34,4,5,6,7,8,9,20]
// console.log(numbers.splice(1, 4))   // o/p: [2, 34, 4, 5]  are removed from array
// console.log(numbers)    // o/p: [1, 6, 7, 8, 9, 20]


// we can add the elements also at the same time when removing the elements
console.log(numbers.splice(1, 4, 54345347, 48573457))   // o/p: [2, 34, 4, 5]  are removed from array
// 3 numbers removed and two numbers added to array
console.log(numbers)    // o/p: [1, 54345347, 48573457, 6, 7, 8, 9, 20]






// slice() is used to slice some part of elements into a new array 
// slice(1,4) means starts from 1st index and prints upto 3rd index 
// does not including 4th index
let new_arr = [23,14,53,6,7,8,433,2,5,6]
console.log(new_arr.slice(1, 4))    // o/p: [14, 53, 6]


// start displaying from 2nd index till the end then we mention only the starting index 
console.log(new_arr.slice(2))   // o/p: [53, 6, 7, 8, 433, 2, 5, 6]


// we can do slicing from ending also 
// slice(-5) means it starts from ending so the last 5 elements are displayed
// print last 5 elements of an array
console.log(new_arr.slice(-5))  // o/p: [8, 433, 2, 5, 6]


// print first 5 elements of array
console.log(new_arr.slice(0, 5))    // o/p: [23, 14, 53, 6, 7]

