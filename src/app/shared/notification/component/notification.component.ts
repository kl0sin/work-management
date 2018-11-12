import { NotificationService } from './../service/notification.service';
import { Notification } from './../models/notification';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('inOutListAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ transform: 'translateX(-120%)' }),
            stagger(200, [
              animate('500ms ease-out', style({ transform: 'translateX(0)' }))
            ])
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            stagger(200, [
              animate(
                '500ms ease-in',
                style({ transform: 'translateX(-120%)' })
              )
            ])
          ],
          { optional: true }
        )
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
