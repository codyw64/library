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


function addBookToLibrary() {
    let temp = new book(document.getElementById("bookTitle").value, document.getElementById("bookAuthor").value, document.getElementById("bookPages").value, document.getElementById("bookRead").checked);
    myLibrary.push(temp);
    displayBooks(myLibrary);
}

function displayBooks(array) { 
    const container = document.getElementById("displayBooks");
    if (container.hasChildNodes() == true) {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    for (let i = 0; i < array.length; i++){
        let text = "";
        let element = array[i];
        const newDiv = document.createElement("div");
        newDiv.id = i;
        let object = element;
        for (let x in object) {
            text += ( x + ": " + object[x] + ", ");
        }
        const newContent = document.createTextNode(text);
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
        newDiv.addEventListener('click', (e) => {
            console.log(newDiv.id);
            let toBeRemoved = document.getElementById(newDiv.id);
            container.removeChild(toBeRemoved);
            myLibrary.splice(newDiv.id, 1);
            console.table(myLibrary);
        })
    }
}

displayBooks(myLibrary);