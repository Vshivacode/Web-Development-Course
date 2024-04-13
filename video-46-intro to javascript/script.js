// this is used to show a popup message when we run the code
alert("hello world")

// this is used in debugging purposes like at which line the code is stopped running we can set
// this will be seen in console section in chrome inspect 
console.log("code is running")


// for example
console.log("i am at main section ")


var a = prompt("enter your number")
console.log("your number is " + a)

isconfirm = confirm("are you sure you want to continue ?")

if(isconfirm){
    console.log(" laptop is saving your data")
}
else{
    console.log("laptop is not saving your data")
}



// to change the title of the webpage we can do this in js also
document.title = "my first js code"


// we can change the color also this will act as a inline css in js
document.body.style.backgroundColor = "red"