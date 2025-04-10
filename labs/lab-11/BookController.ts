import Book from "./Book";
const readline = require('readline-sync');
export default class BookController {
  
    private book1: Book = new Book("1", "The Great Gatsby", "F. Scott Fitzgerald", 1925);
    private book2: Book = new Book("2", "To Kill a Mockingbird", "Harper Lee", 1960);
    private bookList: Book[] = [this.book1, this.book2];
    

    public manageBook(): void {
        let isExit = false;

        while (!isExit) {
            this.printMenu();
            let choice: number = Number(readline.question("Enter your choice: "));
            switch (choice) {
                case 1:
                    this.addNewBook();
                    break;
                case 2:
                    this.findABook();
                    break;
                case 3:
                    this.updateABook();
                    break;
                case 4:
                    this.deleteABook();
                    break;
                case 5:
                    this.printBookList();
                    break;
                case 0:
                    isExit = true;
                    console.log("Goodbye!");
                    break;
                default:
                    console.log("Invalid choice. Please try again.");
                    break;
            }
        }

    }
    private printMenu(): void {
        console.log("============Book Management Program (CRUD)============\n"
            + "1. New book\n"
            + "2. Find a book(ISBN)\n"
            + "3. Update a book\n"
            + "4. Delete a book\n"
            + "5. Print the book list\n"
            + "0. Exit\n"
        );

    }

    private foundBook(ISBN: string): Book | undefined {
        let book: Book | undefined = this.bookList.find((book) => book.getISBN() === ISBN);
        return book;
    }

    private addNewBook(): void {
        let ISBN: string = readline.question("Please input ISBN:");
        if (this.foundBook(ISBN)) {
            console.log("The book is already in the list.");
        } else {
            let title: string = readline.question("Please input title:");
            let author: string = readline.question("Please input author:");
            console.log("Please input year:");
            let year: number = Number(readline.question("Year: "));
            let book: Book = new Book(ISBN, title, author, year);
            this.bookList.push(book);
            console.log(`The book is saved into DB wit info: Book {${book.getISBN()}, ${book.getTitle()}, ${book.getAuthor()}, ${book.getYear()}}`);
        }
    }

    private findABook(): void {
        let ISBN: string = readline.question("Please input ISBN: ");
        let book: Book | undefined = this.foundBook(ISBN);
        if (book) {
            console.log(`Book info: Book {${book.getISBN()}, ${book.getTitle()}, ${book.getAuthor()}, ${book.getYear()}}`);
        } else {
            console.log(`Book with ISBN <${ISBN}> is not found`);
        }
    }

    private updateABook(): void {
        let ISBN: string = readline.question("Please input ISBN: ");
        let book: Book | undefined = this.foundBook(ISBN);
        if (book) {
            let title: string = readline.question("Please input new title:");
            book.setTitle(title);
            let author: string = readline.question("Please input new author:");
            book.setAuthor(author);
            let year: number = Number(readline.question("Please input new year:"));
            book.setYear(year);
            console.log(`The book is now updated into DB with new content: Book {${book.getISBN()}, ${book.getTitle()}, ${book.getAuthor()}, ${book.getYear()}}`);
        } else {
            console.log("Book not found!");
        }
    }

    private deleteABook(): void {
        let ISBN: string = readline.question("Please input ISBN: ");
        let book: Book | undefined = this.foundBook(ISBN);
        if (book) {
            let index: number = this.bookList.indexOf(book);
            this.bookList.splice(index, 1);
            console.log(`The book is deleted from DB with info: Book {${book.getISBN()}, ${book.getTitle()}, ${book.getAuthor()}, ${book.getYear()}}`);
        } else {
            console.log("Book not found!");
        }
    }

    private printBookList(): void {
        console.log("Book list:");
        for (let index = 0; index < this.bookList.length; index++) {
            console.log("Book " + (index + 1) + ": " + this.bookList[index].getTitle());
            console.log("\tISBN: " + this.bookList[index].getISBN());
            console.log("\tauthor: " + this.bookList[index].getAuthor());
            console.log("\tyear: " + this.bookList[index].getYear());
        }
    }
}