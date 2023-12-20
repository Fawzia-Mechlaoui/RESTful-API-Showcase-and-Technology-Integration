const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { id: 6, title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez' },
    { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien' },
    { id: 8, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
    { id: 9, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
    { id: 10, title: 'The Chronicles of Narnia', author: 'C.S. Lewis' }
];

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.post('/api/books', (req, res) => {
    const newBook = req.body;
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
