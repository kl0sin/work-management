import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  submit(data): void {
    this.authService.loginUser(data).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['']);
      },
      err => {
        console.log(err);
      }
    );
  }

  goToRegisterPage(): void {
    this.router.navigateByUrl('/register');
  }
}
