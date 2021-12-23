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
            let newLine = document.createElement("p");
            newLine.id = x + i;
            newLine.textContent = ( x + ": " + object[x]);
            newDiv.appendChild(newLine);
        }
        const newContent = document.createTextNode(text);
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
        newDiv.className = "displayBook";
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "delete this";
        const changeReadButton = document.createElement("button");
        changeReadButton.textContent = "change this books read status";
        newDiv.appendChild(changeReadButton);
        newDiv.appendChild(deleteButton);
        deleteButton.addEventListener('click', (e) => {
            console.log(newDiv.id);
            let toBeRemoved = document.getElementById(newDiv.id);
            container.removeChild(toBeRemoved);
            myLibrary.splice(newDiv.id, 1);
            console.table(myLibrary);
        })
        changeReadButton.addEventListener('click', (e) => {
            let newLine = document.createElement("p");
            const toBeReplaced = document.getElementById("Read" + i);
            newLine.id = "Read" + i;
            console.log(array[i].Read);
            if(array[i].Read == true) {
                newLine.textContent = "Read: false";
                array[i].Read = false;
            } else if (array[i].Read == false) {
                newLine.textContent = "Read: true";
                array[i].Read = true;
            }
            console.log(array[1].Read);
            newDiv.replaceChild(newLine, toBeReplaced);

        })
    }
}

displayBooks(myLibrary);