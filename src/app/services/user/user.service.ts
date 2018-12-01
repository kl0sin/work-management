import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Form } from '../../shared/form/models/form';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private registerUrl = 'http://localhost:3000/api/register';

  constructor(private http: HttpClient) {}

  registerUser(user: Form) {
    return this.http.post<any>(this.registerUrl, user);
  }
}
