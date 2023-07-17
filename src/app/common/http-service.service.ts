import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Login } from './service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private http:HttpClient
  ) { 
  }

  httpHeader = new HttpHeaders({
    'content-type': 'application/json',
    'Accept': 'application/json'
  })


  /** GET heroes from the server */
  getUser(): Observable<Login[]> {
    return this.http.get<Login[]>('https://jsonplaceholder.typicode.com/users',{'headers':this.httpHeader})
      .pipe(
        tap((_: any) => console.log('fetched users')),
        catchError(this.handleError<Login[]>('getHeroes', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
