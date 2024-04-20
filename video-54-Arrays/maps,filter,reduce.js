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






// reduce() is like doing factorial 