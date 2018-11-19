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
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );

    console.log(data);
  }

  goToLoginPage(): void {
    this.router.navigateByUrl('/login');
  }
}
