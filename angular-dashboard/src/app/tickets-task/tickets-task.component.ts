import { Component, OnInit } from '@angular/core';
import { Ticket } from '../models/ticket';
import { TicketsService } from '../services/tickets.service';

@Component({
  selector: 'app-tickets-task',
  templateUrl: './tickets-task.component.html',
  styleUrls: ['./tickets-task.component.css']
})
export class TicketsTaskComponent implements OnInit {

  constructor(private service: TicketsService) { }

  tickets: Ticket[];
  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.service.getTicketsByType('task')
    .subscribe(tasks => this.tickets = tasks);
  }

}
