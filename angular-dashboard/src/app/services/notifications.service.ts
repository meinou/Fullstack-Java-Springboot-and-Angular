import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Notification } from '../models/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  private notificationsUrl = 'http://localhost:8080/notifications';

  constructor(private http: HttpClient) { }

  getAllNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.notificationsUrl)
      .pipe(catchError(this.handleError('getAllNotifications', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getNotificationsByType(type: String): Observable<Notification[]> {
    const url = `${this.notificationsUrl}?type=${type}`
    return this.http.get<Notification[]>(url)
      .pipe(catchError(this.handleError('getNotificationsByType', [])));
  }
}
