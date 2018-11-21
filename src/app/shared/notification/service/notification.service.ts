import { Injectable } from '@angular/core';
import { Notification } from '../models/notification';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  notificationList: Notification[] = [];

  constructor() {}

  getNotifications(): Observable<Notification[]> {
    return of(this.notificationList);
  }

  addNotification(notification: Notification): void {
    this.notificationList.push(notification);
    if (notification.duration) {
      setTimeout(() => {
        const notificationIndex = this.notificationList.indexOf(notification);
        this.notificationList.splice(notificationIndex, 1);
      }, notification.duration);
    }
  }

  removeNotification(notificationIndex: number): void {
    this.notificationList.splice(notificationIndex, 1);
  }
}
