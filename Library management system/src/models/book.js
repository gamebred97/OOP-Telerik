export class Book {

    static MIN_TITLE_LENGTH = 6;
    static MAX_TITLE_LENGTH = 30;

    static MIN_NAME_LENGTH = 10;
    static MAX_NAME_LENGTH = 32;

    static MIN_AVAILABLE_COPIES = 0;

    static MIN_ISBN = 5;
    static MAX_ISBN = 7;

    title;
    #author;
    #availableCopies;
    isbn;

    constructor(title ,author , isbn ,availableCopies) {
        this.title = this.#validateString(title, Book.MIN_TITLE_LENGTH, Book.MAX_TITLE_LENGTH);
        this.#author = this.#validateString(author, Book.MIN_NAME_LENGTH, Book.MAX_NAME_LENGTH);
        this.availableCopies = availableCopies;
        this.isbn = this.#validateISBN(isbn);
    }

    get isbn(){
        return this.isbn;
    }

    #validateISBN(value,min ,max){
        if (!value || value.length < min || value.length > max) throw new Error('Invalid ISBN!');
        return value;
    }

    get availableCopies(){
        return this.#availableCopies;
    }

    get author(){
        return this.#author;
    }

    get title() {
        return this.title;
    }

    #validateString(value, min , max) {
        if (!value || value.length < min || value.length > max) throw new Error('Invalid input!');

        return value;
    }

    set availableCopies(value){
        if (!value) throw new Error('Invalid Copies input')
        
        if (value < Book.MIN_AVAILABLE_COPIES) throw new Error('Invalid number copies');

        this.#availableCopies = value;
    }

    toString() {
        return `Title: ${this.title}\nAuthor: ${this.#author}\nISBN: ${this.isbn}\nAvailable Copies: ${this.availableCopies}`
    }

}
