import { Injectable } from '@angular/core';
import { Form } from 'src/app/shared/form/models/Form';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

  loginUser(user: Form) {
    return this.http.post<any>(this.loginUrl, user);
  }
}
