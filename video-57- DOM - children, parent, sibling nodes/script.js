console.log("hello world")

// document.body

// document.body.childNodes

// document.body.div.container.childNodes

// document.body.childNodes[0]


// document.body.childNodes[1]

// document.body.childNodes[1].childNodes



// // this will print with text nodes also 
// document.body.firstElementChild.childNodes

// // to print without text nodes we write like this 
// document.body.childNodes
// let cont = document.body.childNodes[1]
// cont.firstElementChild




// this is the comment node output
document.body.childNodes[1].childNodes
// o/p: NodeList(13) [text, comment, text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text]


// this is the code using children it will display the elements which are inside a other element 
document.body.firstElementChild.children
// o/p: HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]


// we can access those elements also
document.body.firstElementChild.children[1]
// o/p: <div class="box">Box 2</div>



// using nextelementsibling, previouselementsibling
document.body.firstElementChild.children[3]
// o/p: <div class=​"box">​Box 4​</div>​

document.body.firstElementChild.children[3].previousElementSibling
// o/p: <div class=​"box">​Box 3​</div>​

document.body.firstElementChild.children[3].nextElementSibling
// o/p: <div class=​"box">​Box 5​</div>​




// using parent element
document.body.firstElementChild.children[3].previousElementSibling
// o/p: <div class=​"box">​Box 3​</div>​




// to display the text-nodes, comment-nodes, html element-nodes then we use
document.body.childNodes    //  o/p: NodeList(7) [text, div.container, text, table, text, script, text]


// to display only the html element nodes then we use 
document.body.children      // o/p: HTMLCollection(3) [div.container, table, script]


// to display only the first html element then we use
document.body.firstElementChild     // o/p: <div class="container">box1, box2, ..... box5</div>




// using the .rows for table elements in html
document.body.children[1]   // o/p: <table>...</table>  

// to get rows of a table we use .rows 
document.body.children[1].rows  // o/p: [tr.table-headings, tr.table-data]