// Function to retrieve a list of all books
function getBooks() {
    fetch('/api/books')
        .then(response => response.json())
        .then(data => displayBooks(data))
        .catch(error => console.error('Error:', error));
}

// Function to display books in the list
function displayBooks(books) {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach(book => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.title} by ${book.author}`;
        bookList.appendChild(listItem);
    });
}

// Function to add a new book
function addBook() {
    const title = prompt('Enter book title:');
    const author = prompt('Enter author name:');

    if (title && author) {
        fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, author }),
        })
            .then(response => response.json())
            .then(data => {
                alert('Book added successfully!');
                getBooks(); // Refresh the book list
            })
            .catch(error => console.error('Error:', error));
    }
}
