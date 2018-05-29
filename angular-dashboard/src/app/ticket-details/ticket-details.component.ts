import { Component, OnInit, Inject, Input } from '@angular/core';

import { TicketsService } from '../services/tickets.service';
import { Ticket } from '../models/ticket';

import { Params, ActivatedRoute } from '@angular/router';
//import 'rxjs/add/operator/switchmap';

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.scss']
})
export class TicketDetailsComponent implements OnInit {

  @Input() type: string;

  ticket: Ticket;
  resolved: boolean;

  constructor(private service: TicketsService,
              private route: ActivatedRoute
            ) { }

  ngOnInit() {
    this.resolved = false;
    this.getTicket();
}

  getTicket(): void {
      this.service.getTicketById(+this.route.snapshot.params['id'])
        .subscribe(ticket => {
          this.ticket = ticket;
          console.log('ticket',ticket);
        });
  }

  resolve() {
    this.ticket.resolved = true;
    this.service.resolve(this.ticket) 
      .subscribe(() => {
        console.log(this.ticket);
        this.resolved = true;
      });
  }


}
