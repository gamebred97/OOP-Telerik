import { bookGenre } from '../common/book-genre.js';

/**
 * Represents a book with a title, genre, page count, and authors.
 */
export class Book {
  #title;
  #genre
  #pages;
  #authors;

  /**
   * Creates an instance of Book.
   * @param {string} title - The title of the book.
   * @param {string} genre - The genre of the book, must be a valid value from bookGenre.
   * @param {number} pages - The number of pages, must be a positive integer.
   * @param {string} authors - A comma-separated string of author names.
   * @throws {Error} If any parameter is invalid.
   */
  constructor(title, genre, pages, authors) {
    this.title = title;
    this.genre = genre;
    this.pages = pages;
    this.authors = authors;
  }

  /**
   * Gets the title of the book.
   * @return {string} The book title.
   */
  get title() {
    return this.#title;
  }

  /**
   * Sets the title of the book.
   * @param {string} value - The new title.
   * @throws {Error} If the title is empty or exceeds 255 characters.
   */
  set title(value) {
    if (!value || value.length < 1 || value.length > 255) throw new Error('Invalid String');

    this.#title = value;
  }


  /**
   * Gets the genre of the book.
   * @return {string} The book genre.
   */
  get genre() {
    return this.#genre;
  }

  /**
   * Sets the genre of the book.
   * @param {string} value - The new genre.
   * @throws {Error} If the genre is not a valid value from bookGenre.
   */
  set genre(value) {
    if (!Object.values(bookGenre).includes(value)) throw new Error('Invalid genre');

    this.#genre = value;
  }

  /**
   * Gets the number of pages in the book.
   * @return {number} The page count.
   */
  get pages() {
    return this.#pages;
  }

  /**
   * Sets the number of pages in the book.
   * @param {number} value - The new page count.
   * @throws {Error} If pages are not a positive integer.
   */
  set pages(value) {
    const numberCheck = (number) => Number.isInteger(number) && number > 0;

    if (numberCheck(value)) {
      this.#pages = value;
    } else {
      throw new Error('Pages must be a whole positive number!');
    }
  }


  /**
   * Gets the authors of the book.
   * @return {string} A comma-separated string of author names.
   */
  get authors() {
    return this.#authors;
  }

  /**
   * Sets the authors of the book.
   * @param {string} value - A comma-separated string of author names.
   * @throws {Error} If no valid author names are provided.
   */
  set authors(value) {

    if (!value || typeof value !== 'string' || value.trim() === '') throw new Error('Invalid author name');

    const authorsArray = value.split(',').map(el => el.trim()).filter(el => el.length > 0);

    if (authorsArray.length === 0) throw new Error('At least one entry needed');

    if (authorsArray.some(name => name.length < 1 || name.length > 40)) throw new Error('Invalid names length');

    this.#authors = authorsArray.join(',');
  }


}
