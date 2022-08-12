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
}, {
    author: "J.R.R. Tolkien",
    title: "The Hobbit",
    pages: "295",
    read: true
}]

const headers = ["Author", "Title", "Pages", "Finished", "Remove"]
const newBook = document.getElementById('newBook');
const addBook = document.getElementById('addBook');

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

let table = document.createElement("TABLE");

function createTable() {
    let header = table.createTHead();
    let headerRow = header.insertRow(0);

    for (let i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).textContent = headers[i];
    }

    document.body.append(table);
}

createTable(...headers)

let checkbox;
let removeBtn = document.createElement("BUTTON");
let body = table.createTBody();
let bodyRow = body.insertRow(0);

let getTable = document.getElementById("allBooks");

removeBtn.type = "button";

function Book() {
    // create new book slot but not yet add to table
    for (let i = 1; i < arguments.length + 1; i++) {
        checkbox = document.createElement("INPUT");
        checkbox.type = "checkbox";
        removeBtn = document.createElement("BUTTON");
        removeBtn.textContent = "Remove"
        bodyRow = table.insertRow(i);
        bodyRow.className = "bookInfo";
        bodyRow.id = "row" + i;
        bodyRow.insertCell(0).textContent = myLibrary[i - 1].author;
        bodyRow.insertCell(1).textContent = myLibrary[i - 1].title;
        bodyRow.insertCell(2).textContent = myLibrary[i - 1].pages;

        if (myLibrary[i - 1].read == false) {
            bodyRow.insertCell(3).append(checkbox);
            checkbox.checked = false;
        }
        else if (myLibrary[i - 1].read == true) {
            bodyRow.insertCell(3).append(checkbox);
            checkbox.checked = true;
        }

        removeBtn.id = "btn" + i;
        removeBtn.className = "kill";
        bodyRow.insertCell(4).append(removeBtn);

        removeBtn.addEventListener('click', (e) => {
            deleteRow(e)
        })

    }
}

Book(...myLibrary)


function addBookToLibrary() {
    // add to table only


}


function deleteRow(e) {
    e.target.parentElement.parentElement.remove();
}
