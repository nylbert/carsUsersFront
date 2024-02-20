import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'auth_token';
  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  login(username?: string, password?: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/signin`, { login: username, password });
  }

  setAuthToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean {
    return !!this.getAuthToken();
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
