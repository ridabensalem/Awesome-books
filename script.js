const buttonAdd = document.querySelector('#add');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookDisplay = document.querySelector('#display');
let bookData = new Object();
let bookIndex = 0;

// add book
buttonAdd.addEventListener('click', () => {
    const bookTitleValue = bookTitle.value;
    const bookAuthorValue = bookAuthor.value;
    bookData[bookIndex] = { title: bookTitleValue, author: bookAuthorValue };
    bookIndex++;
    let newDiv = document.createElement("div");
    newDiv.innerHTML = bookData[bookIndex - 1].title + "<br>" + bookData[bookIndex - 1].author + "<br>" + " <button id='remove'>remove</button>" + "<br> <br> <hr>  ";
    bookDisplay.appendChild(newDiv);
    removeEvent(newDiv.querySelector("#remove"), bookIndex-1);
    window.localStorage.setItem("bookData", JSON.stringify(bookData));
});

// remove book
// remove book
const removeEvent = (button, index) => {
    button.addEventListener("click", function() {
        delete bookData[index]
        this.parentNode.remove();
        window.localStorage.setItem("bookData", JSON.stringify(bookData));
    });
}

// return retrieved book
const retrieveAndDisplayData = () => {
    const retrievedBookData = JSON.parse(window.localStorage.getItem("bookData"));
    if(retrievedBookData){
        for(let i = 0; i < Object.keys(retrievedBookData).length; i += 1) {
            let newDiv = document.createElement("div");
            newDiv.innerHTML = retrievedBookData[i].title + "<br>" + retrievedBookData[i].author + "<br>" + " <button id='remove'>remove</button>" + "<br> <br>  ";
            bookDisplay.appendChild(newDiv);
            removeEvent(newDiv.querySelector("#remove"), i);
        }
    }
}

retrieveAndDisplayData();
