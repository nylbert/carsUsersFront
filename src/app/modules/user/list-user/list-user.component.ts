import { User } from 'src/app/models/user.model';
import { UserService } from './../../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(private userService: UserService, private sanitizer: DomSanitizer) { }

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

  deleteUser(user: User) {
    this.userService.deleteUser(user.id).subscribe({
      next: (response) => {
        console.log(response);
        this.fetchUsers();
      }, error: (error) => {
        console.log(error);
      }
    })
  }

  onFileSelected(event: any, user: User): void {
    user.image = event.target.files[0];
  }

  onUpload(user: User): void {
    if (user.id && user.image) {
      this.userService.uploadUserImage(user.id, user.image).subscribe({
        next: (response) => {
          console.log('Upload successful', response);
          this.fetchUsers();
        },
        error: (error) => console.error('Upload failed', error)
      });
    }
  }

  sanitizeImageUrl(byteArray: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpeg;base64,' + byteArray);
  }
}