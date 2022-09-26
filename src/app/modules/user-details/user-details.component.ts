import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserDataService} from "../../services/user-data.service";
import {User} from "../../shared/domain/user";
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user!: User;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private userDataService: UserDataService,
    private location: Location
  ) {
    // throws an error that user does not exist, so dummy solution for now
    this.user = new User(0, "", "", "", "");
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      let id = params["id"];
      if (id <= 0) {
        this.router.navigate(["not-found"]);
      } else {
        this.userDataService.getByID(id).subscribe(user => this.user = user);
      }
    })
  }

  redirectToPreviousPage() {
    // check if import is correct when using the following:
    this.location.back();
  }
}
