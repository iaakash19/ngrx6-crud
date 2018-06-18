import { Pizza } from './../../../models/pizza.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PizzaService {
  constructor(private http: HttpClient) {

  }

  getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>("http://localhost:3000/pizzas")
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
