import { libraryShelf } from '../common/library-shelf.js';

/**
 * Represents a library that organizes books into shelves.
 */
export class Library {

  /**
   * Creates an instance of Library.
   */
  constructor() {
    this._shelves = {};
  }

  /**
   * Adds a book to a specified shelf.
   * @param {Book} book - The book to be added.
   * @param {string} shelf - The shelf where the book will be placed.
   * @throws {Error} If the specified shelf does not exist in libraryShelf.
   */
  addBook(book, shelf) {

    if (!Object.values(libraryShelf).includes(shelf)) {
      throw new Error('Such shelf does not exist');
    }


    if (!this._shelves[shelf]) {
      this._shelves[shelf] = [];
    }

    this._shelves[shelf].push(book);
  }

  /**
   * Prints the list of books organized by shelves.
   * @return {string} A formatted string containing the books in the library.
   */
  printBooks() {

    let result = '';

    for (const [shelf, books] of Object.entries(libraryShelf)) {
      if (this._shelves[books] && this._shelves[books].length > 0) {
        result += `\n  == ${shelf} ==\n`;
        this._shelves[books].forEach(book => {
          result += `${book.title}, by ${book.authors}, ${book.pages} pages\n`;
        });
      }
      result += 'No books added';
    }

    return result.trim();
  }
}
