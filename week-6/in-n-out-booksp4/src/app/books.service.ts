/**
 * Title: books.service.ts
 * Author: Gunner Bradley
 * Date: 24 April 2020
 * Description: Service class for book objects
 */

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780060850524',
        title: 'Brave New World',
        description: 'A dystopian social science fiction novel by English author Aldous Huxley, written in 1931 and published in 1932',
        numOfPages: 311,
        authors: ['Aldous Huxley']
      },
      {
        isbn: '9780064471046',
        title: 'The Lion, the Witch and the Wardrobe',
        description: "A land of talking animals and mythical creatures that is ruled by the evil White Witch. In the frame story, four English children are relocated to a large, old country house following a wartime evacuation.",
        numOfPages: 208,
        authors: ['Lewis, C. S.']
      },
      {
        isbn: '9780241453513',
        title: 'Nineteen Eighty-Four',
        description: "an imagined future, the year 1984, when much of the world has fallen victim to perpetual war, omnipresent government surveillance, historical negationism, and propaganda.",
        numOfPages: 328,
        authors: ['George Orwell']
      },
      {
        isbn: '9780553213515',
        title: 'The Time Machine',
        description: " scientist and inventor creates a time machine, he travels to the distant future to see what\’s in store for humanity.",
        numOfPages: 84,
        authors: ['H.G. Wells']
      },
      {
        isbn: '9780593099322',
        title: 'Dune',
        description: "A deluxe hardcover edition of Frank Herbert\’s epic masterpiece—a triumph of the imagination and one of the bestselling science fiction novels of all time.",
        numOfPages: 688,
        authors: ['Frank Herbert']
      }
    ]
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
