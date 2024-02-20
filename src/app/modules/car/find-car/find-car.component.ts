import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-find-car',
  templateUrl: './find-car.component.html',
  styleUrls: ['./find-car.component.scss']
})
export class FindCarComponent {
  car: Car = {};
  carId?: number;

  constructor(private carService: CarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fetchCar(params['id']);
    });
  }

  fetchCar(id: number) {
    this.carService.findCar(id)
    .subscribe({
      next: (response) => {
        this.car = response;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }
}
