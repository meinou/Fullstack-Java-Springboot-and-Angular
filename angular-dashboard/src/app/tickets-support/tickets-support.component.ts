import { Component, OnInit } from '@angular/core';

import { Ticket } from '../models/ticket';
import { TicketsService } from '../services/tickets.service';


@Component({
  selector: 'app-tickets-support',
  templateUrl: './tickets-support.component.html',
  styleUrls: ['./tickets-support.component.css']
})
export class TicketsSupportComponent implements OnInit {

  constructor(private service: TicketsService) { }

  tickets: Ticket[];
  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.service.getAllSupportTickets()
    .subscribe(tasks => this.tickets = tasks);
  }
}
