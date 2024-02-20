import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient : HttpClient, private authService: AuthService) {}

  findUserDetails() : Observable<any> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.authService.getAuthToken()}`);
    return this.httpClient.get(`${this.apiUrl}/me`, { headers });
  }
}
