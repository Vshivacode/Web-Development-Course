// Imagine you are creating a magical sorting hat for a wizard school.
// Implement a JavaScript function that takes an array of student names 
// and assigns them to one of the four houses 
// (Gryffindor (length less than 6), Hufflepuff(length less than 8), 
// Ravenclaw(length less than 12), or 
// Slytherin(length greater than or equal to 12)) 
// based on the length of their names.

let students = ["shiva", "dinesh", "prasad", "bharath", "ram", "raju",
 "krishnanad", "rudra prasad", "developer"]

 // here we need to check all the array elements length and we 
 // check their length with conditions and replace them with house names
 let houses = []

 for (const student of students) {
    if(student.length < 6) {
        houses.push(`House: Gryffindor and length of ${student}: ${student.length}`)
    }  
    else if (student.length < 8){
        houses.push(`House: Hufflepuff and length of ${student}: ${student.length}`)
    }
    else if (student.length < 12){
        houses.push(`House: Ravenclaw and length of ${student}: ${student.length}`)
    }
    else{
        houses.push(`House: Slytherin and length of ${student}: ${student.length}`)
    }
 }
 console.log(houses)