/**
 * Title: book.interface.ts
 * Author: Gunner Bradley
 * Date: February 6th 2022
 * Description: Book interface object
 */

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
