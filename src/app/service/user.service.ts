import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'https://user-car-api-2197b529f599.herokuapp.com/api/users';

  constructor(private httpClient : HttpClient) {}

  listUsers() : Observable<any> {
    return this.httpClient.get(this.url, {});
  }

  createUser(user: User) : Observable<any> {
    return this.httpClient.post(this.url, user);
  }

  findUser(id: number) : Observable<any> {
    return this.httpClient.get(`${this.url}/${id}`, {});
  }

  updateUser(id: number, user: User) : Observable<any> {
    return this.httpClient.put(`${this.url}/${id}`, user);
  }

  deleteUser(id?: number) : Observable<any> {
    return this.httpClient.delete(`${this.url}/${id}`, {});
  }
}
