import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Form } from 'src/app/shared/form/models/Form';
import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {}

  submit(data: Form): void {
    this.userService.registerUser(data).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['']);
      },
      err => {
        console.log(err);
      }
    );
  }

  goToLoginPage(): void {
    this.router.navigateByUrl('/login');
  }
}
