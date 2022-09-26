import {Component, OnInit} from '@angular/core';
import {UserDataService} from "../../services/user-data.service";
import {User} from "../../shared/domain/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

  users!: User[];

  constructor(private userDataService: UserDataService, private router: Router) { }

  ngOnInit(): void {
    this.userDataService.get().subscribe(allUsers => {
      this.users = allUsers;
    });
  }

  navigateToUserDetails(id: number) {
    let currentURL = this.router.url;
    this.router.navigate([currentURL, id]);
  }
}
