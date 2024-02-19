import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url: string = 'http://localhost:8080/api/me';

  constructor(private httpClient : HttpClient, private authService: AuthService) {}

  findUserDetails() : Observable<any> {
    let headers = new HttpHeaders().set('Authorization', `Bearer ${this.authService.getAuthToken()}`);
    return this.httpClient.get(this.url, { headers });
  }
}
