import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';

@Component({
  selector: 'app-pikes-user',
  templateUrl: './pikes-user.component.html',
  styleUrls: ['./pikes-user.component.css']
})
export class PikesUserComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

}
