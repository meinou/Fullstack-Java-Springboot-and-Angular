import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { Notification } from '../models/notification';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  notifications: Notification[];
  content: string;
  icons: {} = {
    comment: 'glyphicon-envelope',
    task: 'glyphicon-tasks',
    support: 'glyphicon-exclamation-sign',
    order: 'glyphicon-shopping-cart'
  }


  constructor(private service: NotificationsService) { }

  ngOnInit() {
    this.getNotifications();
  }

  getNotifications(): void {
    this.service.getAllNotifications()
      .subscribe(notifications => {
        this.notifications = notifications;
      });
  }
}
