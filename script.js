const myLibrary = [{
    author: "J.R.R. Tolkien",
    title: "The Hobbit",
    pages: "295",
    read: true
}, {
    author: "Richard Matheson",
    title: "I am legend",
    pages: "160",
    read: true
}]

// console.log(myLibrary[0].title)
// console.log(myLibrary[1].title)


newBook.addEventListener('click', () => {
    if (document.getElementById('popup').style.visibility = "hidden") {
        document.getElementById('popup').style.visibility = "visible";
    }
})

addBook.addEventListener('click', () => {
    if (document.getElementById('popup').style.visibility = "visible") {
        document.getElementById('popup').style.visibility = "hidden";
    }
})

// function Book(author, title, pages,read) {
//     this.author = author;
//     console.log(author)
// }

function Book() {
    for(var i=0; i<arguments.length; i++){
        console.log(arguments[i]);
   }
   console.log(myLibrary.author[1])
}


Book(...myLibrary)

function addBookToLibrary() {

}

