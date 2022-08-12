const myLibrary = []

const headers = ["Author", "Title", "Pages", "Finished", "Remove"]
const newBookBtn = document.getElementById('newBookBtn');
const addBookBtn = document.getElementById('addBookBtn');

newBookBtn.addEventListener('click', () => {
    if (document.getElementById('popup').style.visibility = "hidden") {
        document.getElementById('popup').style.visibility = "visible";
    }
    document.getElementById('popup').reset();
})

addBookBtn.addEventListener('click', () => {
    if (document.getElementById('popup').style.visibility = "visible") {
        document.getElementById('popup').style.visibility = "hidden";
    }
    book();
})

let table = document.createElement("TABLE");
let body;

function createTableLayout() {
    table.innerHTML = "";

    let header = table.createTHead();
    let headerRow = header.insertRow(0);
    let checkbox;
    let removeBtn = document.createElement("BUTTON");
    body = table.createTBody();
    let bodyRow = body.insertRow(0);

    removeBtn.type = "button";

    for (let i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).textContent = headers[i];
    }

    document.body.append(table);

    console.log(arguments.length)

    for (let i = 1; i < arguments.length + 1; i++) {
        checkbox = document.createElement("INPUT");
        checkbox.type = "checkbox";
        removeBtn = document.createElement("BUTTON");
        removeBtn.textContent = "Remove"
        bodyRow = table.insertRow(i);
        bodyRow.insertCell(0).textContent = myLibrary[i - 1][0];
        bodyRow.insertCell(1).textContent = myLibrary[i - 1][1];
        bodyRow.insertCell(2).textContent = myLibrary[i - 1][2];

        if (myLibrary[i - 1][3] == false) {
            bodyRow.insertCell(3).append(checkbox);
            checkbox.checked = false;
        }
        else if (myLibrary[i - 1][3] == true) {
            bodyRow.insertCell(3).append(checkbox);
            checkbox.checked = true;
        }

        bodyRow.insertCell(4).append(removeBtn);

        removeBtn.addEventListener('click', (e) => {
            deleteBtnRow(e)
        })
    }
}

let authorInput;
let titleInput;
let pagesInput;
let formCheckbox;
let createNewBookInfo = [];

function book() {
    authorInput = document.getElementById('author').value;
    titleInput = document.getElementById('title').value;
    pagesInput = document.getElementById('pages').value;
    formCheckbox = document.getElementById('read').checked;
    createNewBookInfo = [authorInput, titleInput, pagesInput, formCheckbox]
    myLibrary.push(createNewBookInfo)
    addBookToLibrary(...myLibrary)
}

function addBookToLibrary() {
    createTableLayout(...myLibrary)
}

function deleteBtnRow(e) {
    console.log(e);
    let getIndexNum = Array.from(body.children).indexOf(e.target.parentElement.parentElement)
    console.log(getIndexNum)
    e.target.parentElement.parentElement.remove(getIndexNum);
    myLibrary.splice(getIndexNum, 1);
}