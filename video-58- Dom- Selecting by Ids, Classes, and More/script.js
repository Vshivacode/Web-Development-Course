console.log(" i am shiva ")



// getElementsByClassName()
// lets change the background color of a box
let boxes = document.getElementsByClassName("box")  // this displays the element which have the classname = "box"
console.log(boxes)

// lets change the bg color of box-3 means the index will be 2
boxes[2].style.backgroundColor = "red"




// getElementById()
// but if we add some other box between the 1 and 3 boxes then it will apply to the third box only 
// so to apply only to particular box then we use id 
let yellow_box_id = document.getElementById("yellowbox")
// console.log(red_box_id)

// lets change the color of box using id 
yellow_box_id.style.backgroundColor = "yellow"





// using querySelector() this will only use first one not all
// which means if we want to change the first box color only then we can use we can do this with above methods also 

document.querySelector(".box").style.backgroundColor = "green"     // box 1 color changed to green and we used the css function .box  not only the box




// querySelectorAll()
// to change the color of all the boxes then
// we can use querySelectorAll() 
// but it will give the nodeslist and does not change the color of boxes
document.querySelectorAll(".box")


// to change the color of every box then we need to use the loop to access every element 
// lets use forEach loop
document.querySelectorAll(".box").forEach((element)=>{
    // console.log(element)
    element.style.backgroundColor = "skyblue"
})


// using the forof loop because querySelectorAll() gives us an array
// let arr_boxes = document.querySelectorAll(".box")
// for ( const index_value of arr_boxes){
//     console.log(index_value)
//     index_value.style.backgroundColor = "skyblue"
// }


// and we can do this with for loop also
// let arr_boxes = document.querySelectorAll(".box")
// for(let index = 0; index<=arr_boxes; index++){
//     console.log(index)
//     index_value.style.backgroundColor = "skyblue"
// }






// getElementByTagName() it displays all the mentioned tags including parent and child tags also
// lets get all the divs 
console.log(document.getElementsByTagName("div"))


// lets get all the script tags
console.log(document.getElementsByTagName("script"))


// lets get all the span tags
console.log(document.getElementsByTagName("span"))



// using .matches() to check they are same or not
let match = document.getElementsByTagName("div")    // o/p: [div.container, div.box, div.box, div.box, div#yellowbox.box, div.box, div.box, yellowbox: div#yellowbox.box]
console.log(match[4].matches("#redbox"))            // o/p: false



// .closest() it displays the nearest element 
// for example html then it first checks whether it is same or not then it moves to parent element then repeat  
console.log(match[3].closest("html"))



// .contains() it checks whether it contains something or not
// ex: ".container div" contains any "body" or body is inside a container  
// it returns false because body contains the container 
// which means inside the body we have div container
console.log(document.querySelector(".container").contains(document.querySelector("body")))      // o/p: false


// if we change replace conainer and body with each other then it returns "true"
console.log(document.querySelector("body").contains(document.querySelector(".container")))      // o/p: true
