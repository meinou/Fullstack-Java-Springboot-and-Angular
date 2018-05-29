import { Component, OnInit, Input } from '@angular/core';
import {TicketsService} from '../services/tickets.service';
import { Ticket } from '../models/ticket';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  inputs: ['type']
})
export class CardComponent implements OnInit {

  @Input() type: string;
  title: string;
  amount: number;
  icon: string;
  rout: string;
  tickets: Ticket[] = null;

  typeData: {} = {
    task: {
      title: 'New Tasks',
      icon: 'glyphicon-tasks'
    },
    support: {
      title: 'Support Tickets',
      icon: 'glyphicon-exclamation-sign'
    },
    comment: {
      title: 'New Comments',
      icon: 'glyphicon-envelope'
    },
    order: {
      title: 'Orders',
      icon: 'glyphicon-shopping-cart'
    }
  };

   constructor(private service: TicketsService) {

   }

  ngOnInit() {
    const typeDetails = this.typeData[this.type];
    if (typeDetails) {
      this.title = typeDetails.title;
      this.icon = typeDetails.icon;
    }

    this.rout = `tickets/${this.type}`;
    this.getAmount();
  }

  getAmount(): void {
    this.service.getTicketsByType(this.type)
      .subscribe(tickets => this.amount = tickets.length);
  }

  toggleDetails(): void {
    if (this.tickets == null) {
      this.service.getTicketsByType(this.type)
      .subscribe(tickets => {
        this.tickets = tickets;
      });
    } else {
      this.tickets = null;
    }
  }
}
