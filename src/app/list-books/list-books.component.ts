///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import { BooksService} from "../books.service";
import {Books} from "../../model/books.interface";

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {
  books: Books[] = [];
  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe((res: Books[]) => {
        this.books = res;

      })
    console.log(this.books);
  }

}
