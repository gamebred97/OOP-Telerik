import { Library } from "./library.js";

export class DigitalLibrary extends Library {

    constructor(name) {
        super(name);
    }

    addBook(book){
        super.addBook(book)
    }

    downloadBook(book){
        super.addBook(book)
    }

    displayBooks(){
        return super.books.map(book => book.toString()).join("\n\n");
    }
}

