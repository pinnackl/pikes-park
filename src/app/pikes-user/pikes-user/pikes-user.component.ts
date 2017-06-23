import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth/auth.service';
import { PikesUserService } from '../pikes-user.service';

@Component({
  selector: 'app-pikes-user',
  templateUrl: './pikes-user.component.html',
  styleUrls: ['./pikes-user.component.css'],
  providers: [PikesUserService]
})
export class PikesUserComponent implements OnInit {

  profile: any;

  constructor(public auth: AuthService, private pikesUserService: PikesUserService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
      this.pikesUserService.setUser(this.profile);
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.pikesUserService.setUser(this.profile);
      });
    }
  }

}
