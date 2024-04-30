let button = document.getElementById("btn")


// " click "   when button is clicked it shows an alert 
button.addEventListener("click",()=>{
    alert("i am clicked")
})


// when button is clicked we change the content of the box
let changeContent = document.getElementById("change-content")

changeContent.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = " hey i changed the content by clicking"
})



// " contextmenu "  to listen to right click of a mouse then we use 
changeContent.addEventListener("contextmenu", ()=>{
    alert("dont right click on button")
})




// lets see with keyboard listeners 
// keydown
// whenever we press any key on keyboard it listens what we clicked
// lets see in console 
document.addEventListener("keydown", (element)=>{
    console.log(element)
})  // o/p: KeyboardEvent {isTrusted: true, key: 's', code: 'KeyS', location: 0, ctrlKey: false, …}


// so lets print only the key and the keycode 
document.addEventListener("keydown", (element)=>{
    console.log(element.key, element.keyCode)
})  // o/p: s 83