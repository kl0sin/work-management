import { Injectable } from '@angular/core';
import { Notification } from '../models/notification';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationList: Notification[] = [
    {
      type: 'warning',
      text: 'Warning notification'
    },
    {
      type: 'success',
      text: 'Success notification'
    },
    {
      type: 'alert',
      text: 'Alert notification'
    },
    {
      type: 'info',
      text: 'Info notification'
    }
  ];

  constructor() {}

  getNotifications(): Observable<Notification[]> {
    return of(this.notificationList);
  }

  addNotification(notification: Notification): void {
    this.notificationList.push(notification);
  }

  removeNotification(notificationIndex: number): void {
    this.notificationList.splice(notificationIndex, 1);
  }
}
