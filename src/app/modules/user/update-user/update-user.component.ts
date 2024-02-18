import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Message } from 'primeng/api';
import { Car } from 'src/app/models/car.model';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent {
  user: User = { cars: [] };
  messages: Message[] = [];
  visible?: boolean;
  car: Car = {};
  userId: number = -1;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      this.fetchUser(this.userId);
    });
  }

  fetchUser(id: number) {
    this.userService.findUser(id)
    .subscribe({
      next: (response) => {
        this.user = response;
        this.user.password = '';
      },
      error: (error) => {
        console.log(error)
      }
    });
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
    this.userService.updateUser(this.userId, this.user).subscribe({
      next: (response) => {
        this.messages = [{ severity: 'success', summary: 'Success', detail: 'Usuário atualizado com sucesso!' }];
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
