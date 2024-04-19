// for loop using arrays 
let a = [12, 5, 1, 376, 20]

for (let index = 0; index < a.length; index++) {
    const arr_elements = a[index];
    console.log(arr_elements)
}



// we can use foreach loop also 
// lets display the value, index and array 
// order will be: value, index and array
a.forEach((arr_value, arr_index, array_elements)=>{
    console.log("index: " + arr_index, "value: " + arr_value, "array: " + array_elements)
}) 

// // we cannot change the order it display first value, index, array
// a.forEach((arr_index, arr_value, array_elements)=>{
//     console.log("index: " + arr_index, "value: " + arr_value, "array: " + array_elements)
// })





// forin loop  is used for  -- objects
let obj = {
    a: "shiva",
    b: "prasad",
    c: "shiva-23435"
}

for (const key in obj) {
    const key_value = obj[key]
    // console.log(key_value)  
    console.log(key, key_value)     // o/p: displays both keys and values
}





// forof loop  is used for --  Arrays
arr = [23,4,56,32,43456,767,23,4]

for (const index_value of arr) {
    console.log(index_value)
}