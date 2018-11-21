import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NotificationService } from 'src/app/shared/notification/service/notification.service';
import { Notification } from 'src/app/shared/notification/models/notification';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {}

  submit(data): void {
    this.authService.loginUser(data).subscribe(
      res => {
        this.sendNotification({
          message: 'You have been successfully logged in!',
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

  goToRegisterPage(): void {
    this.router.navigateByUrl('/register');
  }

  sendNotification(notification: Notification): void {
    this.notificationService.addNotification(notification);
  }
}
