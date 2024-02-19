import { Router, UrlTree } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): Observable<boolean | UrlTree | Promise<boolean | UrlTree>> | boolean | UrlTree {
    if(!this.authService.isLoggedIn()) {
      this.router.navigate(['/signin']);
      return false;
    }

    this.authService.isLoggedIn();
    return true;
  }
}
