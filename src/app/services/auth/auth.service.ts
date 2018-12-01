import { Injectable } from '@angular/core';
import { Form } from '../../shared/form/models/form';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient, private router: Router) {}

  loginUser(user: Form) {
    return this.http.post<any>(this.loginUrl, user);
  }

  isUserLogged(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  logoutUser(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
