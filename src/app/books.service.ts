import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { BookInterface } from "./book-interface"
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  public message: string = "Message en provenance du service";
  private urlServer: string = 'http://localhost:5000';
  private books: BookInterface[] = [];
  constructor(private http: HttpClient) { }

  getBooks() {
    //renvoi observable, la souscription se fera côté composant
    return this.http.get(this.urlServer + '/books');
  }
}
