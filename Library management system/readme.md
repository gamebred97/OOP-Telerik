Try building a library management system using modular OOP principles. Here’s how you can structure it:

	1.	Book class (Encapsulation)
	•	Properties: title, author, isbn, availableCopies
	•	Methods: borrow(), returnBook()


	2.	User class
	•	Properties: name, userId, borrowedBooks
	•	Methods: borrowBook(book), returnBook(book)


	3.	Library class (Composition & Inheritance)
	•	Properties: books, users
	•	Methods: addBook(book), registerUser(user), findBook(isbn), listAvailableBooks()


	4.	DigitalLibrary (inherits Library) (Inheritance)
	•	Adds features like downloadBook(book)

To test if the program works correctly, you should:

	1.	Create a library instance


	2.	Add books and check their IDs


	3.	Register users and verify user count


	4.	Check static properties/methods to confirm correct tracking
