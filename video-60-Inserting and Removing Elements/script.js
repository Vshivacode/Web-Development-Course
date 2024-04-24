// innerHTML only displays the inside content of a element
console.log(document.querySelector(".container").innerHTML)     //      <div class="box">i am a box</div>
console.log(document.querySelector(".box").innerHTML)   // i am a box


// outerHTML displays both outside of element and inside element
console.log(document.querySelector(".container").outerHTML)     // <div class="container"><div class="box">i am a box</div></div>
console.log(document.querySelector(".box").outerHTML)       // <div class="box">i am a box</div>


// innerText to display the text in the element
console.log(document.querySelector(".container").innerText)     // i am a box


// tagName is used to display only element nodes which tag it is
console.log(document.querySelector(".container").tagName)   // o/p: DIV


// nodeName is used to display the text, comment, and element nodes which tag it is
console.log(document.querySelector(".container").nodeName)  // o/p: DIV


