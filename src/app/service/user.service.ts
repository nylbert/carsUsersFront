import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:8080/api/users';

  constructor(private httpClient : HttpClient) {}

  listUsers() : Observable<any> {
    return this.httpClient.get(this.url, {});
  }

  createUser(user: User) : Observable<any> {
    return this.httpClient.post(this.url, user);
  }
}
