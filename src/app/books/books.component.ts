import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input('data')
  book = {
    id: 0,
    author: '',
    title: '',
    publicationDate: '',
    available: false,
    nbPages: 0,
    nbRent: 0
  };
  constructor() { }

  ngOnInit() {
  }

}
