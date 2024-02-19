import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  username: string = '';
  password: string = '';
  messages: Message[] = [];

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        console.log(response);
        this.authService.setAuthToken(response.token);
        this.router.navigate(['']);
      }, error: (error) => {
        console.log('Login error: ', error);
        this.messages = [{ severity: 'error', summary: 'Error', detail: error.error.message }];
      }
    });
  }
}
