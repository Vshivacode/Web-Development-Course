let box_color = document.getElementsByClassName("box");

// box_color[0].style.backgroundColor = "red"


// let rand_color_red = Math.floor(Math.random()*255)+1
// let rand_color_green = Math.floor(Math.random()*255)+1
// let rand_color_blue = Math.floor(Math.random()*255)+1
// console.log(rand_color_red, rand_color_green, rand_color_blue)


// let rand_box = Math.floor(Math.random()*5)
// box_color[rand_box].style.backgroundColor = "rgb(" + rand_color_red + "," + rand_color_green + "," + rand_color_blue + ")"




// to change all the boxes at the same time then we need to use querySelectorAll() and using for loop
let all_boxes = document.querySelectorAll(".box")

function getRandomColor(){
    let rand_color_red = Math.floor(Math.random()*255)+1
    let rand_color_green = Math.floor(Math.random()*255)+1;
    let rand_color_blue = Math.floor(Math.random()*255)+1;
    return `rgb( ${rand_color_red}, ${rand_color_green}, ${rand_color_blue})`
}

all_boxes.forEach(element => {
    element.style.backgroundColor = getRandomColor()
});