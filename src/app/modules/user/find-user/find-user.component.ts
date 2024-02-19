import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.scss']
})
export class FindUserComponent {
  user: User = { cars: []};
  userId?: number;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.fetchUser(params['id']);
    });
  }

  fetchUser(id: number) {
    this.userService.findUser(id)
    .subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }
}
