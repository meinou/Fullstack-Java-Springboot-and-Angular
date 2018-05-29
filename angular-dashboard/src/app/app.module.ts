import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module'; // <-- NgModel lives here
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BoardComponent } from './board/board.component';
import { TicketsSupportComponent } from './tickets-support/tickets-support.component';
import { TicketsTaskComponent } from './tickets-task/tickets-task.component';
import { CardComponent } from './card/card.component';
import { PanelComponent } from './panel/panel.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { GraphComponent } from './graph/graph.component';

import { ChartModule } from 'angular-highcharts';
import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    BoardComponent,
    TicketsSupportComponent,
    TicketsTaskComponent,
    CardComponent,
    PanelComponent,
    NotificationsComponent,
    GraphComponent,
    TicketDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
