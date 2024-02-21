import { User } from 'src/app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient : HttpClient) {}

  listUsers() : Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/users`, {});
  }

  createUser(user: User) : Observable<any> {
    return this.httpClient.post(`${this.apiUrl}/users`, user);
  }

  findUser(id: number) : Observable<any> {
    return this.httpClient.get(`${`${this.apiUrl}/users`}/${id}`, {});
  }

  updateUser(id: number, user: User) : Observable<any> {
    return this.httpClient.put(`${`${this.apiUrl}/users`}/${id}`, user);
  }

  deleteUser(id?: number) : Observable<any> {
    return this.httpClient.delete(`${`${this.apiUrl}/users`}/${id}`, {});
  }

  uploadUserImage(id: number, imageFile: File) {
    const formData = new FormData();
    formData.append('image', imageFile);

    return this.httpClient.put(`${this.apiUrl}/users/${id}/image`, formData);
  }
}
