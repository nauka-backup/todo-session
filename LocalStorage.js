// Store Class: Handles Storage
class LocalStorage {
    static getBooks() {
        let books;
        if (localStorage.getItem('books') === null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('books'));
        }

        return books;
    }

    static addBookToLocalStorage(book) {
        const books = LocalStorage.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBookFromLocalStorage(title) {
        const books = LocalStorage.getBooks();

        // console.log('isbn ' + isbn);
        // let title = isbn;
        // let match = title.includes(isbn);
        // console.log(match);

        books.forEach((book, index) => {
            if (title.includes(book.title)) {
                books.splice(index, 1);
                // console.log('działa');
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}
