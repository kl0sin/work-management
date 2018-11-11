import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() title: string;
  @Input() type: string;
  @Input() isClear: boolean;
  @Output() outSubmit: EventEmitter<any> = new EventEmitter<any>();

  userForm: FormGroup;

  isEmail = false;
  isFirstName = false;
  isLastName = false;
  isPassword = false;
  isConfirmPassword = false;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      email: null,
      firstName: null,
      lastName: null,
      password: null,
      confirmPassword: null
    });
  }

  ngOnInit(): void {
    this.setUpForm();
  }

  setUpForm(): void {
    switch (this.type) {
      case 'register': {
        this.isEmail = true;
        this.isFirstName = true;
        this.isLastName = true;
        this.isPassword = true;
        this.isConfirmPassword = true;
        break;
      }
      default: {
        this.isEmail = true;
        this.isPassword = true;
        break;
      }
    }
  }

  submit(): void {
    this.outSubmit.emit(this.userForm.value);
  }

  resetForm(): void {
    this.userForm.reset();
  }
}
