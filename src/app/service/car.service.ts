import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private url: string = 'https://user-car-api-2197b529f599.herokuapp.com/api/cars';

  constructor(private httpClient : HttpClient, private authService: AuthService) {}

  listCars() : Observable<any> {
    let headers = this.buildHeaders();
    return this.httpClient.get(this.url, { headers });
  }

  createCar(car: Car) : Observable<any> {
    let headers = this.buildHeaders();
    return this.httpClient.post(this.url, car, { headers });
  }

  findCar(id: number) : Observable<any> {
    let headers = this.buildHeaders();
    return this.httpClient.get(`${this.url}/${id}`, { headers });
  }

  updateCar(id: number, car: Car) : Observable<any> {
    let headers = this.buildHeaders();
    return this.httpClient.put(`${this.url}/${id}`, car, { headers });
  }

  deleteCar(id?: number) : Observable<any> {
    let headers = this.buildHeaders();
    return this.httpClient.delete(`${this.url}/${id}`, { headers });
  }

  buildHeaders() : HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.authService.getAuthToken()}`);
  }
}
