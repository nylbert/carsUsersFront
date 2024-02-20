import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/api';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss']
})
export class UpdateCarComponent {
  messages: Message[] = [];
  car: Car = {};
  carId: number = -1;

  constructor(private carService: CarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carId = params['id'];
      this.fetchCar(this.carId);
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

  onSubmit() {
    console.log('Submitted Car:', this.car);
    this.carService.updateCar(this.carId, this.car).subscribe({
      next: (response) => {
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'Carro atualizado com sucesso!' }];
      }, error: (error) => {
        this.messages = [{ severity: 'error', summary: 'Error', detail: error.error.message }];
      }
    });
  }
}
