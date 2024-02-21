import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.scss']
})
export class ListCarComponent implements OnInit {
  cars: Car[] = [];
  cols: any[] = [
    {
      header: 'Modelo',
      field: 'model',
    },
    {
      header: 'Ano',
      field: 'year',
    },
    {
      header: 'Placa',
      field: 'licensePlate',
    },
    {
      header: 'Cor',
      field: 'color',
    }
  ]

  constructor(private carService: CarService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars() {
    this.carService.listCars()
    .subscribe({
      next: (response) => {
        this.cars = response;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

  deleteCar(car: Car) {
    this.carService.deleteCar(car.id).subscribe({
      next: (response) => {
        console.log(response);
        this.fetchCars();
      }, error: (error) => {
        console.log(error);
      }
    })
  }

  onFileSelected(event: any, car: Car): void {
    car.image = event.target.files[0];
  }

  onUpload(car: Car): void {
    if (car.id && car.image) {
      this.carService.uploadCarImage(car.id, car.image).subscribe({
        next: (response) => {
          console.log('Upload successful', response);
          this.fetchCars();
        },
        error: (error) => console.error('Upload failed', error)
      });
    }
  }

  sanitizeImageUrl(byteArray: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + byteArray);
  }
}
