let myLibrary = [];

function book(title, author, pages, read) {
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
}

const theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 310, false);
const hungerGames = new book("The Hunger Games", "Suzanne Collins", 374, true);
const harryPotterFirst = new book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 223, false);

myLibrary.push(theHobbit);
myLibrary.push(hungerGames);
myLibrary.push(harryPotterFirst);

const container = document.getElementById("displayBooks");

function addBookToLibrary() {
    let temp = new book(document.getElementById("bookTitle").value, document.getElementById("bookAuthor").value, document.getElementById("bookPages").value, document.getElementById("bookRead").checked);
    myLibrary.push(temp);
    const newDiv = document.createElement("div");
    let object = temp;
    let text = "";
    for (let x in object) {
        text += ( x + ": " + object[x] + ", ");
    }
    const newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);
    container.appendChild(newDiv);
}

function displayBooks(array) { 
    if (container.hasChildNodes() == true) {
        console.log("has children!");
        return;
    }
    console.log("doesnt have children");
    for (let i = 0; i < array.length; i++){
        let text = "";
        let element = array[i];
        const newDiv = document.createElement("div");
        let object = element;
        for (let x in object) {
            text += ( x + ": " + object[x] + ", ");
        }
        const newContent = document.createTextNode(text);
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
    }
}

displayBooks(myLibrary);