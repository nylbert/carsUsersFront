import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserDetails } from 'src/app/models/user-details.model';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit, OnChanges{

  userDetails: UserDetails = { cars: [] };

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.fetchUserDetails();
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  fetchUserDetails() {
    this.accountService.findUserDetails()
    .subscribe({
      next: (response) => {
        this.userDetails = response;
      },
      error: (error) => {
        console.log(error)
      }
    });
  }

}
