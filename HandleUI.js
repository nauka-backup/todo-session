let liElements = document.getElementsByClassName('task');
const taskNumber = document.querySelector('h1 span');

class HandleUI {
    static displayBooks() {
        const books = LocalStorage.getBooks();

        books.forEach((book) => HandleUI.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.querySelector('.todo');

        const li = document.createElement('li');
        li.innerHTML = `${book.title} <button class="delete">x</button>`;
        li.className = 'task';
        taskNumber.textContent = liElements.length + 1;
        // console.log('liElements.length ' + liElements.length);
        list.appendChild(li);
    }

    static deleteBook(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.remove();
            taskNumber.textContent = liElements.length;
        }
    }

    static showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('.form-control');
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000);
    }

    static clearFields() {
        document.querySelector('#title').value = '';
    }
}
