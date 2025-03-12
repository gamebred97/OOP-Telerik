import { Book } from "./book.js";

export class User {

    static USER_MIN = 8;
    static USER_MAX = 25;

    static userId = 0;
    user;
    #borrowedBooks;

    constructor(user){
        this.user = this.#validateUser(user);
        this.userId = User.generateID()
        this.#borrowedBooks = [];
    }


    get borrowedBooks(){
        return this.#borrowedBooks
    }

    get user() {
        return this.user;
    }

    #validateUser(value, min, max){
        if (!value || value.length < min || value.length > max) throw new Error('Invalid input!');

        return value;
    }

    static generateID(){
        this.userId++;
        return this.userId
    }

    borrowBook(book){
        if (!(book instanceof Book)) throw new Error('Not and instance of Book');

        if(this.#borrowedBooks.includes(book)) throw new Error('Book already exists');

        this.#borrowedBooks.push(book);
        console.log(`${this.user} borrowed "${book.title}".`)

    }

    returnBook(book){
        if (!this.#borrowedBooks.includes(book)) throw new Error('Such book does not exist')

            const index = this.#borrowedBooks.indexOf(book)
            
            this.#borrowedBooks.splice(index, 1);
    }
}