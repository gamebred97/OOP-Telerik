import { Book } from "./book.js";
import { User } from "./user.js";

export class Library {

    books;
    users;
    #name;

    constructor(name) {
        this.#name = this.#validateName(name);
        this.books = [];
        this.users = [];
    }

    get name() {
        return this.#name;
    }

    #validateName(value) {
        if (!value || value < Book.MIN_NAME_LENGTH || value > Book.MAX_NAME_LENGTH) throw new Error("Invalid Library name");

        return value;

    }

    

    addBook(book){
        if (!(book instanceof Book)) throw new Error('Not and instance of Book');

        if(this.books.includes(book)) throw new Error('Book already exists');

        this.books.push(book);

    }

    removeBook(book) {
        if (!this.books.includes(book)) throw new Error('Such book does not exist')

        const index = this.books.indexOf(book)
        
        this.books.splice(index, 1);
    }

    registerUser(user){
        if (!(user instanceof User)) throw new Error('Not and instance of Book');

        if(this.users.includes(user)) throw new Error('Book already exists');

        this.users.push(user);

    }

    findBook(isbn){
        const res = []

        this.books.forEach(el => { 

            if (el.isbn === isbn) {
                res.push(el);
              }
            
        });
        return res.length > 0 ? res : null;
       
    }

    listAvailableBooks(){
        return this.books.map(book => book.toString()).join("\n\n");
    }
   
}