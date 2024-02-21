import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient : HttpClient, private authService: AuthService) {}

  listCars() : Observable<any> {
    let headers = this.buildHeaders();
    return this.httpClient.get(`${this.apiUrl}/cars`, { headers });
  }

  createCar(car: Car) : Observable<any> {
    const headers = this.buildHeaders();
    return this.httpClient.post(`${this.apiUrl}/cars`, car, { headers });
  }

  findCar(id: number) : Observable<any> {
    const headers = this.buildHeaders();
    return this.httpClient.get(`${`${this.apiUrl}/cars`}/${id}`, { headers });
  }

  updateCar(id: number, car: Car) : Observable<any> {
    const headers = this.buildHeaders();
    return this.httpClient.put(`${`${this.apiUrl}/cars`}/${id}`, car, { headers });
  }

  deleteCar(id?: number) : Observable<any> {
    const headers = this.buildHeaders();
    return this.httpClient.delete(`${`${this.apiUrl}/cars`}/${id}`, { headers });
  }

  buildHeaders() : HttpHeaders {
    return new HttpHeaders().set('Authorization', `Bearer ${this.authService.getAuthToken()}`);
  }

  uploadCarImage(id: number, imageFile: File) {
    const headers = this.buildHeaders();
    const formData = new FormData();
    formData.append('image', imageFile);

    return this.httpClient.put(`${this.apiUrl}/cars/${id}/image`, formData, { headers });
  }
}
