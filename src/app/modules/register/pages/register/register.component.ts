import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/shared/form/models/Form';
import { UserService } from '../../../../services/user/user.service';
import { NotificationService } from 'src/app/shared/notification/service/notification.service';
import { Notification } from 'src/app/shared/notification/models/notification';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private userService: UserService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}

  submit(data: Form): void {
    this.userService.registerUser(data).subscribe(
      res => {
        this.sendNotification({
          message: 'You have been successfully registered and logged in!',
          type: 'success',
          duration: 3000
        });
        localStorage.setItem('token', res.token);
        this.router.navigate(['']);
      },
      err => {
        this.sendNotification({
          message: err.error,
          type: 'warning',
          duration: 5000
        });
        console.log(err);
      }
    );
  }

  goToLoginPage(): void {
    this.router.navigateByUrl('/login');
  }

  sendNotification(notification: Notification): void {
    this.notificationService.addNotification(notification);
  }
}
