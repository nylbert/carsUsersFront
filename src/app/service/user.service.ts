import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:8080/api/users';

  constructor(private httpClient : HttpClient) {}

  listUsers() : Observable<any> {
    return this.httpClient.get(this.url, {});
  }
}
