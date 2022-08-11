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

const headers = ["Author", "Title", "Pages", "Finished", "Remove"]

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

function Book() {
    // create new book slot but not yet add to table

    let body = table.createTBody();

    let bodyRow = body.insertRow(0);

    for (let i = 1; i < arguments.length + 1; i++) {
        checkbox = document.createElement("INPUT");
        checkbox.type = "checkbox";
        let remove = document.createElement("BUTTON");
        remove.type = "button";
        remove.textContent = "Remove"
        bodyRow = table.insertRow(i);
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

        bodyRow.insertCell(4).append(remove);

        // console.log(myLibrary[i - 1].read)

    }
}



Book(...myLibrary)

function addBookToLibrary() {
    // add to table only




}

