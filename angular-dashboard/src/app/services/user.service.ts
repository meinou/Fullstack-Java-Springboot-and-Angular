import { Injectable } from '@angular/core';
import {User} from '../user';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private userUrl = 'http://localhost:8080/users';

  constructor( private http: HttpClient ) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl)
    .pipe(
      catchError(this.handleError('getAllUsers', []))
    );
  }

  getUserByUserName(userName: string): Observable<User> {
    const url = `${this.userUrl}/login/${userName}`;
    return this.http.get<User>(url)
    .pipe(
     // console.log('Error getting user with name ')
      //catchError(this.handleError('getAllUsers', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
