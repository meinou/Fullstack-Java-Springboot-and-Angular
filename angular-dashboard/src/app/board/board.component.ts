import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { TicketsTaskComponent } from '../tickets-task/tickets-task.component';
import { TicketsSupportComponent } from '../tickets-support/tickets-support.component'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
