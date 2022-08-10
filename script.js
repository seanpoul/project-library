let myLibrary = []

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(newBook) {
    const table = document.getElementById("bookData");
    newBook.forEach(item => {
        let row = table.insertRow();
        this.author = row.insertCell(0);
        this.title = row.insertRow(1)
        this.pages = row.insertRow(2)
        this.read = row.insertRow(3)

    });
}



const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read")
