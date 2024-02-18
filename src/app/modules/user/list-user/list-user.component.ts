import { User } from 'src/app/models/user.model';
import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  users: User[] = [];
  cols: any[] = [
    {
      header: 'Name',
      field: '',
    },
    {
      header: 'E-mail',
      field: 'email',
    },
    {
      header: 'Birthday',
      field: 'birthday',
    },
    {
      header: 'Login',
      field: 'login',
    },
    {
      header: 'Phone',
      field: 'phone',
    },
  ]

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.listUsers()
    .subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }
}