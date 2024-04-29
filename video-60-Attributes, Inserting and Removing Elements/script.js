// innerHTML only displays the inside content of a element
console.log(document.querySelector(".container").innerHTML)     //      <div class="box">i am a box</div>
console.log(document.querySelector(".box").innerHTML)   // i am a box


// outerHTML displays both outside of element and inside element
console.log(document.querySelector(".container").outerHTML)     // <div class="container"><div class="box">i am a box</div></div>
console.log(document.querySelector(".box").outerHTML)       // <div class="box">i am a box</div>


// innerText to display the text in the element
console.log(document.querySelector(".container").innerText)     // i am a box 1 i am a box 2


// tagName is used to display only element nodes which tag it is
console.log(document.querySelector(".container").tagName)   // o/p: DIV


// nodeName is used to display the text, comment, and element nodes which tag it is
console.log(document.querySelector(".container").nodeName)  // o/p: DIV


// textContent is used to displayt the text with new lines also like \n the empty lines
console.log(document.querySelector(".container").textContent)     // \n        i am a box \n


// .hidden = true means it will hidden the element 
// console.log(document.querySelector(".container").hidden = true)     // o/p:    empty because it is hidden 


// in the same way we can change the value of an element like changing the text 
// using = to the element 
console.log(document.querySelector(".container").innerHTML = "hey i am shiva")      // o/p: hey i am shiva




// Attribute Methods
// hasAttribute() which checks whether it has that attribute or not like style attribute
console.log(document.querySelector(".container").hasAttribute("style"))     // o/p: true


// getAttribute() which gives the which type of attribute is used
console.log(document.querySelector(".container").getAttribute("style"))     // o/p: background-color: red


// setAttribute() which is used to change the attribute
// lets change the bg color to blue
console.log(document.querySelector(".container").setAttribute("style", "background-color: blue"))


// .attributes   is used to get all the attributes
console.log(document.querySelector(".container").attributes)    // o/p: NamedNodeMap {0: class, 1: style, class: class, style: style, length: 2}



// .designMode = "on" means we can change the website like a editor 
console.log(document.designMode = "on")     // o/p: click on text to change


// Data Methods: its we can set the attribe to know who created this 
// first we need to create this in html file not in js file 
// using data- at the staring we create in container 

// .dataset    in js file to see what are the data attributes we use this
console.log(document.querySelector(".container").dataset)   // o/p: DOMStringMap {createdby: 'shiva'}


// Insertion Methods
 // lets add another div inside insert-method div 
 let new_div = document.createElement("div");
 new_div.innerHTML= "i am inserted by shiva"
 new_div.setAttribute("class", "new-div");



 // Insertion method using append with node elements like html elements, text nodes, comment nodes, attribute nodes like class, id, src, etc
 // lets add another div we use append and this will add a new element at the end inside an element
 document.querySelector(".container").append(new_div);


 // lets add another div but before the element we use "before" and this will add a new div element before container
 document.querySelector(".container").before(new_div);


// after also same as before but it adds after the container element
document.querySelector(".container").after(new_div);




// but if we want to use with html elements we can also use this methods
// insertAdjacentHTML/text/Element 
// insertAdjacentHTML: for adding some html element we use 
// insertAdjacenttext: for adding text we use 
// insertAdjacentElement: for adding Element we use 


// inside this we have 4 options 
// beforebegin: it adds a new html element before an element
// afterbegin: it adds new html element inside an element
// beforeend: it adds new html element inside an element but adds at the end
// afterend: it adds a new html element after an element


// lets add html element div 
// beforebegin
// console.log(document.querySelector(".container").insertAdjacentHTML("beforebegin", "<div>i am a div block created using insert method</div>"))

// afterbegin
// console.log(document.querySelector(".container").insertAdjacentHTML("afterbegin", "<div>i am a div block created using insert method</div>"))

// beforeend
// console.log(document.querySelector(".container").insertAdjacentHTML("beforeend", "<div>i am a div block created using insert method</div>"))

// afterend
// console.log(document.querySelector(".container").insertAdjacentHTML("afterend", "<div>i am a div block created using insert method</div>"))



// .removeAttribute() is used to remove the attribute
// lets remove the style attribute 
console.log(document.querySelector(".container").removeAttribute("style"))      // style attribute is removed check the code in chrome not in vscode


// .remove() is used to remove entire element
// lets remove the div block 
// console.log(document.querySelector(".container").remove())      // .container is removed check the code in chrome not in vscode



// .classList
// to get all the classlist like for an element what are the class are there 
console.log(document.querySelector(".container").classList)      // o/p: DOMTokenList(3) ['container', 'div-box', 'first-div', value: 'container div-box first-div']


// className 
// to get all the class names  that are created for an element 
console.log(document.querySelector(".container").className)      // o/p: container div-box first-div




// .classList.add()
// it creates a new class to the element
console.log(document.querySelector(".container").classList.add("added-class"))  // o/p: class="container div-box first-div added-class"


// .classList.remove()
// it removes the existing class from the element
console.log(document.querySelector(".container").classList.remove("added-class"))  // o/p: class="container div-box first-div"




// .toggle()
// it is used to like a switch if it is on if we toggle then it becomes off 
// and if it is off then if we toggle then it becomes on 
// lets add some bg color: green to insert-method class in html
// run this in console to see 
console.log(document.querySelector(".insert-method").classList.toggle("green"))     // bg becomes green color
