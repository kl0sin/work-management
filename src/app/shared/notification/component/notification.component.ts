import { NotificationService } from './../service/notification.service';
import { Notification } from './../models/notification';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({ opacity: 0 }))
          ])
        ], { optional: true }),
        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ], { optional: true })
      ])
    ])
  ]
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
