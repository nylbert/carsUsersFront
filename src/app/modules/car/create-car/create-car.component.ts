import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { Car } from 'src/app/models/car.model';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss']
})
export class CreateCarComponent {
  car: Car = {};
  messages: Message[] = [];
  visible?: boolean;

  constructor(private carService: CarService) { }

  onSubmit() {
    console.log('Submitted Car:', this.car);
    this.carService.createCar(this.car).subscribe({
      next: () => {
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'Carro criado com sucesso!' }];
      }, error: (error) => {
        this.messages = [{ severity: 'error', summary: 'Error', detail: error.error.message }];
      }
    });
  }
}
