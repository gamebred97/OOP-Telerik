import { Library } from "./models/library.js";
import { Book } from "./models/book.js";
import { User } from "./models/user.js";
import { DigitalLibrary } from "./models/digitalLibrary.js";


console.log('--------NEW--------');
const myLibrary = new Library("City Library");
console.log(myLibrary);
console.log('--------NEW--------');

const book1 = new Book("Harry Potter", "J.K. Rowling", "123456", 3);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", "654321", 2);
const book3 = new Book("Komicite", "Krasi Kostadinov", "432341", 4);

myLibrary.addBook(book1);
myLibrary.addBook(book2);

console.log(myLibrary.books);
console.log('--------NEW--------');


myLibrary.removeBook(book1);
console.log(myLibrary.books);
console.log('--------NEW--------');


console.log(myLibrary.listAvailableBooks());
console.log('--------NEW--------');


const user1 = new User("Alice");
const user2 = new User("Bob");

myLibrary.registerUser(user1);
myLibrary.registerUser(user2);

console.log(myLibrary.users);
console.log('--------NEW--------');


user1.borrowBook(book1);
console.log(book1.availableCopies); 
console.log(user1.borrowedBooks);
console.log('--------NEW--------');


user1.returnBook(book1);
console.log(book1.availableCopies);
console.log(user1.borrowedBooks);
console.log('--------NEW--------');


const digitalLib = new DigitalLibrary("Online Library");
digitalLib.addBook(book2);
digitalLib.downloadBook(book3);
console.log(digitalLib.books);
