import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'primeng/api';
import { Car } from 'src/app/models/car.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnChanges{
  user: User = { cars: [] };
  messages: Message[] = [];
  visible?: boolean;
  car: Car = {};

  constructor(private userService: UserService) { }

  ngOnChanges(changes: SimpleChanges): void {
  
  }

  showDialog() {
    this.visible = true;
  }

  closeDialog() {
    this.visible = false;
  }

  onSubmitCar(data: NgForm) {
    console.log(data);
    this.user.cars.push(data.form.value);
    this.closeDialog();
  }

  onSubmit() {
    console.log('Submitted User:', this.user);
    this.userService.createUser(this.user).subscribe({
      next: (response) => {
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'Usuário criado com sucesso!' }];
      }, error: (error) => {
        this.messages = [{ severity: 'error', summary: 'Error', detail: error.error.message }];
      }
    });
  }

  deleteCar(car: Car) {
    let index = this.user.cars.indexOf(car);
    this.user.cars.splice(index, 1);
  }
}
