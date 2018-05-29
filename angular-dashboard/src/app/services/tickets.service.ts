import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Ticket } from '../models/ticket';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  private rootUrl = 'http://localhost:8080';
  private ticketUrl = `${this.rootUrl}/tickets`;

  constructor(private http: HttpClient) { }

  getGraphDataByMonth(date: Date, type: string): Observable<number[]> {
    return this.http.get<number[]>(`${this.rootUrl}/graph/tickets/${type}/${date.toISOString().slice(0,10).replace(/-/g,"")}`)
    .pipe(
      catchError(this.handleError('getGraphDataByMonth', []))
    );
  }

  getAllTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.ticketUrl)
    .pipe(
      catchError(this.handleError('getAllTickets', []))
    );
  }

  resolve(ticket: Ticket): Observable<any> {
    const url = `${this.ticketUrl}/${ticket.id}`
    return this.http.put(url, ticket, httpOptions);
  }

  getTicketsByType(type: string): Observable<Ticket[]> {
    const url = `${this.ticketUrl}?type=${type}`;
    return this.http.get<Ticket[]>(url)
    .pipe(
      catchError(this.handleError('getTicketsByType', []))
    );
  }

  getTicketById(id: number): Observable<Ticket> {
    const url = `${this.ticketUrl}/${id}`;
    return this.http.get<Ticket>(url);
  }

  getUnresolvedByType(type: string): Observable<Ticket[]> {
    const url = `${this.ticketUrl}/${type}/unresolved`;
    return this.http.get<Ticket[]>(url)
    .pipe(
      catchError(this.handleError('getUnresolvedByType', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
