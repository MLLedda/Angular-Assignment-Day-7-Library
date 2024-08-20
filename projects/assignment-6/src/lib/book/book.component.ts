import { Component } from '@angular/core';

interface Book {
  id: number;
  title: string;
  author: string;
}

@Component({
  selector: 'lib-book',
  standalone: true,
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent {
  books: Book[] = [];
  nextId = 1;

  createBook() {
    const newBook: Book = {
      id: this.nextId++,
      title: `Book ${this.nextId}`,
      author: `Author ${this.nextId}`
    };
    this.books.push(newBook);
    console.log('Book created:', newBook);
  }

  readBooks() {
    console.log('All books:', this.books);
  }

  updateBook(bookId: number, newTitle: string, newAuthor: string) {
    const book = this.books.find(b => b.id === bookId);
    if (book) {
      book.title = newTitle;
      book.author = newAuthor;
      console.log('Book updated:', book);
    } else {
      console.log('Book not found');
    }
  }

  deleteBook(bookId: number) {
    this.books = this.books.filter(b => b.id !== bookId);
    console.log('Book deleted with ID:', bookId);
  }
}