import { NotificationService } from './../service/notification.service';
import { Notification } from './../models/notification';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  notificationSubscription: Subscription;
  notifications: Notification[];

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.notificationService.getNotifications().subscribe(notifications => {
      this.notifications = notifications;
    });
  }

  removeNotification(notificationIndex: number): void {
    this.notificationService.removeNotification(notificationIndex);
  }
}
