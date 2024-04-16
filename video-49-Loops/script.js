console.log("Loops")


// types of loops
// 1. for loop
// 2. for in loop
// 3. for of loop
// 4. while loop
// 5. do while loop
let a = 0;

// for loop - printing the numbers 100
// for (let i=0; i<=100; i++){
//     console.log(a + i)
// }




// forin loop - is used when we want to loop an object
let obj = {
    name: "shiva",
    role: "developer",
}

for (const keyname in obj) {
    const element = obj[keyname];       
    // console.log(element)     //prints only the value of the keys
    console.log(keyname, element)   //prints keys and value of an object
}




// forof loop - this is used in iterables like arrays, strings
// let arr = [1,2,3,4,5]
// for (const arr_elements of arr) {
//     console.log(arr_elements)
// }





//while loop - 
// let i = 0
// while(i<6){
//     console.log(i)
//     i++
// }




// do while loop -
let i = 10
do {
    console.log(i)
    i++
} while (i<5);