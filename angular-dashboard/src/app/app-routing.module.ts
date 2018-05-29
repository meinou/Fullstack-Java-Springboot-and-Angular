import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { BoardComponent } from './board/board.component'
import { TicketsTaskComponent } from './tickets-task/tickets-task.component';
import { TicketsSupportComponent } from './tickets-support/tickets-support.component';

import { TicketDetailsComponent } from './ticket-details/ticket-details.component';

const routes: Routes = [
  {path: 'users', component: UsersComponent},
  {path: 'dashboard', component: BoardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard/tickets/task', component: TicketsTaskComponent, outlet: 'popup'},
  {path: 'tickets/support', component: TicketsSupportComponent},
  {path: 'tickets/:type/:id', component: TicketDetailsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    [ RouterModule.forRoot(routes) ]
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
